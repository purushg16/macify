import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const AddPropertyPage = () => {
  return (
    <Flex flexDir="column" gap={8} alignItems="center">
      <Outlet />
    </Flex>
  );
};

export default AddPropertyPage;
