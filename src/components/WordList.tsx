import React, { useState, useEffect } from 'react';
import { ref, onValue, set, remove } from 'firebase/database';
import { database } from '../config/firebase';
import { WordWithKey } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import './WordList.css';

interface WordListProps {
  uid: string | null;
  onClose: () => void;
}

const WordList: React.FC<WordListProps> = ({ uid, onClose }) => {
  const { t } = useLanguage();
  const [words, setWords] = useState<WordWithKey[]>([]);
  const [localWords, setLocalWords] = useState<WordWithKey[]>([]);
  const [search, setSearch] = useState('');
  const [hasChanges, setHasChanges] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  useEffect(() => {
    if (!uid) return;

    const wordsRef = ref(database, `users/${uid}/words`);
    let unsubscribe: (() => void) | null = null;
    
    const setupListener = () => {
      unsubscribe = onValue(
        wordsRef,
        (snapshot) => {
          try {
            const data = snapshot.val();
            if (data) {
              const wordsArray: WordWithKey[] = Object.entries(data).map(([key, value]: [string, any]) => ({
                key,
                word: value.word,
                translation: value.translation
              }));
              setWords(wordsArray);
              setLocalWords(wordsArray);
              setHasChanges(false);
            } else {
              setWords([]);
              setLocalWords([]);
              setHasChanges(false);
            }
          } catch (error) {
            console.error('Error processing words data:', error);
          }
        },
        (error) => {
          console.error('Firebase listener error:', error);
        }
      );
    };
    
    setupListener();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [uid]);

  const updateWord = (key: string, field: 'word' | 'translation', value: string) => {
    // Обновляем локальное состояние без сохранения в Firebase
    setLocalWords(prev => prev.map(w => w.key === key ? { ...w, [field]: value } : w));
    setHasChanges(true);
  };

  const saveChanges = async () => {
    if (!uid || !hasChanges) return;
    
    setIsSaving(true);
    try {
      const updates: Promise<any>[] = [];
      
      // Обрабатываем обновленные и измененные слова
      localWords.forEach(localWord => {
        const originalWord = words.find(w => w.key === localWord.key);
        if (originalWord) {
          if (originalWord.word !== localWord.word) {
            const wordRef = ref(database, `users/${uid}/words/${localWord.key}/word`);
            updates.push(set(wordRef, localWord.word));
          }
          if (originalWord.translation !== localWord.translation) {
            const translationRef = ref(database, `users/${uid}/words/${localWord.key}/translation`);
            updates.push(set(translationRef, localWord.translation));
          }
        }
      });
      
      // Обрабатываем удаленные слова
      words.forEach(originalWord => {
        const stillExists = localWords.find(w => w.key === originalWord.key);
        if (!stillExists) {
          const wordRef = ref(database, `users/${uid}/words/${originalWord.key}`);
          updates.push(remove(wordRef));
        }
      });
      
      await Promise.all(updates);
      setHasChanges(false);
    } catch (error) {
      console.error('Error saving changes:', error);
      alert('Ошибка при сохранении изменений');
    } finally {
      setIsSaving(false);
    }
  };

  const deleteWord = (key: string) => {
    if (!uid) return;
    
    // Удаляем из локального состояния
    setLocalWords(prev => prev.filter(w => w.key !== key));
    setHasChanges(true);
  };

  const filtered = localWords.filter(item => {
    const q = search.toLowerCase();
    return item.word.toLowerCase().includes(q) || item.translation.toLowerCase().includes(q);
  });

  const handleClose = () => {
    if (hasChanges) {
      setShowConfirmDialog(true);
    } else {
      onClose();
    }
  };

  const handleConfirmClose = (save: boolean) => {
    setShowConfirmDialog(false);
    if (save) {
      saveChanges().then(() => onClose());
    } else {
      // Откатываем локальные изменения к исходному состоянию
      setLocalWords(words);
      setHasChanges(false);
      onClose();
    }
  };

  return (
    <div className="modal" style={{ display: 'flex' }}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <h3 className="wordlist-title">{t('listTitle')}</h3>
        <div className="wordlist-top-row">
          <div className="words-count">{t('total')}: <strong>{localWords.length}</strong></div>
          <input
            className="wordlist-search"
            placeholder={t('search')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="word-list">
          {filtered.length === 0 ? (
            <div className="empty-state-list">
              <p>{t('listEmpty')}</p>
            </div>
          ) : (
            filtered.map((item) => (
              <div key={item.key} className="word-item">
                <input
                  value={item.word}
                  onChange={(e) => updateWord(item.key, 'word', e.target.value)}
                  placeholder={t('word')}
                />
                <input
                  value={item.translation}
                  onChange={(e) => updateWord(item.key, 'translation', e.target.value)}
                  placeholder={t('translation')}
                />
                <button 
                  className="delete-btn" 
                  onClick={() => deleteWord(item.key)}
                  title={t('delete')}
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>
        <div className="wordlist-actions">
          <button 
            className={`apply-btn ${!hasChanges ? 'disabled' : ''}`}
            onClick={saveChanges}
            disabled={!hasChanges || isSaving}
          >
            {isSaving ? t('saving') || 'Сохранение...' : t('save') || 'Сохранить'}
          </button>
        </div>

        {showConfirmDialog && (
          <div className="confirm-dialog-overlay">
            <div className="confirm-dialog">
              <h4>{t('unsavedChanges') || 'Несохранённые изменения'}</h4>
              <p>{t('unsavedWarning') || 'У вас есть несохраненные изменения'}</p>
              <div className="confirm-dialog-buttons">
                <button 
                  className="confirm-save-btn"
                  onClick={() => handleConfirmClose(true)}
                >
                  {t('save') || 'Сохранить'}
                </button>
                <button 
                  className="confirm-discard-btn"
                  onClick={() => handleConfirmClose(false)}
                >
                  {t('discard') || 'Не сохранять'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WordList;
