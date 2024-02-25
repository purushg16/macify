import { Box, VStack } from "@chakra-ui/react";
import { AdminButton } from "./AdminButton";
import { useLocation } from "react-router-dom";

const AdminLinkStack = () => {
  const location = useLocation().pathname.split("/")[2];

  return (
    <Box px={{ base: 4, md: 8, lg: 16 }}>
      <VStack align="start" gap={4}>
        <AdminButton text="Dashboard" link="/admin" isActive={!location} />
        <AdminButton
          text="Calendar"
          link="/admin/calendar"
          isActive={location === "calendar"}
        />
        <AdminButton
          text="Properties"
          link="/admin/properties"
          isActive={location === "properties"}
        />
        <AdminButton
          text="Caretaker"
          link="/admin/caretaker"
          isActive={location === "caretaker"}
        />
      </VStack>
    </Box>
  );
};

export default AdminLinkStack;
