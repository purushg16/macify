import { Box, Button, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import GroupBooking from "../../entities/GroupBooking";
import Title from "./Title";
import DateFormatter from "../../functions/dateFormatter";

const NotificationCard = ({ booking }: { booking: GroupBooking }) => {
  const navigate = useNavigate();

  return (
    <Flex
      gap={4}
      flexDir="column"
      bg="#f6f6f6"
      p={8}
      px={4}
      borderRadius={10}
      boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px;"
    >
      <Box>
        <Title
          heading={booking.property.propertyName}
          subtitle="25 mins ago"
          align="left"
        />
      </Box>
      <SimpleGrid columns={2} gap={4}>
        <Box p={4} bg="gray.50" borderRadius={10}>
          <Text color="gray" fontSize="sm">
            Check-In
          </Text>
          <Heading fontSize="xl">
            {DateFormatter(new Date(booking.bookings[0].checkIn))}
          </Heading>
        </Box>
        <Box p={4} bg="gray.50" borderRadius={10}>
          <Text color="gray" fontSize="sm">
            Guest
          </Text>
          <Heading fontSize="xl"> {booking.guestCount} </Heading>
        </Box>
      </SimpleGrid>
      <SimpleGrid columns={2} gap={4} mt={4}>
        <Button> Reject </Button>
        <Button
          colorScheme="primary"
          onClick={() => navigate(`/admin/approveBooking/${booking._id}`)}
        >
          Approve
        </Button>
      </SimpleGrid>
    </Flex>
  );
};

export default NotificationCard;
