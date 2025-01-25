import { Box, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Results as ResultsComponent } from "../components/Results";
import { useTypingStore } from "../store/useTypingStore";

export const Results = () => {
  const { wpm } = useTypingStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (wpm === 0) {
      navigate("/");
    }
  }, [wpm, navigate]);

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
          Test Results
        </Heading>
      </Box>
      <ResultsComponent />
    </Box>
  );
};
