import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../config/translations';
import './SettingsMenu.css';

type SettingsMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  userEmail: string | null;
  onLogout: () => void;
  onResetStats?: () => void;
  canInstallApp?: boolean;
  onInstallApp?: () => void;
  showInstallButton?: boolean;
  version?: string;
};

const SettingsMenu = ({ isOpen, onClose, userEmail, onLogout, onResetStats, canInstallApp, onInstallApp, showInstallButton, version }: SettingsMenuProps) => {
  const { language, setLanguage, t } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (!isOpen) return null;

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };

  const languages = [
    { code: 'ru' as Language, flag: 'RU', name: 'Русский' },
    { code: 'en' as Language, flag: 'EN', name: 'English' },
    { code: 'lv' as Language, flag: 'LV', name: 'Latviešu' },
  ];

  const currentLang = languages.find(l => l.code === language) || languages[0];

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="settings-menu-overlay" onClick={handleOverlayClick}>
      <div className="settings-menu-card">
        <div className="settings-menu-header">
          <h2>{t('settings')}</h2>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>
        
        <div className="settings-menu-content">
          <div className="settings-item">
            <div className="custom-dropdown">
              <button
                className="dropdown-trigger"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="dropdown-flag">{currentLang.name}</span>
                <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
              </button>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`dropdown-item ${language === lang.code ? 'active' : ''}`}
                      onClick={() => handleLanguageChange(lang.code)}
                    >
                      <span className="dropdown-name">{lang.name}</span>
                      {language === lang.code && <span className="checkmark">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {userEmail && (
            <div className="profile-block">
              <div className="profile-info">
                <span className="profile-label">Email:</span>
                <span className="profile-email">{userEmail}</span>
              </div>
              <button className="logout-btn" onClick={onLogout}>
                {t('logout')}
              </button>
            </div>
          )}

          {showInstallButton && onInstallApp && (
            <button onClick={onInstallApp} className="install-app-btn">
              {t('installApp')}
            </button>
          )}

          {onResetStats && (
            <button onClick={onResetStats} className="reset-stats-btn">
              {t('resetStats')}
            </button>
          )}

          {version && (
            <div className="settings-version">{version}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsMenu;
