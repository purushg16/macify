import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const AddLayoutPage = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
};

export default AddLayoutPage;
