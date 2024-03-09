import { Box, SimpleGrid, Spinner } from "@chakra-ui/react";
import Title from "../elements/Title";
import NotificationCard from "../elements/NotificationCard";
// import { useGetBookingsToApprove } from "../../hooks/useAdmin";
import AnimateMove from "../../motions/Move";
import data from "../../data/notifications";

const AdminNotificationsPage = () => {
  // const { data, isLoading } = useGetBookingsToApprove();
  const isLoading = false;

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
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} p={2}>
            {data.map((booking, index) => (
              <AnimateMove key={booking._id} delay={0.2 * (index + 1)}>
                <NotificationCard booking={booking} />
              </AnimateMove>
            ))}
          </SimpleGrid>
        </Box>
      )}
    </Box>
  );
};

export default AdminNotificationsPage;
