import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { BsTrophy } from "react-icons/bs";
import { FaMedal } from "react-icons/fa";
import { TimeLimit, User } from "../types";

const TIME_OPTIONS: TimeLimit[] = [30, 60, 120];

export const Leaderboard = () => {
  const [selectedTime, setSelectedTime] = useState<TimeLimit>(60);
  const [scores, setScores] = useState<User[]>([]);

  useEffect(() => {
    const storedScores = JSON.parse(
      localStorage.getItem("scores") || "[]"
    ) as User[];
    const filteredScores = storedScores
      .filter((score) => score.timeLimit === selectedTime)
      .sort((a, b) => b.wpm - a.wpm)
      .slice(0, 10);
    setScores(filteredScores);
  }, [selectedTime]);

  const getMedalIcon = (index: number) => {
    switch (index) {
      case 0:
        return <BsTrophy size={20} color="#FFD700" />;
      case 1:
        return <FaMedal size={20} color="#C0C0C0" />;
      case 2:
        return <FaMedal size={20} color="#CD7F32" />;
      default:
        return null;
    }
  };

  return (
    <Box w="full" bg="gray.800" p="6" borderRadius="xl">
      <Box maxW="4xl" mx="auto">
        <Flex direction="column" gap="6">
          <Flex gap="4" justify="center">
            {TIME_OPTIONS.map((time) => (
              <Button
                key={time}
                onClick={() => setSelectedTime(time)}
                colorScheme={selectedTime === time ? "blue" : "gray"}
                variant={selectedTime === time ? "solid" : "ghost"}
                color={selectedTime === time ? "white" : "gray.400"}
                _hover={{
                  bg: "gray.700",
                  color: "white",
                }}
              >
                {time}s
              </Button>
            ))}
          </Flex>

          {scores.length > 0 ? (
            <Flex direction="column" gap="4">
              <Flex
                px="4"
                py="2"
                borderBottom="1px"
                borderColor="gray.700"
                color="gray.400"
                fontWeight="medium"
              >
                <Text flex="0 0 80px">Rank</Text>
                <Text flex="1">Nickname</Text>
                <Text flex="0 0 100px" textAlign="right">
                  WPM
                </Text>
                <Text flex="0 0 100px" textAlign="right">
                  Accuracy
                </Text>
              </Flex>

              {scores.map((score, index) => (
                <Flex
                  key={index}
                  px="4"
                  py="2"
                  _hover={{ bg: "gray.700" }}
                  transition="background 0.2s"
                  borderRadius="md"
                >
                  <Flex flex="0 0 80px" align="center" gap="2">
                    <Text color="gray.300">#{index + 1}</Text>
                    {getMedalIcon(index)}
                  </Flex>
                  <Text flex="1" color="gray.300">
                    {score.nickname}
                  </Text>
                  <Text
                    flex="0 0 100px"
                    textAlign="right"
                    color="blue.400"
                    fontWeight="bold"
                  >
                    {score.wpm}
                  </Text>
                  <Text flex="0 0 100px" textAlign="right" color="green.400">
                    {score.accuracy}%
                  </Text>
                </Flex>
              ))}
            </Flex>
          ) : (
            <Flex
              direction="column"
              align="center"
              justify="center"
              py="12"
              px="4"
            >
              <Text color="gray.400" fontSize="lg">
                No scores yet for {selectedTime} seconds
              </Text>
              <Text color="gray.500" fontSize="sm" mt="2">
                Complete a typing test to see your score here
              </Text>
            </Flex>
          )}
        </Flex>
      </Box>
    </Box>
  );
};
