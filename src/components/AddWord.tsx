import React, { useState } from 'react';
import { ref, push, set } from 'firebase/database';
import { database } from '../config/firebase';
import { Word } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import './AddWord.css';

interface AddWordProps {
  uid: string | null;
  userWords: Word[];
  usePreset: boolean;
  isOpen: boolean;
  onClose: () => void;
}

interface DuplicateInfo {
  existing: Word;
  new: Word;
}

const AddWord: React.FC<AddWordProps> = ({ uid, userWords, usePreset, isOpen, onClose }) => {
  const { t } = useLanguage();
  const [word, setWord] = useState('');
  const [translation, setTranslation] = useState('');
  const [duplicate, setDuplicate] = useState<DuplicateInfo | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const checkDuplicate = (w: string, tr: string): Word | null => {
    return userWords.find(item =>
      item.word.toLowerCase() === w.toLowerCase() ||
      item.translation.toLowerCase() === tr.toLowerCase() ||
      (item.word.toLowerCase() === tr.toLowerCase() &&
       item.translation.toLowerCase() === w.toLowerCase())
    ) || null;
  };

  const addWord = () => {
    if (usePreset || !uid) return;

    const w = word.trim();
    const tr = translation.trim();
    if (!w || !tr) return;

    const found = checkDuplicate(w, tr);
    if (found) {
      setDuplicate({
        existing: found,
        new: { word: w, translation: tr }
      });
      return;
    }

    saveWord(w, tr);
  };

  const saveWord = (w: string, tr: string) => {
    if (!uid) return;
    
    const newRef = push(ref(database, `users/${uid}/words`));
    set(newRef, { word: w, translation: tr });

    setWord('');
    setTranslation('');
    
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 1500);
  };

  const confirmDuplicate = () => {
    if (duplicate) {
      saveWord(duplicate.new.word, duplicate.new.translation);
      setDuplicate(null);
    }
  };

  const cancelDuplicate = () => {
    setDuplicate(null);
  };

  if (usePreset || !isOpen) {
    return null;
  }

  return (
    <>
      <div className="modal" style={{ display: 'flex' }}>
        <div className="modal-content add-word-modal">
          <span className="close" onClick={onClose}>&times;</span>
          <div className="card-header">
            <h3>{t('addWordTitle')}</h3>
          </div>
          <div className="inputs">
            <input
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              placeholder={t('word')}
              onKeyPress={(e) => e.key === 'Enter' && addWord()}
              autoFocus
            />
            <input
              type="text"
              value={translation}
              onChange={(e) => setTranslation(e.target.value)}
              placeholder={t('translation')}
              onKeyPress={(e) => e.key === 'Enter' && addWord()}
            />
            <button onClick={addWord} disabled={!word.trim() || !translation.trim()}>
              {t('add')}
            </button>
          </div>
          {showSuccess && (
            <div className="success-message">
              {t('wordAddedSuccess')}
            </div>
          )}
        </div>
      </div>

      {duplicate && (
        <div className="modal" style={{ display: 'flex' }}>
          <div className="modal-content duplicate-box">
            <h3>{t('duplicateTitle')}</h3>
            <p>{t('duplicateExists')}</p>
            <div className="duplicate-info">
              {duplicate.existing.word} → {duplicate.existing.translation}
            </div>
            <p>{t('duplicateNew')}</p>
            <div className="duplicate-info">
              {duplicate.new.word} → {duplicate.new.translation}
            </div>
            <p>{t('duplicateConfirm')}</p>
            <div className="duplicate-actions">
              <button onClick={confirmDuplicate}>{t('yes')}</button>
              <button onClick={cancelDuplicate}>{t('no')}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddWord;
