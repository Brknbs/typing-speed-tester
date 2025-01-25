import { Box, Text, Flex } from "@chakra-ui/react";
import { useTypingStore } from "../store/useTypingStore";

export const Stats = () => {
  const { wpm, accuracy, isActive } = useTypingStore();

  if (!isActive) return null;

  return (
    <Box
      position="absolute"
      top="4"
      left="4"
      bg="gray.800"
      p="4"
      borderRadius="lg"
      boxShadow="lg"
    >
      <Flex gap="8">
        <Flex direction="column" gap="1">
          <Text color="gray.400" fontSize="sm">
            WPM
          </Text>
          <Text fontSize="2xl" fontWeight="bold" color="blue.400">
            {wpm}
          </Text>
        </Flex>

        <Flex direction="column" gap="1">
          <Text color="gray.400" fontSize="sm">
            Accuracy
          </Text>
          <Text fontSize="2xl" fontWeight="bold" color="green.400">
            {accuracy}%
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
