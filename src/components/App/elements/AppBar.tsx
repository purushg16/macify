import { Box, SimpleGrid } from "@chakra-ui/react";
import { TbBuilding, TbCalendar, TbLayoutBoard } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import { SmallButton } from "./AppButton";
import { BsPersonCircle } from "react-icons/bs";

const AppBar = () => {
  const location = useLocation();

  return (
    <Box
      zIndex={10}
      pos="fixed"
      px={2}
      py={6}
      w="95%"
      left={3}
      bottom={0}
      borderRadius={"25px 25px 0px 0px"}
      bg="secondary.50"
      backdropFilter="blur(2em)"
      boxShadow="rgb(130 140 229 / 43%) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;"
    >
      <SimpleGrid columns={4} spacingX={2}>
        <SmallButton
          title="Dashboard"
          icon={TbLayoutBoard}
          active={location.pathname === "/app/dashboard"}
          route="/app/dashboard"
        />

        <SmallButton
          title="Calender"
          icon={TbCalendar}
          active={location.pathname === "/app/calender"}
          route="/app/calender"
        />
        <SmallButton
          title="Property"
          icon={TbBuilding}
          active={location.pathname === "/app/property"}
          route="/app/property"
        />
        <SmallButton
          title="Caretaker"
          icon={BsPersonCircle}
          active={location.pathname === "/app/caretaker"}
          route="/app/caretaker"
        />
      </SimpleGrid>
    </Box>
  );
};

export default AppBar;
