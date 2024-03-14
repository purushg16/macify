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
      zIndex={100}
      pos="fixed"
      p={4}
      left="50%"
      transform="translateX(-50%)"
      bottom={3}
      borderRadius={99}
      overflow="hidden"
      bg="primary.500"
    >
      <Flex gap={2}>
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
