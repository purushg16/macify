import {
  Box,
  Button,
  Flex,
  GridItem,
  HStack,
  Heading,
  Icon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BsClockFill, BsPeopleFill } from "react-icons/bs";
import BookingDetails from "../../entities/booking";
import DateFormatter from "../../functions/dateFormatter";
import ApproveBookingPage from "../pages/ApproveBookingPage";

const NotificationCard = ({ booking }: { booking: BookingDetails }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      justify="space-between"
      p={4}
      bg="primary.50"
      borderRadius={10}
      align="center"
      cursor="pointer"
      _hover={{ bg: "primary.100" }}
      transition="all 0.7s"
      onClick={onOpen}
    >
      <Box>
        <Heading fontSize="xl" textTransform="capitalize">
          {" "}
          {booking.property.propertyName}{" "}
        </Heading>
        <HStack mt={2} gap={4}>
          <GridItem>
            <Text display="flex" gap={2} alignItems="center">
              <Icon as={BsPeopleFill} />{" "}
              {booking.bookings.reduce((acc, b) => acc + b.guests.length, 0)}
            </Text>
          </GridItem>
          <GridItem> | </GridItem>
          <GridItem>
            <Text display="flex" gap={2} alignItems="center">
              <Icon as={BsClockFill} />{" "}
              {DateFormatter(new Date(booking.bookings[0].checkIn))}
            </Text>
          </GridItem>
        </HStack>
      </Box>
      <Button> Decline </Button>
      <ApproveBookingPage onClose={onClose} isOpen={isOpen} booking={booking} />
    </Flex>
  );
};

export default NotificationCard;
