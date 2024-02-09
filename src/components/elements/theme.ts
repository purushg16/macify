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
      50: "#f9d5cf",
      100: "#f0afa1",
      200: "#e58573",
      300: "#dc5b45",
      400: "#d43117",
      500: "#cd5840",
      600: "#c34839",
      700: "#b23832",
      800: "#a1282b",
      900: "#901821",
    },
  },
});

export default theme;
