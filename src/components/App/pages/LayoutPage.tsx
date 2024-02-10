import { Box, Show } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import AppBar from "../elements/AppBar";
import Navbar from "../elements/Navbar";

const LayoutPage = () => {
  //   const { colorMode, toggleColorMode } = useColorMode();
  //   if (colorMode === "light") toggleColorMode();
  //   if (colorMode === "dark") toggleColorMode();

  return (
    <Box bg="#eff1ef">
      <Show above="md">
        <Navbar />
      </Show>

      <Box p={4}>
        <Outlet />
      </Box>

      <Show below="md">
        <AppBar />
      </Show>
    </Box>
  );
};

export default LayoutPage;
