import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111",
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
    secondary: {
      50: "#F2F2F2",
      100: "#E5E5E5",
      200: "#D9D9D9", // the provided color
      300: "#CCCCCC",
      400: "#BFBFBF",
      500: "#B0B8FF", // the previously provided color
      600: "#A6A6A6",
      700: "#999999",
      800: "#8C8C8C",
      900: "#808080",
    },
  },
});

export default theme;
