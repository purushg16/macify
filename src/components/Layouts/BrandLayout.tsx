import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const BrandLayout = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
  // if (colorMode === "light") toggleColorMode();
  // if (colorMode === "dark") toggleColorMode();

  return (
    <Box>
      <Outlet />
    </Box>
  );
};

export default BrandLayout;
