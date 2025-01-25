import { Box, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Scores } from "./pages/Scores";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Box minH="100vh" bg="gray.900" color="white" p="8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scores" element={<Scores />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
