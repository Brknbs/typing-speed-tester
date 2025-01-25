import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Settings } from "../components/Settings";

export const Home = () => {
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
      </Box>

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
    </Box>
  );
};
