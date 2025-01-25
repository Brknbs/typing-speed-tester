import { Box, Flex, Text } from "@chakra-ui/react";
import { BsClock } from "react-icons/bs";
import { useTimer } from "../hooks/useTimer";

export const Timer = () => {
  const timeRemaining = useTimer();

  return (
    <Box
      position="absolute"
      top="4"
      right="4"
      bg="gray.800"
      p="3"
      borderRadius="lg"
      boxShadow="lg"
    >
      <Flex align="center" gap="2">
        <BsClock size={20} color={timeRemaining <= 10 ? "#F56565" : "white"} />
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color={timeRemaining <= 10 ? "red.400" : "white"}
          transition="color 0.2s"
        >
          {timeRemaining}s
        </Text>
      </Flex>
    </Box>
  );
};
