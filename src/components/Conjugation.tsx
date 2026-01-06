import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../config/firebase';
import { ConjugationVerb, ConjugationPattern, ConjugationOption } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import './Conjugation.css';

interface GameQuestion {
  infinitive: string;
  translation: string;
  correctPatternId: string;
  options: ConjugationOption[];
}

interface ConjugationProps {
  sessionStats: { correct: number; wrong: number };
  onSessionStatsChange: (stats: { correct: number; wrong: number }) => void;
}

const Conjugation: React.FC<ConjugationProps> = ({ sessionStats, onSessionStatsChange }) => {
  const { t } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState<GameQuestion | null>(null);
  const [allVerbs, setAllVerbs] = useState<ConjugationVerb[]>([]);
  const [patterns, setPatterns] = useState<Record<string, ConjugationPattern>>({});
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<'correct' | 'wrong' | null>(null);
  const [correctIndex, setCorrectIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadConjugations();
    // Cleanup function removed as Firebase listeners don't auto-cleanup
  }, []);

  const generateOptions = (
    currentVerb: ConjugationVerb,
    allVerbs: ConjugationVerb[],
    patternsData: Record<string, ConjugationPattern>
  ): ConjugationOption[] => {
    // 1. Найти все глаголы с тем же correctPatternId, кроме текущего
    const verbsWithSamePattern = allVerbs.filter(v => 
      v.correctPatternId === currentVerb.correctPatternId &&
      v.infinitive !== currentVerb.infinitive
    );

    // 2. Найти паттерны с другими ID
    const otherPatternIds = Object.keys(patternsData).filter(
      id => id !== currentVerb.correctPatternId
    );
    
    // 3. Проверка валидности задания
    if (verbsWithSamePattern.length === 0) {
      // Если нет других глаголов с тем же паттерном, используем формы из паттерна
      // но это подсказка - лучше избежать
      console.warn(`⚠️ Нет других глаголов с паттерном ${currentVerb.correctPatternId}`);
      
      // Fallback: используем случайные глаголы, но проверяем корни
      return generateFallbackOptions(currentVerb, allVerbs, patternsData);
    }

    // Функция для извлечения корня (первые 3+ символа)
    const getRoot = (word: string): string => {
      if (word.length < 3) return word;
      // Берём основу без окончаний
      // Предполагаем, что корень - это часть до стандартных окончаний
      const root = word.replace(/tīt$|t$|ēt$|it$|ies$/, '');
      return root.substring(0, 4); // Первые 4 символа как корень
    };

    const currentRoot = getRoot(currentVerb.infinitive);
    
    // 4. Выбрать правильный вариант (из других глаголов с тем же паттерном)
    const correctVerb = verbsWithSamePattern[
      Math.floor(Math.random() * verbsWithSamePattern.length)
    ];
    
    const correctPattern = patternsData[currentVerb.correctPatternId];

    const options: ConjugationOption[] = [];

    // 5. Добавить правильный вариант
    options.push({
      patternId: currentVerb.correctPatternId,
      present1st: correctPattern.present1st,
      present3rd: correctPattern.present3rd,
      fromVerb: correctVerb.infinitive // Для логирования
    });

    // 6. Добавить 2 неправильных варианта
    const usedPatternIds = new Set([currentVerb.correctPatternId]);
    
    while (options.length < 3 && otherPatternIds.length > 0) {
      const randomPatternId = otherPatternIds[
        Math.floor(Math.random() * otherPatternIds.length)
      ];
      
      if (usedPatternIds.has(randomPatternId)) continue;

      const pattern = patternsData[randomPatternId];
      const pattern1stRoot = getRoot(pattern.present1st);
      const pattern3rdRoot = getRoot(pattern.present3rd);

      // Проверка: корень инфинитива не должен совпадать с корнем вариантов
      if (pattern1stRoot !== currentRoot && pattern3rdRoot !== currentRoot) {
        options.push({
          patternId: randomPatternId,
          present1st: pattern.present1st,
          present3rd: pattern.present3rd,
          fromVerb: undefined // Просто паттерн
        });
        usedPatternIds.add(randomPatternId);
      }
    }

    // 7. Если не хватает вариантов, перемешать и вернуть что есть
    if (options.length < 3) {
      console.warn(`⚠️ Недостаточно валидных вариантов (${options.length}/3)`);
    }

    // Перемешать
    return options.sort(() => Math.random() - 0.5);
  };

  const generateFallbackOptions = (
    currentVerb: ConjugationVerb,
    _allVerbs: ConjugationVerb[],
    patternsData: Record<string, ConjugationPattern>
  ): ConjugationOption[] => {
    // Функция для извлечения корня
    const getRoot = (word: string): string => {
      const root = word.replace(/tīt$|t$|ēt$|it$|ies$/, '');
      return root.substring(0, 4);
    };

    const currentRoot = getRoot(currentVerb.infinitive);
    const patternIds = Object.keys(patternsData).filter(id => {
      const pattern = patternsData[id];
      const p1Root = getRoot(pattern.present1st);
      const p3Root = getRoot(pattern.present3rd);
      // Исключить паттерны, чей корень совпадает с инфинитивом
      return p1Root !== currentRoot && p3Root !== currentRoot;
    });

    const options: ConjugationOption[] = [];
    const usedIds = new Set<string>();

    // Добавить правильный паттерн
    const correctPattern = patternsData[currentVerb.correctPatternId];
    options.push({
      patternId: currentVerb.correctPatternId,
      present1st: correctPattern.present1st,
      present3rd: correctPattern.present3rd
    });
    usedIds.add(currentVerb.correctPatternId);

    // Добавить 2 случайных других паттерна
    while (options.length < 3 && patternIds.length > 0) {
      const randomId = patternIds[Math.floor(Math.random() * patternIds.length)];
      if (!usedIds.has(randomId)) {
        options.push({
          patternId: randomId,
          present1st: patternsData[randomId].present1st,
          present3rd: patternsData[randomId].present3rd
        });
        usedIds.add(randomId);
      }
    }

    return options.sort(() => Math.random() - 0.5);
  };

  const pickRandomVerb = (verbs: ConjugationVerb[], patternsData: Record<string, ConjugationPattern>) => {
    if (verbs.length === 0) {
      setCurrentQuestion(null);
      return;
    }

    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const options = generateOptions(randomVerb, verbs, patternsData);
    
    setCurrentQuestion({
      infinitive: randomVerb.infinitive,
      translation: randomVerb.translation,
      correctPatternId: randomVerb.correctPatternId,
      options: options
    });
    
    setSelectedIndex(null);
    setShowResult(null);
    setCorrectIndex(null);
  };

  const loadConjugations = () => {
    try {
      // Загружаем паттерны
      const patternsRef = ref(database, 'conjugationPatterns');
      
      onValue(
        patternsRef,
        (patternsSnapshot) => {
          const patternsData = patternsSnapshot.val();
          
          if (!patternsData) {
            setError('Нет данных о паттернах');
            setLoading(false);
            return;
          }

          setPatterns(patternsData);

          // Загружаем глаголы
          const verbsRef = ref(database, 'verbs');
          
          onValue(
            verbsRef,
            (verbsSnapshot) => {
              const verbsData = verbsSnapshot.val();
              
              if (!verbsData) {
                setError('Нет данных о глаголах');
                setCurrentQuestion(null);
                setAllVerbs([]);
                setLoading(false);
                return;
              }

              try {
                const verbs: ConjugationVerb[] = [];
                
                // Проходим по каждому уровню (a1, a2, b1, и т.д.)
                Object.entries(verbsData).forEach(([_level, levelData]: [string, any]) => {
                  if (levelData && typeof levelData === 'object') {
                    // Проходим по каждому глаголу в уровне
                    Object.entries(levelData).forEach(([_key, verbData]: [string, any]) => {
                      if (verbData && verbData.infinitive && verbData.correctPatternId) {
                        verbs.push({
                          infinitive: verbData.infinitive,
                          translation: verbData.translation || '',
                          correctPatternId: verbData.correctPatternId
                        });
                      }
                    });
                  }
                });

                if (verbs.length === 0) {
                  setError('Глаголы не найдены в базе данных');
                  setLoading(false);
                  return;
                }

                setAllVerbs(verbs);
                setError(null);
                pickRandomVerb(verbs, patternsData);
                setLoading(false);
              } catch (err) {
                setError('Ошибка при обработке данных');
                console.error('Ошибка обработки:', err);
                setLoading(false);
              }
            },
            (error) => {
              setError(`Ошибка Firebase (verbs): ${error.message}`);
              setLoading(false);
              console.error('Firebase ошибка:', error);
            }
          );
        },
        (error) => {
          setError(`Ошибка Firebase (patterns): ${error.message}`);
          setLoading(false);
          console.error('Firebase ошибка:', error);
        }
      );
    } catch (err) {
      setError('Ошибка при подключении к базе данных');
      console.error('Ошибка подключения:', err);
      setLoading(false);
    }
  };

  const highlightEnding = (word: string, otherWord: string) => {
    let commonLength = 0;
    const minLength = Math.min(word.length, otherWord.length);
    
    for (let i = 0; i < minLength; i++) {
      if (word[i] === otherWord[i]) {
        commonLength++;
      } else {
        break;
      }
    }

    const base = word.substring(0, commonLength);
    const ending = word.substring(commonLength);

    return (
      <>
        <span className="base-form">{base}</span>
        <span className="ending-highlight">{ending}</span>
      </>
    );
  };

  const checkConjugation = (index: number) => {
    if (!currentQuestion || selectedIndex !== null) return;

    setSelectedIndex(index);
    const selectedOption = currentQuestion.options[index];
    const isCorrect = selectedOption.patternId === currentQuestion.correctPatternId;
    
    if (isCorrect) {
      setShowResult('correct');
      onSessionStatsChange({ ...sessionStats, correct: sessionStats.correct + 1 });
      setTimeout(() => pickRandomVerb(allVerbs, patterns), 800);
    } else {
      setShowResult('wrong');
      onSessionStatsChange({ ...sessionStats, wrong: sessionStats.wrong + 1 });
      const correctIdx = currentQuestion.options.findIndex(opt => opt.patternId === currentQuestion.correctPatternId);
      setCorrectIndex(correctIdx);
      setTimeout(() => pickRandomVerb(allVerbs, patterns), 1500);
    }
  };

  // Состояние загрузки
  if (loading) {
    return (
      <div className="trainer-ui">
        <div className="empty-state">
          <div className="empty-icon">⏳</div>
          <b>Загрузка...</b>
          <p>{t('conjugationsLoading')}</p>
        </div>
      </div>
    );
  }

  // Состояние ошибки
  if (error || allVerbs.length === 0) {
    return (
      <div className="trainer-ui">
        <div className="empty-state">
          <div className="empty-icon">⚠️</div>
          <b>{error || t('emptyConjugations')}</b>
          <p>{error ? 'Проверьте консоль для деталей' : t('conjugationsLoading')}</p>
          {error && (
            <p style={{ margin: '12px 0', fontSize: '0.85rem', color: '#ef4444', fontFamily: 'monospace' }}>
              {error}
            </p>
          )}
        </div>
      </div>
    );
  }

  // Основной контент
  return (
    <div className="trainer-ui">
      {!currentQuestion ? (
        <div className="empty-state">
          <div className="empty-icon">📚</div>
          <b>{t('emptyConjugations')}</b>
          <p>{t('conjugationsLoading')}</p>
        </div>
      ) : (
        <>
          {/* Statistics header */}
          <div className="trainer-header">
            <div className="session-stats">
              <span className="stat-correct">✓ {sessionStats.correct}</span>
              <span className="stat-wrong">✗ {sessionStats.wrong}</span>
            </div>
          </div>

          {/* Карточка глагола */}
          <div className="word-container">
            <b className="infinitive">{currentQuestion.infinitive}</b>
            <p className="conjugation-translation">{currentQuestion.translation}</p>
          </div>

          {/* Заголовок блока выбора */}
          <div className="conjugation-header">
            <span className="conjugation-hint">{t('selectConjugation')}</span>
          </div>

          {/* Блок вариантов спряжения */}
          <div className="conjugation-options">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedIndex === index;
              const isCorrectOption = correctIndex === index;
              const showAsCorrect = isSelected && showResult === 'correct';
              const showAsWrong = isSelected && showResult === 'wrong';
              const showCorrectAnswer = isCorrectOption && showResult === 'wrong';

              return (
                <button
                  key={index}
                  onClick={() => checkConjugation(index)}
                  className={`conjugation-option ${
                    showAsCorrect ? 'correct' : 
                    showAsWrong ? 'wrong' : 
                    showCorrectAnswer ? 'correct' : ''
                  }`}
                  disabled={selectedIndex !== null}
                  aria-label={`Вариант ${index + 1}: ${option.present1st} / ${option.present3rd}`}
                >
                  <div className="conjugation-forms">
                    <span className="form-example">
                      {highlightEnding(option.present1st, option.present3rd)}
                    </span>
                    <span className="form-separator">/</span>
                    <span className="form-example">
                      {highlightEnding(option.present3rd, option.present1st)}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Conjugation;
