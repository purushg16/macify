import * as React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import theme from "./components/elements/theme";
import { RouterProvider } from "react-router-dom";
import router from "./components/router";
import "./index.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const rootElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
