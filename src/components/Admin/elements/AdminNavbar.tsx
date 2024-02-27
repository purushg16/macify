import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import Btn from "../../Brand/elements/Button";
import { Link } from "react-router-dom";
import useRoleStore from "../../store/roleStore";

const AdminNavbar = () => {
  const role = useRoleStore((s) => s.role);

  return (
    <Box bg="white">
      <Flex alignItems="center" px={{ base: 4, md: 8, lg: 16 }} py={8} w="100%">
        <Link to={role === "Admin" ? "/admin" : "/manager"}>
          <Heading fontSize="3xl"> Macify </Heading>
        </Link>
        <Spacer />
        <Btn text="D" primary />
      </Flex>
    </Box>
  );
};

export default AdminNavbar;
