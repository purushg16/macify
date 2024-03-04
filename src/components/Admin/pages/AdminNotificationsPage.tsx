import { Box, SimpleGrid } from "@chakra-ui/react";
import Title from "../elements/Title";
import NotificationCard from "../elements/NotificationCard";
import bookingsToApprove from "../../data/bookingsToApprove";

const AdminNotificationsPage = () => {
  return (
    <Box>
      <Title
        heading="Notifications"
        subtitle="See all the bookings here"
        align="left"
      />

      <Box mt={4}>
        <SimpleGrid columns={1} spacing={4}>
          {bookingsToApprove.map((booking) => (
            <NotificationCard key={booking._id} booking={booking} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default AdminNotificationsPage;
