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
import { Link, useNavigate } from "react-router-dom";
import { BsBell } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("manager") === "true" ? "Manager" : "Admin";

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
          <IconButton
            bg="gray.50"
            aria-label="notification"
            icon={<Icon as={CiLogout} />}
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/auth/login");
            }}
          />
        </HStack>
      </Flex>
    </Box>
  );
};

export default AdminNavbar;
