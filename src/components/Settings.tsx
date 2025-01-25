import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useTypingStore } from "../store/useTypingStore";
import { TimeLimit } from "../types";
import { generateParagraph } from "../utils/textGenerator";

const TIME_OPTIONS: TimeLimit[] = [30, 60, 120];

export const Settings = () => {
  const {
    isActive,
    setTimeLimit,
    startGame,
    timeLimit,
    resetGame,
    setTargetText,
    nickname,
    setNickname,
  } = useTypingStore();

  const handleStart = () => {
    if (nickname.trim()) {
      resetGame();
      setTargetText(generateParagraph());
      startGame();
    }
  };

  return (
    <Box w="full" bg="gray.800" p="8" borderRadius="xl">
      <Box maxW="2xl" mx="auto">
        <Flex direction="column" gap="8">
          <Box>
            <Text mb="3" color="gray.400" fontSize="lg">
              Nickname
            </Text>
            <Input
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Enter your nickname"
              size="lg"
              bg="gray.700"
              border="none"
              fontSize="lg"
              _focus={{
                boxShadow: "0 0 0 2px rgba(66, 153, 225, 0.6)",
              }}
              disabled={isActive}
            />
          </Box>

          <Box>
            <Text mb="3" color="gray.400" fontSize="lg">
              Time Limit
            </Text>
            <Flex gap="4">
              {TIME_OPTIONS.map((time) => (
                <Button
                  key={time}
                  onClick={() => setTimeLimit(time)}
                  colorScheme={timeLimit === time ? "blue" : "gray"}
                  variant={timeLimit === time ? "solid" : "ghost"}
                  flex="1"
                  size="lg"
                  fontSize="lg"
                  disabled={isActive}
                  color={timeLimit === time ? "white" : "gray.400"}
                  _hover={{
                    bg: "gray.700",
                    color: "white",
                  }}
                >
                  {time}s
                </Button>
              ))}
            </Flex>
          </Box>

          <Button
            colorScheme="blue"
            size="lg"
            fontSize="lg"
            py="8"
            onClick={handleStart}
            disabled={isActive || !nickname.trim()}
          >
            Start Test
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
