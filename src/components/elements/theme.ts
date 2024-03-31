import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  config,
  components: {
    Modal: {
      baseStyle: {
        overlay: {
          bg: "rgba(0,0,0,0.5)",
        },
      },
    },
  },
  colors: {
    gray: {
      50: "#e8e8e8",
      100: "#dcdcdc",
      200: "#b8b8b8",
      300: "#999999",
      400: "#808080",
      500: "#6e6e6e",
      600: "#585858",
      700: "#1a1a1a",
      800: "#0d0d0d",
      900: "#0b0b0b",
    },
    blackAlpha: {
      50: "#e8e8e8",
      100: "#dcdcdc",
      200: "#b8b8b8",
      300: "#999999",
      400: "#808080",
      500: "#6e6e6e",
      600: "#585858",
      700: "#1a1a1a",
      800: "#0d0d0d",
      900: "#0b0b0b",
    },
    primary: {
      50: "#f2f5f8",
      100: "#d8e1eb",
      200: "#bac7d6",
      300: "#9aaec2",
      400: "#7694ae",
      500: "#375265", // Your specified color
      600: "#476b7f",
      700: "#526e86",
      800: "#5e748c",
      900: "#6b7993",
    },
    secondary: {
      50: "#f4e9d4",
      100: "#e9d5b1",
      200: "#deb18e",
      300: "#d48d6c",
      400: "#c96849",
      500: "#C59878", // Your specified color
      600: "#ad7f60",
      700: "#946746",
      800: "#7b512c",
      900: "#623f1c",
    },
  },
});

export default theme;
