import { Box, Flex, Heading } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Flex minH="100vh" alignItems="center" justify="center">
      <Box
        textAlign="center"
        border="1px solid"
        mx={4}
        px={12}
        pt={8}
        borderRadius={20}
        borderColor="gray.50"
      >
        <Heading mb={8} fontSize="3xl">
          Macify
        </Heading>
        <Outlet />
      </Box>
    </Flex>
  );
};

export default AuthLayout;
