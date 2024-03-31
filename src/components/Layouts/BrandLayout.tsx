import { VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const BrandLayout = () => {
  return (
    <VStack p={8} gap={8} align="center" justify="center" w="100%">
      <Outlet />
    </VStack>
  );
};

export default BrandLayout;
