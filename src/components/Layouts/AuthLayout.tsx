import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Flex minH="100vh" alignItems="center" justify="center">
      <Outlet />
    </Flex>
  );
};

export default AuthLayout;
