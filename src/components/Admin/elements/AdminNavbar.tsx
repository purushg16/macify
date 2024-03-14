import { Box, Flex, HStack, Icon, Image, Spacer } from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import IconWrapper from "./Icons";
import NotificationIcon from "../../../assets/icons/notification.json";
import logo from "../../../../public/macify.svg";
import { IoMdLogOut } from "react-icons/io";
const AdminNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname.split("/")[2];
  const role = localStorage.getItem("manager") === "true" ? "Manager" : "Admin";

  return (
    <Box bg="white">
      <Flex alignItems="center" py={8} w="100%">
        <Link to={role === "Admin" ? "/admin" : "/manager"}>
          <Image src={logo} alt="macify" w={50} />
        </Link>
        <Spacer />
        <HStack gap={4}>
          <Link to="notifications">
            <IconWrapper
              icon={NotificationIcon}
              active={location === "notifications"}
              bg="#f6f6f6"
            />
          </Link>

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
              navigate("/auth/login");
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
