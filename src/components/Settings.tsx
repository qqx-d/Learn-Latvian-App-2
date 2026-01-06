import React, { useState } from 'react';
import { Level, WordType, TrainingMode } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import './Settings.css';

interface SettingsProps {
  onClose: () => void;
  onApply: (level: Level, type: WordType, mode: TrainingMode) => void;
  onReset: () => void;  onResetStats?: () => void;}

const Settings: React.FC<SettingsProps> = ({ onClose, onApply, onReset, onResetStats }) => {
  const { t } = useLanguage();
  const [level, setLevel] = useState<Level>('a1');
  const [wordType, setWordType] = useState<WordType>('nouns');
  const [mode, setMode] = useState<TrainingMode>('both');

  const [showLevelOptions, setShowLevelOptions] = useState(false);
  const [showTypeOptions, setShowTypeOptions] = useState(false);
  const [showModeOptions, setShowModeOptions] = useState(false);

  const handleApply = () => {
    onApply(level, wordType, mode);
    onClose();
  };

  const handleReset = () => {
    onReset();
    onClose();
  };

  const getLevelLabel = (lvl: Level) => {
    return lvl === 'randomAll' ? t('randomAll') : lvl.toUpperCase();
  };

  return (
    <div className="modal" style={{ display: 'flex' }}>
      <div className="modal-content settings-modal">
        <span className="close" onClick={onClose}>&times;</span>
        <h3>{t('settingsTitle')}</h3>
        <p className="settings-description">
          {t('selectPreset')}
        </p>

        {/* Level Select */}
        <div className="setting-group">
          <label className="setting-label">{t('level')}</label>
          <div className={`custom-select ${showLevelOptions ? 'open' : ''}`}>
            <div className="selected" onClick={() => {
              setShowLevelOptions(!showLevelOptions);
              setShowTypeOptions(false);
              setShowModeOptions(false);
            }}>
              {getLevelLabel(level)}
            </div>
            {showLevelOptions && (
              <div className="options">
                <div onClick={() => { setLevel('randomAll'); setShowLevelOptions(false); }}>{t('randomAll')}</div>
                <div onClick={() => { setLevel('a1'); setShowLevelOptions(false); }}>A1</div>
                <div onClick={() => { setLevel('a2'); setShowLevelOptions(false); }}>A2</div>
                <div onClick={() => { setLevel('b1'); setShowLevelOptions(false); }}>B1</div>
                <div onClick={() => { setLevel('b2'); setShowLevelOptions(false); }}>B2</div>
                <div onClick={() => { setLevel('c1'); setShowLevelOptions(false); }}>C1</div>
              </div>
            )}
          </div>
        </div>

        {/* Type Select */}
        <div className="setting-group">
          <label className="setting-label">{t('wordType')}</label>
          <div className={`custom-select ${showTypeOptions ? 'open' : ''}`}>
            <div className="selected" onClick={() => {
              setShowTypeOptions(!showTypeOptions);
              setShowLevelOptions(false);
              setShowModeOptions(false);
            }}>
              {t(wordType)}
            </div>
            {showTypeOptions && (
              <div className="options">
                <div onClick={() => { setWordType('nouns'); setShowTypeOptions(false); }}>{t('nouns')}</div>
                <div onClick={() => { setWordType('verbs'); setShowTypeOptions(false); }}>{t('verbs')}</div>
                <div onClick={() => { setWordType('adjectives'); setShowTypeOptions(false); }}>{t('adjectives')}</div>
              </div>
            )}
          </div>
        </div>

        {/* Mode Select */}
        <div className="setting-group">
          <label className="setting-label">{t('translationMode')}</label>
          <div className={`custom-select ${showModeOptions ? 'open' : ''}`}>
            <div className="selected" onClick={() => {
              setShowModeOptions(!showModeOptions);
              setShowLevelOptions(false);
              setShowTypeOptions(false);
            }}>
              {t(`mode_${mode}` as any)}
            </div>
            {showModeOptions && (
              <div className="options">
                <div onClick={() => { setMode('ru2lv'); setShowModeOptions(false); }}>{t('mode_ru2lv')}</div>
                <div onClick={() => { setMode('lv2ru'); setShowModeOptions(false); }}>{t('mode_lv2ru')}</div>
                <div onClick={() => { setMode('both'); setShowModeOptions(false); }}>{t('mode_both')}</div>
              </div>
            )}
          </div>
        </div>
        
        <div className="settings-info">
          {t('settingsTip')}
        </div>
      </div>
    </div>
  );
};

export default Settings;
