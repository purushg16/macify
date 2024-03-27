import { Box, Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { SmallButton } from "./Button";
import DashboardIcon from "../../../assets/icons/dashbaord.json";
import CalendarIcon from "../../../assets/icons/calendar.json";
import WorkIcon from "../../../assets/icons/work.json";
import PropertyIcon from "../../../assets/icons/property.json";
import AccountIcon from "../../../assets/icons/account.json";

const AppBar = ({ manager = false }: { manager?: boolean }) => {
  const location = useLocation().pathname.split("/")[2];

  return (
    <Box
      zIndex={100}
      pos="fixed"
      p={2}
      left="50%"
      transform="translateX(-50%)"
      bottom={3}
      borderRadius={99}
      overflow="hidden"
      bg="primary.500"
    >
      <Flex gap={2} transition="all 0.5s">
        <SmallButton
          title="Dashboard"
          icon={DashboardIcon}
          active={!location}
          route={!manager ? "/admin" : "/manager"}
          admin={!manager}
        />

        <SmallButton
          title="Calender"
          icon={CalendarIcon}
          active={location === "calendar"}
          route={!manager ? "/admin/calendar" : "/manager/calendar"}
          admin={!manager}
        />
        {manager && (
          <SmallButton
            title="Account"
            icon={AccountIcon}
            active={location === "account"}
            route="/manager/account"
          />
        )}
        {!manager && (
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
        )}
      </Flex>
    </Box>
  );
};

export default AppBar;
