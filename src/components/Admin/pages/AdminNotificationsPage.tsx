import {
  Box,
  Button,
  Icon,
  SimpleGrid,
  VStack,
  Heading,
} from "@chakra-ui/react";
import Title from "../elements/Title";
import NotificationCard from "../elements/NotificationCard";
import { useGetBookingsToApprove } from "../../hooks/useAdmin";
import AnimateMove from "../../motions/Move";
import { Link } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import LoadingIndicator from "../elements/LoadingIndicator";

const AdminNotificationsPage = () => {
  const { data, isLoading } = useGetBookingsToApprove();

  return (
    <Box>
      <AnimateMove delay={0.2}>
        <VStack align="start" gap={4}>
          <Title
            size="3xl"
            heading="Notifications"
            subtitle="See all the bookings here"
            align="left"
          />
          <Link to="/admin/properties">
            <Button
              leftIcon={<Icon as={BsFillPlusCircleFill} />}
              colorScheme="primary"
              mb={8}
            >
              New Booking
            </Button>
          </Link>
        </VStack>
      </AnimateMove>

      {isLoading ? (
        <LoadingIndicator text="Notifications" />
      ) : (
        <Box mt={4}>
          {data && data?.data.length > 0 ? (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
              {data?.data.map((booking, index) => (
                <AnimateMove key={booking._id} delay={0.4 * (index + 1)}>
                  <NotificationCard booking={booking} />
                </AnimateMove>
              ))}
            </SimpleGrid>
          ) : (
            <Heading fontSize="lg"> No bookings here, boss! </Heading>
          )}
        </Box>
      )}
    </Box>
  );
};

export default AdminNotificationsPage;
