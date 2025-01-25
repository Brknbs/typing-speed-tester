import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Results } from "../components/Results";
import { Settings } from "../components/Settings";
import { Stats } from "../components/Stats";
import { Timer } from "../components/Timer";
import { TypingArea } from "../components/TypingArea";
import { useTypingStore } from "../store/useTypingStore";

export const Home = () => {
  const { isActive, wpm } = useTypingStore();
  const showResults = !isActive && wpm > 0;

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
        {isActive && <Stats />}
        {isActive && <Timer />}
      </Box>

      {isActive ? (
        <TypingArea />
      ) : showResults ? (
        <Results />
      ) : (
        <>
          <Settings />
          <Flex justify="center" mt="8">
            <Button
              as={Link}
              to="/scores"
              variant="ghost"
              colorScheme="blue"
              size="lg"
            >
              Leaderboard
            </Button>
          </Flex>
        </>
      )}
    </Box>
  );
};
