import * as React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import theme from "./components/elements/theme";
import { RouterProvider } from "react-router-dom";
import router from "./components/router";
import "./index.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const rootElement = document.getElementById("root") as HTMLElement;
const client = new QueryClient();

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={client}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
