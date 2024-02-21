import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const AddFormLayoutPage = () => {
  return (
    <Box maxH="80%" h="80%" my={4}>
      <Outlet />
    </Box>
  );
};

export default AddFormLayoutPage;
