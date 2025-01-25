import { Box, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Stats } from "../components/Stats";
import { Timer } from "../components/Timer";
import { TypingArea } from "../components/TypingArea";
import { useTypingStore } from "../store/useTypingStore";

export const Test = () => {
  const { isActive, wpm } = useTypingStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isActive && wpm > 0) {
      navigate("/results");
    } else if (!isActive) {
      navigate("/");
    }
  }, [isActive, wpm, navigate]);

  return (
    <Box>
      <Box position="relative" mb="8">
        <Heading
          as="h1"
          textAlign="center"
          fontSize="4xl"
          fontWeight="bold"
          bgGradient="linear(to-r, blue.400, purple.500)"
          bgClip="text"
          mb="8"
        >
          Typing Speed Test
        </Heading>
        <Stats />
        <Timer />
      </Box>
      <TypingArea />
    </Box>
  );
};
