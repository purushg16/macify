import { Box, Flex, HStack, Icon, Image, Spacer } from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import IconWrapper from "./Icons";
import NotificationIcon from "../../../assets/icons/notification.json";
import logo from "../../../macify.svg";
import { IoMdLogOut } from "react-icons/io";
import { useGetNotificationCount } from "../../hooks/useAdmin";
const AdminNavbar = ({ manager = false }: { manager?: boolean }) => {
  const navigate = useNavigate();
  const location = useLocation().pathname.split("/")[2];
  const { data: notificationCount } = useGetNotificationCount(!manager);

  return (
    <Box bg="white">
      <Flex alignItems="center" py={8} w="100%">
        <Link to={!manager ? "/admin" : "/manager"}>
          <Image src={logo} alt="macify" w={50} />
        </Link>
        <Spacer />
        <HStack gap={4}>
          {!manager && (
            <Link to="notifications">
              <IconWrapper
                count={notificationCount}
                icon={NotificationIcon}
                active={location === "notifications"}
                bg="#f6f6f6"
              />
            </Link>
          )}

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
