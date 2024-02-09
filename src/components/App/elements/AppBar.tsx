import { Box, SimpleGrid } from "@chakra-ui/react";
import { TbBuilding, TbCalendar, TbLayoutBoard } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import { SmallButton } from "./AppButton";
import { BsPersonCircle } from "react-icons/bs";

const AppBar = () => {
  const location = useLocation();

  return (
    <Box
      pos="fixed"
      bottom={0}
      py={6}
      px={2}
      w="100%"
      bg="gray.100"
      borderRadius="20px 20px 0 0"
    >
      <SimpleGrid columns={4} spacingX={2}>
        <Link to="/app/dashboard">
          <SmallButton
            title="Dashboard"
            icon={TbLayoutBoard}
            active={location.pathname === "/app/dashboard"}
          />
        </Link>

        <Link to="/app/calender">
          <SmallButton
            title="Calender"
            icon={TbCalendar}
            active={location.pathname === "/app/calender"}
          />
        </Link>
        <Link to="/app/property">
          <SmallButton
            title="Property"
            icon={TbBuilding}
            active={location.pathname === "/app/property"}
          />
        </Link>
        <Link to="/app/caretaker">
          <SmallButton
            title="Caretaker"
            icon={BsPersonCircle}
            active={location.pathname === "/app/caretaker"}
          />
        </Link>
      </SimpleGrid>
    </Box>
  );
};

export default AppBar;
