import { Flex } from "@chakra-ui/react";
import { Outlet, ScrollRestoration } from "react-router-dom";

const AddFormLayoutPage = () => {
  return (
    <Flex flexDir="column" gap={8} alignItems="center">
      <Outlet />
      <ScrollRestoration />
    </Flex>
  );
};

export default AddFormLayoutPage;
