import React, { useState, useEffect } from 'react';
import { Word, Stats, TrainingMode } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { loadStats, updateStats, cleanWord, pickSmartIndex } from '../utils/helpers';
import './Trainer.css';

interface TrainerProps {
  words: Word[];
  trainingMode: TrainingMode;
  sessionStats: { correct: number; wrong: number };
  onSessionStatsChange: (stats: { correct: number; wrong: number }) => void;
}

const Trainer: React.FC<TrainerProps> = ({ words, trainingMode, sessionStats, onSessionStatsChange }) => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [askReverse, setAskReverse] = useState(false);
  const [stats, setStats] = useState<Stats>(loadStats());
  const [recentIndices, setRecentIndices] = useState<number[]>([]);

  useEffect(() => {
    if (words.length > 0) {
      nextWord();
    }
  }, [words]);

  const nextWord = () => {
    if (words.length === 0) return;
    
    // Используем умный выбор, исключая недавние слова
    const newIndex = pickSmartIndex(words, stats, currentIndex, recentIndices);
    setCurrentIndex(newIndex);
    
    // Обновляем историю (последние 4 слова)
    setRecentIndices(prev => {
      const updated = [newIndex, ...prev];
      return updated.slice(0, Math.min(4, words.length - 1));
    });
    
    setAnswer('');
    setIsChecked(false);
    setIsCorrect(false);

    const newAskReverse =
      trainingMode === 'ru2lv'
        ? false
        : trainingMode === 'lv2ru'
        ? true
        : Math.random() < 0.5;
    
    setAskReverse(newAskReverse);
  };

  const checkAnswer = () => {
    if (words.length === 0 || !answer.trim()) return;
    
    const wordObj = words[currentIndex];
    const userAns = cleanWord(answer);
    const correctAns = askReverse ? cleanWord(wordObj.word) : cleanWord(wordObj.translation);
    const key = wordObj.word + '|' + wordObj.translation;

    const correct = userAns === correctAns;
    setIsCorrect(correct);
    setIsChecked(true);

    const newStats = updateStats(stats, key, correct);
    setStats(newStats);

    onSessionStatsChange({
      correct: sessionStats.correct + (correct ? 1 : 0),
      wrong: sessionStats.wrong + (correct ? 0 : 1)
    });

    if (correct) {
      setTimeout(() => nextWord(), 1000);
    }
  };

  const skipWord = () => {
    setTimeout(() => nextWord(), 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isChecked) {
      checkAnswer();
    } else if (e.key === 'Enter' && isChecked && !isCorrect) {
      nextWord();
    }
  };

  if (words.length === 0) {
    return (
      <div className="trainer-ui empty-state">
        <p className="empty-message">{t('noWords')}</p>
        <p className="empty-hint">{t('addWordsOrPreset')}</p>
      </div>
    );
  }

  const currentWord = words[currentIndex];
  if (!currentWord) {
    return (
      <div className="trainer-ui empty-state">
        <p className="empty-message">{t('noWords')}</p>
        <p className="empty-hint">{t('addWordsOrPreset')}</p>
      </div>
    );
  }

  const question = askReverse ? currentWord.translation : currentWord.word;
  const correctAnswer = askReverse ? currentWord.word : currentWord.translation;

  return (
    <div className="trainer-ui">
      <div className="trainer-header">
        <div className="session-stats">
          <span className="stat-correct">✓ {sessionStats.correct}</span>
          <span className="stat-wrong">✗ {sessionStats.wrong}</span>
        </div>
      </div>
      
      <b>{question}</b>
      
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={t('translation')}
        className={isChecked ? (isCorrect ? 'correct' : 'wrong') : ''}
        disabled={isChecked && isCorrect}
        autoFocus
      />
      
      {isChecked && !isCorrect && (
        <div className="correct-answer">
          Правильный ответ: <strong>{correctAnswer}</strong>
        </div>
      )}
      
      <div className="trainer-actions">
        {!isChecked || isCorrect ? (
          <>
            <button onClick={checkAnswer} disabled={!answer.trim() || (isChecked && isCorrect)}>
              {t('check')}
            </button>
            <button onClick={skipWord} className="skip-btn" disabled={isChecked && isCorrect}>
              {t('skip')}
            </button>
          </>
        ) : null}
        {isChecked && !isCorrect && (
          <button onClick={nextWord} className="next-btn">
            Далее →
          </button>
        )}
      </div>
    </div>
  );
};

export default Trainer;
