import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTypingStore } from "../store/useTypingStore";

export const TypingArea = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    targetText,
    currentInput,
    isActive,
    updateInput,
    correctChars,
    incorrectChars,
    endGame,
  } = useTypingStore();

  useEffect(() => {
    if (isActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isActive]);

  if (!targetText || !isActive) {
    return null;
  }

  const getCharacterStyle = (index: number) => {
    if (index >= currentInput.length) return {};

    return {
      color:
        currentInput[index] === targetText[index] ? "green.400" : "red.400",
      backgroundColor:
        currentInput[index] === targetText[index] ? "green.900" : "red.900",
    };
  };

  return (
    <Box w="full" bg="gray.800" p="8" borderRadius="xl">
      <Box maxW="4xl" mx="auto">
        <Box
          mb="6"
          p="6"
          bg="gray.700"
          borderRadius="lg"
          h="200px"
          overflowY="auto"
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "gray.600",
              borderRadius: "2px",
            },
          }}
        >
          <Text fontSize="xl" lineHeight="tall" letterSpacing="wide">
            {targetText.split("").map((char, index) => (
              <Text
                as="span"
                key={index}
                {...getCharacterStyle(index)}
                transition="all 0.1s"
              >
                {char}
              </Text>
            ))}
          </Text>
        </Box>

        <Input
          ref={inputRef}
          value={currentInput}
          onChange={(e) => updateInput(e.target.value)}
          onPaste={(e) => e.preventDefault()}
          onCopy={(e) => e.preventDefault()}
          placeholder={isActive ? "Start typing..." : "Click start to begin"}
          size="lg"
          fontSize="lg"
          bg="gray.700"
          border="none"
          py="7"
          _focus={{
            boxShadow: "0 0 0 2px rgba(66, 153, 225, 0.6)",
          }}
          disabled={!isActive}
        />

        <Flex mt="6" justify="space-between" align="center">
          <Box display="flex" gap="6">
            <Text color="green.400" fontSize="lg">
              Correct: {correctChars}
            </Text>
            <Text color="red.400" fontSize="lg">
              Incorrect: {incorrectChars}
            </Text>
          </Box>

          <Flex gap="4">
            <Button
              as={Link}
              to="/"
              variant="ghost"
              colorScheme="blue"
              size="lg"
            >
              Back to Home
            </Button>
            <Button colorScheme="blue" size="lg" onClick={endGame}>
              Finish Test
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
