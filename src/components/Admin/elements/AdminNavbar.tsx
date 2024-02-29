import {
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import Btn from "../../Brand/elements/Button";
import { Link } from "react-router-dom";
import useRoleStore from "../../store/roleStore";
import { BsBell } from "react-icons/bs";

const AdminNavbar = () => {
  const role = useRoleStore((s) => s.role);

  return (
    <Box bg="white">
      <Flex alignItems="center" py={8} w="100%">
        <Link to={role === "Admin" ? "/admin" : "/manager"}>
          <Heading fontSize="3xl"> Macify </Heading>
        </Link>
        <Spacer />
        <HStack>
          <Link to="notifications">
            <IconButton
              bg="gray.50"
              aria-label="notification"
              icon={<Icon color="primary.500" as={BsBell} />}
            />
          </Link>
          <Btn text="D" primary />
        </HStack>
      </Flex>
    </Box>
  );
};

export default AdminNavbar;
