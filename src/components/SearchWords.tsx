import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './SearchWords.css';

interface SearchWordsProps {
  onClose: () => void;
}

interface SimilarWord {
  word: string;
  href: string;
  note?: string;
}

interface SearchResult {
  word: string;
  verbalization: string;
  translation: string;
  similarWords?: SimilarWord[];
}

const SearchWords: React.FC<SearchWordsProps> = ({ onClose }) => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState<SearchResult | null>(null);
  const [suggestions, setSuggestions] = useState<SearchResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setError(t('enterWord') || 'Ievadiet vārdu');
      setSuggestions([]);
      setResult(null);
      return;
    }

    setLoading(true);
    setError(null);
    // Очистить прошлый результат/подсказки на время нового запроса
    setResult(null);
    setSuggestions([]);

    // Only use Cloudflare Worker (no local dictionary)
    try {
      const workerUrl = 'https://latvial-learn.latvial-learn.workers.dev';
      const response = await fetch(`${workerUrl}/search?word=${encodeURIComponent(searchQuery)}`);

      if (response.ok) {
        const data: SearchResult = await response.json();

        // If we have similar words, show them as suggestions with "not found" message
        if (data.similarWords && data.similarWords.length > 0) {
          setResult(null);
          setSuggestions(data.similarWords.map(sw => ({
            word: sw.word,
            verbalization: sw.note || '',
            translation: '',
            href: sw.href,
          })) as any);
          setError(null);
          setLoading(false);
          return;
        }

        const normalizedQuery = searchQuery.trim().toLowerCase();
        const isSameWord = data.word?.toLowerCase() === normalizedQuery;
        const hasNoDetails = !data.verbalization && !data.translation;

        if (isSameWord && hasNoDetails) {
          setResult(null);
          setSuggestions([]);
          setError(t('wordNotFound') || 'Vārds nav atrasts');
        } else {
          setResult(data);
          setSuggestions([]);
          setError(null);
        }
        setLoading(false);
        return;
      }

      // Non-200 response from worker (e.g., 404) -> treat as not found
      setResult(null);
      setSuggestions([]);
      setError(t('wordNotFound') || 'Vārds nav atrasts');
      setLoading(false);
      return;
    } catch (err) {
      // Worker unavailable -> fall back to not found
      setResult(null);
      setSuggestions([]);
      setError(t('wordNotFound') || 'Vārds nav atrasts');
      setLoading(false);
      return;
    }
  };

  const handleSelectSuggestion = async (entry: any) => {
    const selectedWord = entry.word;
    setSearchQuery(selectedWord);
    setSuggestions([]);
    setError(null);
    setLoading(true);
    setResult(null);

    // Search for the selected word directly
    try {
      const workerUrl = 'https://latvial-learn.latvial-learn.workers.dev';
      const response = await fetch(`${workerUrl}/search?word=${encodeURIComponent(selectedWord)}`);

      if (response.ok) {
        const data: SearchResult = await response.json();

        if (data.similarWords && data.similarWords.length > 0) {
          setSuggestions(data.similarWords.map(sw => ({
            word: sw.word,
            verbalization: sw.note || '',
            translation: '',
            href: sw.href,
          })) as any);
        } else {
          const normalizedQuery = selectedWord.trim().toLowerCase();
          const isSameWord = data.word?.toLowerCase() === normalizedQuery;
          const hasNoDetails = !data.verbalization && !data.translation;

          if (isSameWord && hasNoDetails) {
            setError(t('wordNotFound') || 'Vārds nav atrasts');
          } else {
            setResult(data);
          }
        }
      } else {
        setError(t('wordNotFound') || 'Vārds nav atrasts');
      }
    } catch (err) {
      setError(t('wordNotFound') || 'Vārds nav atrasts');
    }
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="modal" style={{ display: 'flex' }}>
      <div className="modal-content search-words-modal">
        <span className="close" onClick={onClose}>&times;</span>
        <h3>{t('searchWords') || 'Meklēt vārdus'}</h3>
        
        <div className="search-words-input-group">
          <input
            type="text"
            className="search-words-input"
            placeholder={t('enterLatvianWord') || 'Ievadiet vārdu...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            autoFocus
          />
          <button 
            className="search-words-btn"
            onClick={handleSearch}
          >
            {t('search') || 'Мeklēt'}
          </button>
        </div>
        {!searchQuery && (
          <div style={{ fontSize: '12px', color: '#666', marginTop: '4px', marginBottom: '8px' }}>
            {t('searchHint') || 'Varat ievadīt vārdu citā valodā'}
          </div>
        )}

        {error && (
          <div className="search-words-error">
            {error}
          </div>
        )}

        {loading && (
          <div className="search-words-loading">
            Meklē...
          </div>
        )}

        {suggestions.length > 0 && (
          <div className="search-words-suggestions">
            <div className="suggestions-title">Līdzīgi vārdi:</div>
            {suggestions.map((entry, idx) => (
              <div
                key={idx}
                className="suggestion-item"
                onClick={() => handleSelectSuggestion(entry)}
              >
                <strong>{entry.word}</strong>
                <span className="suggestion-info">{entry.verbalization}</span>
              </div>
            ))}
          </div>
        )}

        {result && (
          <div className="search-words-result">
            <div className="result-item">
              <strong>{result.word}</strong>
              <p className="result-verbalization">{result.verbalization}</p>
              {result.translation && (
                <p className="result-translation">{result.translation}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchWords;
