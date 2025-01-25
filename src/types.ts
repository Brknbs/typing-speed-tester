export type TimeLimit = 30 | 60 | 120;

export interface User {
  nickname: string;
  wpm: number;
  accuracy: number;
  timeLimit: TimeLimit;
  timestamp: number;
}

export interface GameState {
  isActive: boolean;
  timeLimit: TimeLimit;
  timeRemaining: number;
  currentInput: string;
  targetText: string;
  correctChars: number;
  incorrectChars: number;
  totalWords: number;
  wpm: number;
  accuracy: number;
}

export interface HighScore extends User {
  id: string;
}
