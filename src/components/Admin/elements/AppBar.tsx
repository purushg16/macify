import { Box, Flex } from "@chakra-ui/react";
import { TbBuilding, TbCalendar, TbLayoutBoard } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { SmallButton } from "./Button";
import useRoleStore from "../../store/roleStore";

const AppBar = () => {
  const location = useLocation().pathname.split("/")[2];

  const role = useRoleStore((s) => s.role);
  // const s = useRoleStore((s) => s.setRole);
  // s("Manager");

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
      bg="primary.50"
      borderColor="rgba(255, 255, 255, 0.1)"
      backdropFilter="blur(2em)"
    >
      <Flex gap={4}>
        <SmallButton
          title="Dashboard"
          icon={TbLayoutBoard}
          active={!location}
          route={role === "Admin" ? "/admin" : "/manager"}
          admin={role === "Admin"}
        />

        <SmallButton
          title="Calender"
          icon={TbCalendar}
          active={location === "calendar"}
          route={role === "Admin" ? "/admin/calendar" : "/manager/calendar"}
          admin={role === "Admin"}
        />
        {/* {role === "Admin" && ( */}
        <>
          <SmallButton
            title="Property"
            icon={TbBuilding}
            active={location === "properties"}
            route="/admin/properties"
          />
          <SmallButton
            title="Manager"
            icon={BsPersonCircle}
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
