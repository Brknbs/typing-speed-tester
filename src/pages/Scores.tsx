import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Leaderboard } from "../components/Leaderboard";

export const Scores = () => {
  return (
    <Box>
      <Box mb="8">
        <Heading
          as="h1"
          textAlign="center"
          fontSize="4xl"
          fontWeight="bold"
          bgGradient="linear(to-r, blue.400, purple.500)"
          bgClip="text"
          mb="8"
        >
          High Scores
        </Heading>
      </Box>

      <Leaderboard />

      <Flex justify="center" mt="8">
        <Button as={Link} to="/" variant="ghost" colorScheme="blue" size="lg">
          Back to Test
        </Button>
      </Flex>
    </Box>
  );
};
