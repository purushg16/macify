import { Box, SimpleGrid, Spinner } from "@chakra-ui/react";
import Title from "../elements/Title";
import NotificationCard from "../elements/NotificationCard";
import { useGetBookingsToApprove } from "../../hooks/useAdmin";

const AdminNotificationsPage = () => {
  const { data, isLoading } = useGetBookingsToApprove();

  return (
    <Box>
      <Title
        heading="Notifications"
        subtitle="See all the bookings here"
        align="left"
      />

      {isLoading ? (
        <Spinner />
      ) : (
        <Box mt={4}>
          <SimpleGrid columns={1} spacing={4}>
            {data?.data.map((booking) => (
              <NotificationCard key={booking._id} booking={booking} />
            ))}
          </SimpleGrid>
        </Box>
      )}
    </Box>
  );
};

export default AdminNotificationsPage;
