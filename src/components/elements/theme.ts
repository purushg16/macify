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
      50: "#B0B8FF", // the provided color
      100: "#9DA7FB",
      200: "#8A96F7",
      300: "#7785F3",
      400: "#6564EF",
      500: "#5253EB",
      600: "#3F42E7",
      700: "#2C31E3",
      800: "#1910DF",
      900: "#070FDB",
    },
  },
});

export default theme;
