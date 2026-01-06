import { useState, useEffect } from 'react';
import { ref, onValue, off, get } from 'firebase/database';
import { database, listenToAuthChanges, logout, getCurrentUserEmail } from './config/firebase';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
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
import menuIcon from './icos/menu.svg';
import './App.css';

function AppContent() {
  const { t } = useLanguage();
  const [uid, setUid] = useState<string | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [words, setWords] = useState<Word[]>([]);
  const [trainingMode, setTrainingMode] = useState<TrainingMode>('both');
  const [usePreset, setUsePreset] = useState(false);
  const [showWordList, setShowWordList] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showAddWord, setShowAddWord] = useState(false);
  const [showSearchWords, setShowSearchWords] = useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('trainer');
  
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
      <div className="App">
        <div className="app-header">
          <h1 className="app-title">{t('title')}</h1>
          <button className="settings-icon-btn" onClick={() => setShowSettingsMenu(true)}>
            <img src={menuIcon} alt="Menu" className="menu-icon" />
          </button>
        </div>
        <div className="tab-content-wrapper">
          <div className="tab-content active">{t('trainer')}</div>
        </div>
        <SettingsMenu 
          isOpen={showSettingsMenu} 
          onClose={() => setShowSettingsMenu(false)} 
          userEmail={getCurrentUserEmail()}
          onLogout={handleLogout}
        />
      </div>
    );
  }

  if (!uid) {
    return (
      <div className="App">
        <div className="app-header">
          <h1 className="app-title">{t('title')}</h1>
          <button className="settings-icon-btn" onClick={() => setShowSettingsMenu(true)}>
            <img src={menuIcon} alt="Menu" className="menu-icon" />
          </button>
        </div>
        <Auth onAuthenticated={setUid} />
        <SettingsMenu 
          isOpen={showSettingsMenu} 
          onClose={() => setShowSettingsMenu(false)} 
          userEmail={getCurrentUserEmail()}
          onLogout={handleLogout}
        />
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
          settings: t('settingsTab')
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

      {showSearchWords && <SearchWords onClose={() => setShowSearchWords(false)} />}

      <SettingsMenu 
        isOpen={showSettingsMenu} 
        onClose={() => setShowSettingsMenu(false)} 
        userEmail={getCurrentUserEmail()}
        onLogout={handleLogout}
        onResetStats={handleResetStats}
      />

      <footer className="version">v3.0.0</footer>
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
