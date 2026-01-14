import { useState } from 'react';
import {
  loginWithEmail,
  registerWithEmail,
  saveUserProfile,
  requestVerificationCode,
  verifyCodeWithBackend,
} from '../config/firebase';
import { useLanguage } from '../contexts/LanguageContext';
import './Auth.css';

type Mode = 'login' | 'register';
type Step = 'form' | 'code';

type AuthProps = {
  onAuthenticated: (uid: string) => void;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Auth = ({ onAuthenticated }: AuthProps) => {
  const { t } = useLanguage();
  const [mode, setMode] = useState<Mode>('login');
  const [step, setStep] = useState<Step>('form');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [ticket, setTicket] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const resetMessages = () => {
    setMessage('');
    setError('');
  };

  const switchMode = (newMode: Mode) => {
    setMode(newMode);
    setStep('form');
    setTicket(null);
    setCode('');
    resetMessages();
  };

  const handleLogin = async () => {
    resetMessages();
    if (!emailRegex.test(email)) {
      setError(t('invalidEmail'));
      return;
    }

    setLoading(true);
    try {
      const uid = await loginWithEmail(email.trim(), password);
      onAuthenticated(uid);
    } catch (err) {
      setError(t('authError'));
    } finally {
      setLoading(false);
    }
  };

  const handleSendCode = async () => {
    resetMessages();
    if (!emailRegex.test(email)) {
      setError(t('invalidEmail'));
      return;
    }
    if (password.length < 6) {
      setError(t('passwordShort'));
      return;
    }

    setLoading(true);
    try {
      const newTicket = await requestVerificationCode(email.trim());
      setTicket(newTicket);
      setMessage(t('codeSent'));
      setStep('code');
    } catch (err) {
      setError(t('sendCodeError'));
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    resetMessages();
    if (!ticket) {
      setError(t('invalidCode'));
      return;
    }

    const trimmedCode = code.trim();
    if (!trimmedCode) {
      setError(t('invalidCode'));
      return;
    }

    setLoading(true);
    try {
      const verified = await verifyCodeWithBackend(email.trim(), trimmedCode, ticket);
      if (!verified) {
        setError(t('invalidCode'));
        return;
      }

      const uid = await registerWithEmail(email.trim(), password);
      await saveUserProfile(uid, email.trim());
      onAuthenticated(uid);
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        setError(t('accountExists'));
      } else {
        setError(t('authError'));
      }
    } finally {
      setLoading(false);
    }
  };

  const renderActionButton = () => {
    if (mode === 'login') {
      return (
        <button className="auth-button" onClick={handleLogin} disabled={loading}>
          {loading ? '...' : t('login')}
        </button>
      );
    }

    if (step === 'form') {
      return (
        <button className="auth-button" onClick={handleSendCode} disabled={loading}>
          {loading ? '...' : t('sendCode')}
        </button>
      );
    }

    return (
      <div className="auth-buttons-group">
        <button className="auth-button" onClick={handleVerify} disabled={loading}>
          {loading ? '...' : t('verifyCode')}
        </button>
        <button 
          type="button" 
          className="auth-button-secondary" 
          onClick={() => {
            setStep('form');
            setCode('');
            setTicket(null);
            resetMessages();
          }}
        >
          {t('back') || 'Назад'}
        </button>
      </div>
    );
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>{mode === 'login' ? t('login') : t('register')}</h2>
        <p className="auth-subtitle">{t('authSubtitle')}</p>

        <div className="inputs">
          <input
            type="email"
            placeholder={t('email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder={t('password')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {mode === 'register' && step === 'code' && (
            <input
              type="text"
              placeholder={t('code')}
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          )}
        </div>

        {message && <div className="auth-message success">{message}</div>}
        {error && <div className="auth-message error">{error}</div>}

        {renderActionButton()}

        <div className="auth-toggle">
          {mode === 'login' ? (
            <span>
              {t('noAccount')}{' '}
              <button type="button" className="link-btn" onClick={() => switchMode('register')}>
                {t('register')}
              </button>
            </span>
          ) : (
            <span>
              {t('haveAccount')}{' '}
              <button type="button" className="link-btn" onClick={() => switchMode('login')}>
                {t('login')}
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
