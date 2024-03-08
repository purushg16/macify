import { Box, Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { SmallButton } from "./Button";
import DashboardIcon from "../../../assets/icons/dashbaord.json";
import CalendarIcon from "../../../assets/icons/calendar.json";
import WorkIcon from "../../../assets/icons/work.json";
import PropertyIcon from "../../../assets/icons/property.json";

const AppBar = () => {
  const location = useLocation().pathname.split("/")[2];
  const role = localStorage.getItem("manager") === "true" ? "Manager" : "Admin";

  return (
    <Box
      zIndex={10}
      pos="fixed"
      p={2}
      left="50%"
      transform="translateX(-50%)"
      bottom={3}
      borderRadius={99}
      overflow="hidden"
      border="3px solid"
      bg="#F5F7F8"
      borderColor="rgba(255, 255, 255, 0.1)"
      backdropFilter="blur(2em)"
    >
      <Flex gap={4}>
        <SmallButton
          title="Dashboard"
          icon={DashboardIcon}
          active={!location}
          route={role === "Admin" ? "/admin" : "/manager"}
          admin={role === "Admin"}
        />

        <SmallButton
          title="Calender"
          icon={CalendarIcon}
          active={location === "calendar"}
          route={role === "Admin" ? "/admin/calendar" : "/manager/calendar"}
          admin={role === "Admin"}
        />
        {/* {role === "Admin" && ( */}
        <>
          <SmallButton
            title="Property"
            icon={PropertyIcon}
            active={location === "properties"}
            route="/admin/properties"
          />
          <SmallButton
            title="Manager"
            icon={WorkIcon}
            active={location === "manager"}
            route="/admin/manager"
          />
        </>
        {/* )} */}
      </Flex>
    </Box>
  );
};

export default AppBar;
