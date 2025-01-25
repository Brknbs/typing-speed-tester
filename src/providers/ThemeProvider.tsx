import { ChakraProvider, ChakraProviderProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const config: ChakraProviderProps = {
    value: {
      colorMode: "dark",
      setColorMode: () => {},
      toggleColorMode: () => {},
      forced: true,
    },
  };

  return <ChakraProvider {...config}>{children}</ChakraProvider>;
};
