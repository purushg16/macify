import { Box, Button, Flex, HStack, Heading } from "@chakra-ui/react";
import BookingCheckInTime from "./BookingCheckInTime";
import BookingGuestCount from "./BookingGuestCount";
import { useNavigate } from "react-router-dom";
import GroupBooking from "../../entities/GroupBooking";

const NotificationCard = ({ booking }: { booking: GroupBooking }) => {
  const navigate = useNavigate();

  return (
    <Flex
      minH={200}
      flexDir="column"
      gap={4}
      bg="#f4f4f4"
      pos="relative"
      borderRadius={10}
      boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px;"
    >
      <Box bg="primary.50" h={50} borderRadius="10px 10px 0px 0px" />

      <Box
        pos="absolute"
        bg="#f6f6f6"
        left={5}
        top={5}
        borderRadius={10}
        overflow="hidden"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;"
      >
        <BookingCheckInTime
          checkInTime={new Date(booking.bookings[0].checkIn)}
        />
      </Box>

      <Box flex={1} p={4} py={8}>
        <Box>
          <Heading fontSize="xl" textTransform="capitalize" mb={2}>
            {booking.property.propertyName}
          </Heading>
          <HStack justifyContent="space-between">
            <BookingGuestCount count={booking.guestCount} />
            <Button
              colorScheme="primary"
              onClick={() => navigate(`/admin/approveBooking/${booking._id}`)}
            >
              View
            </Button>
          </HStack>
        </Box>
      </Box>
    </Flex>

    // <Flex
    //   bg="#f4f4f4"
    //   cursor="pointer"
    //   transition="all 0.7s"
    //   px={4}
    //   py={6}
    //   borderRadius={10}
    //   gap={4}
    //   pos="relative"
    // >
    //   <Text pos="absolute" right={2} top={2} fontSize="xs" color="gray">
    //     25m
    //   </Text>
    //   <Flex gap={4} w="100%" alignItems="start">
    //     <Box p={4} bg="gray.100" borderRadius={10}>
    //       <Image src="https://img.icons8.com/pulsar-color/52/home.png" alt="" />
    //     </Box>

    //     <Flex flexDir="column" w="100%">
    //       <Box>
    //

    //         <Flex gap={2} mt={2}>
    //
    //         </Flex>
    //       </Box>
    //       <Show below="md">
    //         <HStack mt={4} w="100%">
    //           <Button
    //             colorScheme="primary"
    //             w="100%"
    //           >
    //             View
    //           </Button>
    //           <Button w="100%"> Reject </Button>
    //         </HStack>
    //       </Show>
    //     </Flex>
    //   </Flex>
    // </Flex>
  );
};

export default NotificationCard;
