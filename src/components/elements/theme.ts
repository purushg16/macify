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
      "50": "#E8F6F6",
      "100": "#C4E0E1",
      "200": "#9CCACA",
      "300": "#74B3B3",
      "400": "#518D8D",
      "500": "#44615B",
      "600": "#3D5752",
      "700": "#354D49",
      "800": "#2E423F",
      "900": "#263835",
    },
  },
});

export default theme;
