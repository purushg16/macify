import { Box, SimpleGrid } from "@chakra-ui/react";
import { TbBuilding, TbCalendar, TbLayoutBoard } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { SmallButton } from "./Button";
import useRoleStore from "../../store/roleStore";

const AppBar = () => {
  const location = useLocation().pathname.split("/")[2];

  const role = useRoleStore((s) => s.role);
  const s = useRoleStore((s) => s.setRole);
  s("Manager");

  return (
    <Box
      zIndex={10}
      pos="fixed"
      px={2}
      py={4}
      w="95%"
      left={3}
      bottom={0}
      borderRadius={"25px 25px 0px 0px"}
      bg="secondary.50"
      backdropFilter="blur(2em)"
      boxShadow="rgb(130 140 229 / 43%) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;"
    >
      <SimpleGrid columns={role === "Admin" ? 4 : 2} spacingX={2}>
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
        {role === "Admin" && (
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
        )}
      </SimpleGrid>
    </Box>
  );
};

export default AppBar;
