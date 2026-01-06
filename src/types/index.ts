export interface Word {
  word: string;
  translation: string;
}

export interface WordWithKey extends Word {
  key: string;
}

export interface DeclensionWord {
  word: string;
  translation: string;
  group: string;
}

export interface ConjugationPattern {
  present1st: string;
  present3rd: string;
}

export interface ConjugationVerb {
  infinitive: string;
  translation: string;
  correctPatternId: string;
}

export interface ConjugationOption {
  patternId: string;
  present1st: string;
  present3rd: string;
  fromVerb?: string;  // Для логирования/отладки
}

export interface ConjugationQuestion {
  infinitive: string;
  translation: string;
  options: ConjugationOption[];
  correctPatternId: string;
}

export interface Stats {
  [key: string]: {
    correct: number;
    wrong: number;
  };
}

export type TrainingMode = 'ru2lv' | 'lv2ru' | 'both';
export type WordType = 'nouns' | 'verbs' | 'adjectives';
export type Level = 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'randomAll';
