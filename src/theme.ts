import { type ThemeConfig } from "@chakra-ui/theme";
import { extendTheme } from "@chakra-ui/theme-utils";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "white",
      },
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "blue",
      },
    },
  },
});
