import { useState, useEffect } from 'react';
import { ref, onValue, off, get } from 'firebase/database';
import { database, listenToAuthChanges, logout, getCurrentUserEmail } from './config/firebase';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { Language } from './config/translations';
import { Word, TrainingMode, Level, WordType } from './types';
import { shuffle } from './utils/helpers';
import Trainer from './components/Trainer';
import AddWord from './components/AddWord';
import WordList from './components/WordList';
import Settings from './components/Settings';
import Declension from './components/Declension';
import Conjugation from './components/Conjugation';
import SearchWords from './components/SearchWords';
import Tabs from './components/Tabs';
import Auth from './components/Auth';
import SettingsMenu from './components/SettingsMenu';
import Wordle from './components/Wordle';
import menuIcon from './icos/menu.svg';
import './App.css';

const APP_VERSION = 'v4.0.0';

function AppContent() {
  const { t, language, setLanguage } = useLanguage();
  const [uid, setUid] = useState<string | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [words, setWords] = useState<Word[]>([]);
  const [trainingMode, setTrainingMode] = useState<TrainingMode>('both');
  const [usePreset, setUsePreset] = useState(false);
  const [showWordList, setShowWordList] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showAddWord, setShowAddWord] = useState(false);
  const [showSearchWords, setShowSearchWords] = useState(false);
  const [searchWordQuery, setSearchWordQuery] = useState('');
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('trainer');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [installPromptEvent, setInstallPromptEvent] = useState<any>(null);
  const [canInstallApp, setCanInstallApp] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  const languageOptions: { code: Language; label: string; short: string }[] = [
    { code: 'lv', label: 'Latviešu', short: 'LV' },
    { code: 'ru', label: 'Русский', short: 'RU' },
    { code: 'en', label: 'English', short: 'EN' },
  ];

  const currentLanguage = languageOptions.find((option) => option.code === language) || languageOptions[0];

  const LanguageSelector = () => (
    <div className="language-dropdown" onMouseLeave={() => setIsLangOpen(false)}>
      <button
        type="button"
        className={`language-toggle ${isLangOpen ? 'open' : ''}`}
        onClick={() => setIsLangOpen(!isLangOpen)}
      >
        <span>{currentLanguage.short}</span>
        <span className="language-caret">▾</span>
      </button>
      {isLangOpen && (
        <div className="language-menu">
          {languageOptions.map((option) => (
            <button
              key={option.code}
              type="button"
              className={`language-menu-item ${language === option.code ? 'active' : ''}`}
              onClick={() => {
                setLanguage(option.code);
                setIsLangOpen(false);
              }}
            >
              {option.short}
              {language === option.code && <span className="language-check">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
  
  const [sessionStats_trainer, setSessionStats_trainer] = useState(() => {
    try {
      const saved = localStorage.getItem('sessionStats_trainer');
      return saved ? JSON.parse(saved) : { correct: 0, wrong: 0 };
    } catch (e) {
      return { correct: 0, wrong: 0 };
    }
  });

  const [sessionStats_declension, setSessionStats_declension] = useState(() => {
    try {
      const saved = localStorage.getItem('sessionStats_declension');
      return saved ? JSON.parse(saved) : { correct: 0, wrong: 0 };
    } catch (e) {
      return { correct: 0, wrong: 0 };
    }
  });

  const [sessionStats_conjugation, setSessionStats_conjugation] = useState(() => {
    try {
      const saved = localStorage.getItem('sessionStats_conjugation');
      return saved ? JSON.parse(saved) : { correct: 0, wrong: 0 };
    } catch (e) {
      return { correct: 0, wrong: 0 };
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('sessionStats_trainer', JSON.stringify(sessionStats_trainer));
    } catch (e) {
      // Silent fail
    }
  }, [sessionStats_trainer]);

  useEffect(() => {
    try {
      localStorage.setItem('sessionStats_declension', JSON.stringify(sessionStats_declension));
    } catch (e) {
      // Silent fail
    }
  }, [sessionStats_declension]);

  useEffect(() => {
    try {
      localStorage.setItem('sessionStats_conjugation', JSON.stringify(sessionStats_conjugation));
    } catch (e) {
      // Silent fail
    }
  }, [sessionStats_conjugation]);

  useEffect(() => {
    const unsubscribe = listenToAuthChanges((userId) => {
      setUid(userId);
      setAuthChecked(true);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setInstallPromptEvent(e);
      setCanInstallApp(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt as EventListener);
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt as EventListener);
    };
  }, []);

  useEffect(() => {
    const checkStandalone = () => {
      const isStandaloneDisplay = window.matchMedia('(display-mode: standalone)').matches;
      const isStandaloneIOS = (window.navigator as any).standalone === true;
      setIsStandalone(isStandaloneDisplay || isStandaloneIOS);
    };

    checkStandalone();
    const mediaQuery = window.matchMedia('(display-mode: standalone)');
    mediaQuery.addEventListener('change', checkStandalone);
    window.addEventListener('appinstalled', checkStandalone);
    return () => {
      mediaQuery.removeEventListener('change', checkStandalone);
      window.removeEventListener('appinstalled', checkStandalone);
    };
  }, []);

  const handleInstallApp = async () => {
    if (!installPromptEvent) {
      window.alert(t('installAppAlready'));
      window.open('https://support.google.com/chrome/answer/9658361', '_blank');
      return;
    }
    installPromptEvent.prompt();
    const choice = await installPromptEvent.userChoice;
    if (choice?.outcome === 'accepted') {
      setIsStandalone(true);
    }
    setInstallPromptEvent(null);
    setCanInstallApp(false);
  };

  useEffect(() => {
    if (!uid || usePreset) return;

    const wordsRef = ref(database, `users/${uid}/words`);
    
    onValue(wordsRef, (snapshot) => {
      const data = snapshot.val();
      const wordsArray: Word[] = data ? Object.values(data) : [];
      setWords(wordsArray);
    });

    return () => off(wordsRef);
  }, [uid, usePreset]);

  const loadPresetWords = async (level: Level, type: WordType) => {
    if (level === 'randomAll') {
      const presetsRef = ref(database, 'presets');
      const snapshot = await get(presetsRef);
      const data = snapshot.val();
      let all: Word[] = [];
      if (data) {
        Object.values(data).forEach((levelData: any) => {
          if (levelData[type]) {
            all = all.concat(Object.values(levelData[type]));
          }
        });
      }
      setWords(shuffle(all));
    } else {
      const presetRef = ref(database, `presets/${level}/${type}`);
      const snapshot = await get(presetRef);
      const data = snapshot.val();
      const wordsArray: Word[] = data ? shuffle(Object.values(data)) : [];
      setWords(wordsArray);
    }
  };

  const handleApplySettings = (level: Level, type: WordType, mode: TrainingMode) => {
    setTrainingMode(mode);
    setUsePreset(true);
    loadPresetWords(level, type);
  };

  const handleResetToPersonal = () => {
    setUsePreset(false);
    setTrainingMode('both');
  };

  const handleResetStats = () => {
    setSessionStats_trainer({ correct: 0, wrong: 0 });
    setSessionStats_declension({ correct: 0, wrong: 0 });
    setSessionStats_conjugation({ correct: 0, wrong: 0 });
  };

  const handleLogout = async () => {
    await logout();
    setShowSettingsMenu(false);
  };

  if (!authChecked) {
    return (
      <div className="App auth-mode">
        <div className="app-header auth-header">
          <h1 className="app-title">{t('title')}</h1>
          <div className="auth-lang">
            <LanguageSelector />
          </div>
        </div>
        <div className="auth-placeholder">{t('trainer')}</div>
      </div>
    );
  }

  if (!uid) {
    return (
      <div className="App auth-mode">
        <div className="app-header auth-header">
          <h1 className="app-title">{t('title')}</h1>
          <div className="auth-lang">
            <LanguageSelector />
          </div>
        </div>
        <Auth onAuthenticated={setUid} />
      </div>
    );
  }

  return (
    <div className="App">
      <div className="app-header">
        <h1 className="app-title">{t('title')}</h1>
        <button className="settings-icon-btn" onClick={() => setShowSettingsMenu(true)}>
          <img src={menuIcon} alt="Menu" className="menu-icon" />
        </button>
      </div>

      <Tabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        labels={{
          trainer: t('trainerTab'),
          manage: t('manageTab'),
          settings: t('settingsTab'),
          wordle: t('wordleTab')
        }}
      />

      <div className="tab-content-wrapper">
        {activeTab === 'trainer' && (
          <div className="tab-content active">
            <Trainer
              words={words}
              trainingMode={trainingMode}
              sessionStats={sessionStats_trainer}
              onSessionStatsChange={setSessionStats_trainer}
            />
            
            <div className="action-buttons">
              {!usePreset && (
                <>
                  <button className="icon-button" onClick={() => setShowSearchWords(true)} title={t('searchWords') || 'Поиск слов'}>
                    {t('searchWords') || 'Поиск'}
                  </button>
                  <button className="icon-button" onClick={() => setShowAddWord(true)} title={t('addWordButton')}>
                    {t('addWordButton')}
                  </button>
                  <button className="icon-button" onClick={() => setShowWordList(true)} title={t('manage')}>
                    {t('myWords')}
                  </button>
                </>
              )}
              <button className="icon-button" onClick={() => setShowSettings(true)} title={t('settings')}>
                {t('translationMode')}
              </button>
            </div>
          </div>
        )}

        {activeTab === 'manage' && (
          <div className="tab-content active">
            <Declension sessionStats={sessionStats_declension} onSessionStatsChange={setSessionStats_declension} />
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="tab-content active">
            <Conjugation sessionStats={sessionStats_conjugation} onSessionStatsChange={setSessionStats_conjugation} />
          </div>
        )}

        {activeTab === 'wordle' && (
          <div className="tab-content active">
            <Wordle onSearchWord={(word) => { setSearchWordQuery(word); setShowSearchWords(true); }} />
          </div>
        )}
      </div>

      <AddWord 
        uid={uid} 
        userWords={words} 
        usePreset={usePreset}
        isOpen={showAddWord}
        onClose={() => setShowAddWord(false)}
      />
      <div style={{ display: showWordList ? 'flex' : 'none' }}>
        <WordList uid={uid} onClose={() => setShowWordList(false)} />
      </div>
      {showSettings && (
        <Settings
          onClose={() => setShowSettings(false)}
          onApply={handleApplySettings}
          onReset={handleResetToPersonal}
          onResetStats={handleResetStats}
        />
      )}

      {showSearchWords && (
        <SearchWords
          onClose={() => { setShowSearchWords(false); setSearchWordQuery(''); }}
          initialQuery={searchWordQuery}
          autoSearch={!!searchWordQuery}
        />
      )}

      <SettingsMenu 
        isOpen={showSettingsMenu} 
        onClose={() => setShowSettingsMenu(false)} 
        userEmail={getCurrentUserEmail()}
        onLogout={handleLogout}
        onResetStats={handleResetStats}
        canInstallApp={canInstallApp}
        onInstallApp={handleInstallApp}
        showInstallButton={!isStandalone}
        version={APP_VERSION}
      />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
