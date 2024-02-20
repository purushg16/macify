import { Box, VStack } from "@chakra-ui/react";
import { AdminButton } from "./AdminButton";

const AdminLinkStack = () => {
  return (
    <Box px={{ base: 4, md: 8, lg: 16 }}>
      <VStack align="start" gap={4}>
        <AdminButton text="Dashboard" link="/admin/dashboard" />
        <AdminButton text="Calendar" link="/admin/calendar" />
        <AdminButton text="Properties" link="/admin/properties" />
        <AdminButton text="Caretaker" link="/admin/caretaker" />
      </VStack>
    </Box>
  );
};

export default AdminLinkStack;
