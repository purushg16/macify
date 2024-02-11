import { Box, Show } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import AppBar from "../elements/AppBar";
import Navbar from "../elements/Navbar";

const LayoutPage = () => {
  //   const { colorMode, toggleColorMode } = useColorMode();
  //   if (colorMode === "light") toggleColorMode();
  //   if (colorMode === "dark") toggleColorMode();
  // bg="#eff1ef"
  return (
    <Box>
      <Show above="md">
        <Navbar />
      </Show>

      <Box p={4}>
        <Outlet />
      </Box>

      <Show below="md">
        <Box py={8} />
        <AppBar />
      </Show>
    </Box>
  );
};

export default LayoutPage;
