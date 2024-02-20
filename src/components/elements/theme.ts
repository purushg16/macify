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
  },
});

export default theme;
