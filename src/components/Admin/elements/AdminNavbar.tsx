import { Box, Flex, HStack, Icon, Image, Spacer } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../macify.svg";
import { IoMdLogOut } from "react-icons/io";
import NotificationButton from "./Dashboard/NotificationButton";
const AdminNavbar = ({ manager = false }: { manager?: boolean }) => {
  const navigate = useNavigate();

  return (
    <Box bg="white">
      <Flex alignItems="center" py={8} w="100%">
        <Link to={!manager ? "/admin" : "/manager"}>
          <Image src={logo} alt="macify" w={50} />
        </Link>
        <Spacer />
        <HStack gap={4}>
          {!manager && <NotificationButton />}

          <Box
            boxSize={10}
            bg="#f6f6f6"
            borderRadius={10}
            display="flex"
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
            onClick={() => {
              localStorage.removeItem("token");
              if (manager) navigate("/auth/mLogin");
              if (!manager) navigate("/auth/login");
            }}
          >
            <Icon as={IoMdLogOut} boxSize={6} />
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
};

export default AdminNavbar;
