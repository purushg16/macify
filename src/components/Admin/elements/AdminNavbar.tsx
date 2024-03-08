import { Box, Flex, HStack, Heading, Image, Spacer } from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import IconWrapper from "./Icons";
import NotificationIcon from "../../../assets/icons/notification.json";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname.split("/")[2];
  console.log(location);
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
            <IconWrapper
              icon={NotificationIcon}
              active={location === "notifications"}
            />
          </Link>

          <Image
            boxSize={10}
            p={2}
            bg="gray.50"
            borderRadius={99}
            src="https://img.icons8.com/pulsar-color/32/exit.png"
            alt="exit"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/auth/login");
            }}
            cursor="pointer"
          />
        </HStack>
      </Flex>
    </Box>
  );
};

export default AdminNavbar;
