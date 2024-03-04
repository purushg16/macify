import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Show,
  Text,
} from "@chakra-ui/react";
import BookingDetails from "../../entities/booking";
import BookingCheckInTime from "./BookingCheckInTime";
import BookingGuestCount from "./BookingGuestCount";
import { useNavigate } from "react-router-dom";

const NotificationCard = ({ booking }: { booking: BookingDetails }) => {
  const navigate = useNavigate();

  return (
    <Flex
      bg="#f4f4f4"
      cursor="pointer"
      transition="all 0.7s"
      px={4}
      py={6}
      borderRadius={10}
      gap={4}
      pos="relative"
    >
      <Text pos="absolute" right={2} top={2} fontSize="xs" color="gray">
        25m
      </Text>
      <Flex gap={4} w="100%" alignItems="start">
        <Box p={4} bg="gray.100" borderRadius={10}>
          <Image src="https://img.icons8.com/pulsar-color/52/home.png" alt="" />
        </Box>

        <Flex flexDir="column" w="100%">
          <Box>
            <Heading fontSize="xl" textTransform="capitalize">
              {booking.property.propertyName}
            </Heading>

            <Flex gap={2} mt={2}>
              <BookingGuestCount
                count={booking.bookings.reduce(
                  (acc, b) => acc + b.guests.length,
                  0
                )}
              />
              <BookingCheckInTime checkInTime={booking.bookings[0].checkIn} />
            </Flex>
          </Box>
          <Show below="md">
            <HStack mt={4} w="100%">
              <Button
                colorScheme="primary"
                w="100%"
                onClick={() => navigate(`/admin/approveBooking/${booking._id}`)}
              >
                View
              </Button>
              <Button w="100%"> Reject </Button>
            </HStack>
          </Show>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NotificationCard;
