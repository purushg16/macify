import { Box, SimpleGrid } from "@chakra-ui/react";
import Title from "../elements/Title";
import NotificationCard from "../elements/NotificationCard";

const AdminNotificationsPage = () => {
  return (
    <Box>
      <Title
        heading="Notifications"
        subtitle="See all the bookings here"
        align="left"
      />

      <Box bg="#f5f5f5" p={4} py={6} borderRadius={10} mt={4}>
        <SimpleGrid columns={1} spacing={4}>
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default AdminNotificationsPage;
