import React, { useState, useEffect } from 'react';
import { ref, onValue, off } from 'firebase/database';
import { database } from '../config/firebase';
import { DeclensionWord } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import './Declension.css';

interface DeclensionProps {
  sessionStats: { correct: number; wrong: number };
  onSessionStatsChange: (stats: { correct: number; wrong: number }) => void;
}

const Declension: React.FC<DeclensionProps> = ({ sessionStats, onSessionStatsChange }) => {
  const { t } = useLanguage();
  const [currentWord, setCurrentWord] = useState<DeclensionWord | null>(null);
  const [declGroups, setDeclGroups] = useState<{ [key: string]: DeclensionWord[] }>({});
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [showResult, setShowResult] = useState<'correct' | 'wrong' | null>(null);

  useEffect(() => {
    loadDeclensions();
  }, []);

  const loadDeclensions = () => {
    const declRef = ref(database, 'declension');
    
    onValue(declRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        setCurrentWord(null);
        return;
      }

      const groups: { [key: string]: DeclensionWord[] } = {};
      Object.values(data).forEach((levelData: any) => {
        Object.values(levelData).forEach((item: any) => {
          if (!groups[item.group]) {
            groups[item.group] = [];
          }
          groups[item.group].push(item as DeclensionWord);
        });
      });

      setDeclGroups(groups);
      pickBalancedDeclension(groups);
    });

    return () => off(declRef);
  };

  const pickBalancedDeclension = (groups: { [key: string]: DeclensionWord[] }) => {
    const groupKeys = Object.keys(groups).filter(g => groups[g].length > 0);
    if (groupKeys.length === 0) {
      setCurrentWord(null);
      return;
    }

    const randGroup = groupKeys[Math.floor(Math.random() * groupKeys.length)];
    const words = groups[randGroup];
    const idx = Math.floor(Math.random() * words.length);

    setCurrentWord(words[idx]);
    setSelectedButton(null);
    setShowResult(null);
  };

  const checkDeclension = (choice: string) => {
    if (!currentWord) return;

    setSelectedButton(choice);
    const isCorrect = choice === currentWord.group;
    
    if (isCorrect) {
      setShowResult('correct');
      onSessionStatsChange({ ...sessionStats, correct: sessionStats.correct + 1 });
      setTimeout(() => pickBalancedDeclension(declGroups), 800);
    } else {
      setShowResult('wrong');
      onSessionStatsChange({ ...sessionStats, wrong: sessionStats.wrong + 1 });
      setTimeout(() => pickBalancedDeclension(declGroups), 1200);
    }
  };

  return (
    <div className="trainer-ui">
      {!currentWord ? (
        <div className="empty-state">
          <div className="empty-icon">{t('emptyDeclensions')}</div>
          <b>{t('noData')}</b>
          <p style={{ margin: '6px 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            {t('declensionsLoading')}
          </p>
        </div>
      ) : (
        <>
          <div className="trainer-header">
            <div className="session-stats">
              <span className="stat-correct">✓ {sessionStats.correct}</span>
              <span className="stat-wrong">✗ {sessionStats.wrong}</span>
            </div>
          </div>
          <div className="word-container">
            <b>{currentWord.word}</b>
            <p className="declension-translation">{currentWord.translation}</p>
          </div>
          <div className="declension-header">
            <span className="declension-hint">{t('selectDeclension')}</span>
          </div>
          <div className="declension-actions">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <button
                key={num}
                onClick={() => checkDeclension(String(num))}
                className={
                  selectedButton === String(num)
                    ? showResult === 'correct'
                      ? 'correct'
                      : 'wrong'
                    : showResult === 'wrong' && currentWord.group === String(num)
                    ? 'correct'
                    : ''
                }
                disabled={selectedButton !== null}
              >
                {num}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Declension;
