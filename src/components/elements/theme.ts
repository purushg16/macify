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
      50: "#E3E7FF",
      100: "#C5CFFD",
      200: "#A8BAFB",
      300: "#8AA5F9",
      400: "#6D91F7",
      500: "#B0B8FF", // the provided color
      600: "#507CE4",
      700: "#3E69CC",
      800: "#2C55B3",
      900: "#1A429B",
    },
  },
});

export default theme;
