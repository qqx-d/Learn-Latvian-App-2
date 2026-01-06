import { Stats } from '../types';

export const loadStats = (): Stats => {
  try {
    const raw = localStorage.getItem('trainerStats');
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

export const saveStats = (stats: Stats): void => {
  localStorage.setItem('trainerStats', JSON.stringify(stats));
};

export const updateStats = (stats: Stats, key: string, isCorrect: boolean): Stats => {
  const newStats = { ...stats };
  if (!newStats[key]) {
    newStats[key] = { correct: 0, wrong: 0 };
  }
  if (isCorrect) {
    newStats[key].correct++;
  } else {
    newStats[key].wrong++;
  }
  saveStats(newStats);
  return newStats;
};

export const cleanWord = (word: string): string => {
  return word.replace(/\(.*?\)/g, '').trim().toLowerCase();
};

export const shuffle = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const pickWeightedIndex = (words: any[], stats: Stats): number => {
  if (words.length === 0) return 0;
  if (words.length === 1) return 0;

  // Вычисляем веса слов на основе их сложности
  const weights = words.map((w) => {
    const key = w.word + '|' + w.translation;
    const s = stats[key] || { correct: 0, wrong: 0 };
    
    // Базовый вес: слова, которые хуже знаете, появляются чаще
    // Добавляем штраф за недавние ошибки
    const basicWeight = Math.pow(1 + s.wrong, 1.5) / Math.max(1, s.correct);
    
    // Бонус за слова, которые долго не показывались (анти-скука)
    const variety = 1 + Math.random() * 0.3;
    
    return basicWeight * variety;
  });

  // Выбираем одно из 3 наиболее вероятных слов (чтобы было разнообразие)
  const candidates = weights
    .map((w, idx) => ({ weight: w, index: idx }))
    .sort((a, b) => b.weight - a.weight)
    .slice(0, Math.min(3, words.length));

  // Выбираем случайно из кандидатов с учётом их весов
  const totalWeight = candidates.reduce((a, b) => a + b.weight, 0);
  let r = Math.random() * totalWeight;
  
  for (const candidate of candidates) {
    r -= candidate.weight;
    if (r <= 0) return candidate.index;
  }
  
  return candidates[0].index;
};

// Альтернативный алгоритм для более сложного выбора
export const pickSmartIndex = (words: any[], stats: Stats, lastIndex: number, recentIndices: number[] = []): number => {
  if (words.length === 0) return 0;
  if (words.length === 1) return 0;

  // Исключаем недавние слова и текущее слово
  const forbiddenIndices = new Set([lastIndex, ...recentIndices]);
  const availableIndices = Array.from({ length: words.length })
    .map((_, i) => i)
    .filter(i => !forbiddenIndices.has(i));

  // Если все слова недавние, разрешаем последнее слово (для малых списков)
  const indicesToConsider = availableIndices.length > 0 ? availableIndices : [lastIndex];

  const weights = indicesToConsider.map(idx => {
    const w = words[idx];
    const key = w.word + '|' + w.translation;
    const s = stats[key] || { correct: 0, wrong: 0 };
    
    // Слова с ошибками более приоритетны (экспоненциальный вес)
    const errorWeight = Math.pow(2.5, Math.min(s.wrong, 5)) / Math.max(1, s.correct + 1);
    
    // Слова с хорошей статистикой иногда показываем для подтверждения
    const confirmationBonus = s.correct > 5 ? 0.6 : 1.0;
    
    // Добавляем случайность для разнообразия
    const randomBonus = 0.8 + Math.random() * 0.4;
    
    return errorWeight * confirmationBonus * randomBonus;
  });

  const total = weights.reduce((a, b) => a + b, 0);
  if (total === 0) return indicesToConsider[0];
  
  let r = Math.random() * total;
  let acc = 0;
  
  for (let i = 0; i < weights.length; i++) {
    acc += weights[i];
    if (r <= acc) return indicesToConsider[i];
  }
  
  return indicesToConsider[0];
};
