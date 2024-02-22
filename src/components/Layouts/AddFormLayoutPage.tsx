import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const AddFormLayoutPage = () => {
  return (
    <Box maxH="100%" h="100%">
      <Outlet />
    </Box>
  );
};

export default AddFormLayoutPage;
