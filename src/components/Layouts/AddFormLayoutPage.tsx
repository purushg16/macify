import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const AddFormLayoutPage = () => {
  return (
    <Flex
      maxH="80%"
      h="80%"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
    >
      <Outlet />
    </Flex>
  );
};

export default AddFormLayoutPage;
