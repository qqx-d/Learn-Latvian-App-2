import { useCallback, useEffect, useRef, useState } from 'react';
import './Wordle.css';
import { useLanguage } from '../contexts/LanguageContext';
import { database } from '../config/firebase';
import { ref, get } from 'firebase/database';
import { wordleNouns5 } from '../data/wordleNouns5';

type LetterState = 'correct' | 'present' | 'absent';

type GameState = 'playing' | 'won' | 'lost';

const WORD_LENGTH = 5;
const MAX_GUESSES = 6;

const LETTER_REGEX = /^[A-ZĀČĒĢĪĶĻŅŠŪŽ]$/;
const WORDS_DB_PATH = 'wordle/nouns5';

const normalizeWord = (word: string) =>
  word
    .trim()
    .toUpperCase()
    .replace(/[^A-ZĀČĒĢĪĶĻŅŠŪŽ]/g, '')
    .slice(0, WORD_LENGTH);

const pickWord = (list: string[]) => list[Math.floor(Math.random() * list.length)];

const evaluateGuess = (guess: string, target: string): LetterState[] => {
  const statuses: LetterState[] = Array(WORD_LENGTH).fill('absent');
  const remainingCounts: Record<string, number> = {};

  target.split('').forEach((letter) => {
    remainingCounts[letter] = (remainingCounts[letter] || 0) + 1;
  });

  for (let i = 0; i < WORD_LENGTH; i++) {
    if (guess[i] === target[i]) {
      statuses[i] = 'correct';
      remainingCounts[guess[i]] -= 1;
    }
  }

  for (let i = 0; i < WORD_LENGTH; i++) {
    if (statuses[i] === 'correct') continue;
    const letter = guess[i];
    if (remainingCounts[letter] > 0) {
      statuses[i] = 'present';
      remainingCounts[letter] -= 1;
    }
  }

  return statuses;
};

interface WordleProps {
  onSearchWord?: (word: string) => void;
}

const Wordle = ({ onSearchWord }: WordleProps) => {
  const { t, language } = useLanguage();
  const [targetWord, setTargetWord] = useState<string>('');
  const [wordBank, setWordBank] = useState<string[]>([]);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [evaluations, setEvaluations] = useState<LetterState[][]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [gameState, setGameState] = useState<GameState>('playing');
  const [loadingWords, setLoadingWords] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const loadWords = async () => {
      try {
        const snap = await get(ref(database, WORDS_DB_PATH));
        const raw = snap.val();
        const fromDb: string[] = Array.isArray(raw)
          ? raw
          : raw
          ? Object.values(raw)
          : [];
        const normalized = fromDb
          .map((w) => normalizeWord(String(w)))
          .filter((w) => w.length === WORD_LENGTH);

        const baseList = normalized.length ? normalized : wordleNouns5;
        const ensured = baseList.length > 0 ? baseList : ['SAULE'];

        setWordBank(ensured);
        setTargetWord(pickWord(ensured));
        setGuesses([]);
        setEvaluations([]);
        setMessage(null);
        setGameState('playing');
        setLoadingWords(false);
      } catch (err) {
        const ensured = wordleNouns5.length ? wordleNouns5 : ['SAULE'];
        setWordBank(ensured);
        setTargetWord(pickWord(ensured));
        setGuesses([]);
        setEvaluations([]);
        setMessage(null);
        setGameState('playing');
        setLoadingWords(false);
      }
    };

    loadWords();
  }, []);

  useEffect(() => {
    setMessage(null);
  }, [language, t, targetWord]);

  const resetGame = useCallback(() => {
    if (!wordBank.length) return;
    setTargetWord(pickWord(wordBank));
    setGuesses([]);
    setEvaluations([]);
    setCurrentGuess('');
    setGameState('playing');
    setMessage(null);
    inputRef.current?.focus();
  }, [t, wordBank]);

  const submitGuess = useCallback(() => {
    if (gameState !== 'playing' || !targetWord) return;

    const normalized = currentGuess.toUpperCase();
    if (normalized.length < WORD_LENGTH) {
      setMessage(t('wordleShortGuess'));
      return;
    }

    const evaluation = evaluateGuess(normalized, targetWord);
    const nextGuesses = [...guesses, normalized];
    const nextEvaluations = [...evaluations, evaluation];

    setGuesses(nextGuesses);
    setEvaluations(nextEvaluations);
    setCurrentGuess('');

    if (normalized === targetWord) {
      setGameState('won');
      setMessage(t('wordleWin'));
      return;
    }

    if (nextGuesses.length >= MAX_GUESSES) {
      setGameState('lost');
      setMessage(t('wordleLose'));
      return;
    }

    setMessage(null);
  }, [currentGuess, evaluations, gameState, guesses, t, targetWord]);

  const renderTile = (letter: string, status?: LetterState, rowIdx?: number, colIdx?: number) => {
    const classes = ['wordle-tile'];
    if (letter) classes.push('filled');
    if (status) classes.push(status);

    return (
      <div className={classes.join(' ')} key={`tile-${rowIdx ?? 0}-${colIdx ?? 0}`}>
        {letter}
      </div>
    );
  };

  const currentRowIndex = guesses.length;

  if (loadingWords || !targetWord) {
    return (
      <div className="wordle-card">
        <div className="wordle-header" aria-live="polite">
          <div className="wordle-message">{t('trainer')}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="wordle-card">
      <div className="wordle-header" aria-live="polite">
        {message && (
          <div className={`wordle-message ${gameState !== 'playing' ? 'final' : ''}`}>
            {gameState === 'lost' ? (
              <>
                {message}{' '}
                <button
                  type="button"
                  className="wordle-answer-link"
                  onClick={() => onSearchWord?.(targetWord)}
                >
                  {targetWord}
                </button>
              </>
            ) : (
              message
            )}
          </div>
        )}
      </div>

      <div className="wordle-grid">
        {Array.from({ length: MAX_GUESSES }).map((_, rowIdx) => {
          const guess = guesses[rowIdx] || (rowIdx === currentRowIndex ? currentGuess.toUpperCase() : '');
          const statusRow = evaluations[rowIdx];
          const letters = guess.padEnd(WORD_LENGTH, ' ').split('').slice(0, WORD_LENGTH);

          return (
            <div className="wordle-row" key={`row-${rowIdx}`}>
              {letters.map((letter, idx) => renderTile(letter.trim(), statusRow?.[idx], rowIdx, idx))}
            </div>
          );
        })}
      </div>

      <div className="wordle-input-row">
        <input
          ref={inputRef}
          className="wordle-input"
          value={currentGuess}
          maxLength={WORD_LENGTH}
          onChange={(e) => {
            if (gameState !== 'playing') return;
            const filtered = e.target.value
              .split('')
              .filter((ch) => LETTER_REGEX.test(ch.toUpperCase()))
              .join('')
              .toLowerCase()
              .slice(0, WORD_LENGTH);
            const display = filtered.charAt(0).toUpperCase() + filtered.slice(1);
            setCurrentGuess(display);
            setMessage(null);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              submitGuess();
            }
          }}
          placeholder=""
          aria-label="Wordle guess"
        />
        {gameState === 'playing' ? (
          <button className="wordle-check-btn" onClick={submitGuess} disabled={gameState !== 'playing'}>
            {t('check')}
          </button>
        ) : (
          <button className="wordle-check-btn" onClick={resetGame}>
            {t('wordleNewGame')}
          </button>
        )}
      </div>

      <div className="wordle-actions">
        {/* New game button hidden per request; kept for potential future use */}
      </div>

    </div>
  );
};

export default Wordle;
