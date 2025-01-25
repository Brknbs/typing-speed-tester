import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTypingStore } from "../store/useTypingStore";
import { User } from "../types";

export const Results = () => {
  const { wpm, accuracy, correctChars, incorrectChars, timeLimit } =
    useTypingStore();
  const [rank, setRank] = useState<number | null>(null);
  const [isTopScore, setIsTopScore] = useState(false);

  useEffect(() => {
    const scores = JSON.parse(localStorage.getItem("scores") || "[]") as User[];
    const filteredScores = scores
      .filter((score) => score.timeLimit === timeLimit)
      .sort((a, b) => b.wpm - a.wpm);

    const userRank = filteredScores.findIndex((score) => score.wpm === wpm) + 1;
    setRank(userRank);
    setIsTopScore(userRank === 1);
  }, [wpm, timeLimit]);

  return (
    <Box w="full" maxW="xl" mx="auto" p="6">
      <VStack spacing="8" align="stretch">
        {isTopScore && (
          <Box
            p="6"
            bg="blue.900"
            borderRadius="xl"
            textAlign="center"
            animation="pulse 2s infinite"
            sx={{
              "@keyframes pulse": {
                "0%": { transform: "scale(1)" },
                "50%": { transform: "scale(1.02)" },
                "100%": { transform: "scale(1)" },
              },
            }}
          >
            <Heading size="lg" color="blue.200" mb="2">
              🎉 New High Score! 🎉
            </Heading>
            <Text color="blue.100">
              Congratulations! You're now #1 in the {timeLimit}s category!
            </Text>
          </Box>
        )}

        <Box bg="gray.800" p="6" borderRadius="xl">
          <VStack spacing="6">
            <Flex gap="8" justify="center">
              <Box textAlign="center">
                <Text color="gray.400" fontSize="sm">
                  WPM
                </Text>
                <Text fontSize="4xl" fontWeight="bold" color="blue.400">
                  {wpm}
                </Text>
              </Box>

              <Box textAlign="center">
                <Text color="gray.400" fontSize="sm">
                  Accuracy
                </Text>
                <Text fontSize="4xl" fontWeight="bold" color="green.400">
                  {accuracy}%
                </Text>
              </Box>

              {rank && (
                <Box textAlign="center">
                  <Text color="gray.400" fontSize="sm">
                    Rank
                  </Text>
                  <Text fontSize="4xl" fontWeight="bold" color="purple.400">
                    #{rank}
                  </Text>
                </Box>
              )}
            </Flex>

            <Flex gap="8" justify="center">
              <Box textAlign="center">
                <Text color="gray.400" fontSize="sm">
                  Correct Characters
                </Text>
                <Text fontSize="2xl" fontWeight="bold" color="green.400">
                  {correctChars}
                </Text>
              </Box>

              <Box textAlign="center">
                <Text color="gray.400" fontSize="sm">
                  Wrong Characters
                </Text>
                <Text fontSize="2xl" fontWeight="bold" color="red.400">
                  {incorrectChars}
                </Text>
              </Box>
            </Flex>
          </VStack>
        </Box>

        <Flex gap="4" justify="center">
          <Button
            as={Link}
            to="/scores"
            variant="ghost"
            colorScheme="blue"
            size="lg"
          >
            View Leaderboard
          </Button>
          <Button
            as={Link}
            to="/"
            variant="solid"
            colorScheme="blue"
            size="lg"
            onClick={() => window.location.reload()}
          >
            Try Again
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
};
