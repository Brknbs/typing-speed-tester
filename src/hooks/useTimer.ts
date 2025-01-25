import { useEffect, useRef } from "react";
import { useTypingStore } from "../store/useTypingStore";

export const useTimer = () => {
  const timerRef = useRef<number | null>(null);
  const { isActive, timeRemaining, decrementTime } = useTypingStore();

  useEffect(() => {
    if (isActive && timeRemaining > 0) {
      timerRef.current = window.setInterval(() => {
        decrementTime();
      }, 1000);

      return () => {
        if (timerRef.current) {
          window.clearInterval(timerRef.current);
        }
      };
    }
  }, [isActive, timeRemaining, decrementTime]);

  return timeRemaining;
};
