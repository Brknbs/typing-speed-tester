import { Box, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Results } from "./pages/Results";
import { Test } from "./pages/Test";
import { Scores } from "./pages/Scores";
import { theme } from "./theme";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Box minH="100vh" bg="gray.900" color="white" p="8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/results" element={<Results />} />
            <Route path="/scores" element={<Scores />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
