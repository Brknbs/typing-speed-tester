import { create } from "zustand";
import { GameState, TimeLimit, User } from "../types";

interface TypingStore extends GameState {
  nickname: string;
  setNickname: (nickname: string) => void;
  setTimeLimit: (time: TimeLimit) => void;
  startGame: () => void;
  endGame: () => void;
  updateInput: (input: string) => void;
  setTargetText: (text: string) => void;
  updateStats: () => void;
  resetGame: () => void;
  saveScore: () => void;
  decrementTime: () => void;
}

const calculateWPM = (chars: number, timeElapsed: number) => {
  if (timeElapsed === 0) return 0;
  const minutes = timeElapsed / 60;
  const words = chars / 5; // Standard: 5 characters = 1 word
  return Math.round(words / minutes);
};

const getLastNickname = (): string => {
  try {
    const scores = JSON.parse(localStorage.getItem("scores") || "[]") as User[];
    return scores.length > 0 ? scores[scores.length - 1].nickname : "";
  } catch {
    return "";
  }
};

const initialState: GameState & { nickname: string } = {
  isActive: false,
  timeLimit: 60,
  timeRemaining: 60,
  currentInput: "",
  targetText: "",
  correctChars: 0,
  incorrectChars: 0,
  totalWords: 0,
  wpm: 0,
  accuracy: 100,
  nickname: getLastNickname(),
};

export const useTypingStore = create<TypingStore>((set, get) => ({
  ...initialState,

  setNickname: (nickname) => set({ nickname }),

  setTimeLimit: (time) => set({ timeLimit: time, timeRemaining: time }),

  startGame: () => {
    const state = get();
    set({
      isActive: true,
      timeRemaining: state.timeLimit,
      currentInput: "",
      correctChars: 0,
      incorrectChars: 0,
      totalWords: 0,
      wpm: 0,
      accuracy: 100,
    });
  },

  endGame: () => {
    const state = get();
    if (state.isActive) {
      set({ isActive: false });
      get().updateStats();
      get().saveScore();
    }
  },

  updateInput: (input) => {
    const state = get();
    const targetText = state.targetText;
    let correct = 0;
    let incorrect = 0;

    for (let i = 0; i < input.length; i++) {
      if (input[i] === targetText[i]) {
        correct++;
      } else {
        incorrect++;
      }
    }

    set({
      currentInput: input,
      correctChars: correct,
      incorrectChars: incorrect,
    });

    // Update stats in real-time
    const totalChars = correct + incorrect;
    const accuracy =
      totalChars > 0 ? Math.round((correct / totalChars) * 100) : 100;
    const timeElapsed = state.timeLimit - state.timeRemaining;
    const wpm = calculateWPM(correct, timeElapsed);

    set({
      accuracy,
      wpm,
      totalWords: Math.floor(correct / 5),
    });
  },

  setTargetText: (text) => set({ targetText: text }),

  updateStats: () => {
    const state = get();
    const totalChars = state.correctChars + state.incorrectChars;
    const accuracy =
      totalChars > 0
        ? Math.round((state.correctChars / totalChars) * 100)
        : 100;
    const timeElapsed = state.timeLimit - state.timeRemaining;
    const wpm = calculateWPM(state.correctChars, timeElapsed);

    set({
      wpm,
      accuracy,
      totalWords: Math.floor(state.correctChars / 5),
    });
  },

  resetGame: () => {
    const { nickname, timeLimit } = get();
    set({ ...initialState, nickname, timeLimit, timeRemaining: timeLimit });
  },

  saveScore: () => {
    const state = get();
    const score: User = {
      nickname: state.nickname.trim() || "unknown",
      wpm: state.wpm,
      accuracy: state.accuracy,
      timeLimit: state.timeLimit,
      timestamp: Date.now(),
    };

    const scores = JSON.parse(localStorage.getItem("scores") || "[]");
    localStorage.setItem("scores", JSON.stringify([...scores, score]));
  },

  decrementTime: () => {
    const state = get();
    if (state.timeRemaining > 0) {
      set({ timeRemaining: state.timeRemaining - 1 });
      if (state.timeRemaining <= 1) {
        get().endGame();
      }
    }
  },
}));
