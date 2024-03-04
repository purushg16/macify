import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import RoomAssignBlock from "../elements/ApproveBooking/RoomAssignBlock";
import Title from "../elements/Title";
import CheckingRangeSelector from "../elements/ApproveBooking/CheckingRangeSelector";
import BookingDetails from "../../entities/booking";
import GuestGrid from "../elements/ApproveBooking/GuestGrid";
import BedAssignBlock from "../elements/ApproveBooking/BedAssignBlock";

interface ApproveBooking {
  isOpen: boolean;
  onClose: () => void;
  booking: BookingDetails;
}

const ApproveBookingPage = ({ isOpen, onClose, booking }: ApproveBooking) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textTransform="capitalize">
          <Title
            align="left"
            heading={booking.property.propertyName}
            subtitle="Assign rooms for all guests"
          />
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody mt={4} pb={4}>
          <Flex flexDir="column" gap={8}>
            <Heading fontSize="xl"> Details </Heading>

            <Box>
              <Text mb={4}>Checking Time Details</Text>
              <CheckingRangeSelector
                checkIn={booking.bookings[0].checkIn}
                checkOut={booking.bookings[0].checkOut}
              />
            </Box>

            {booking.bookings.map((b) => (
              <Box key={b._id}>
                <Text mb={4}>Guest Details</Text>
                <HStack mb={2}>
                  <RoomAssignBlock
                    propertyId={booking.property._id}
                    bookingId={booking._id}
                    guestId={booking._id}
                  />
                  <BedAssignBlock propertyId={booking.property._id} />
                </HStack>
                <GuestGrid guests={b.guests} />
              </Box>
            ))}

            <Box mb={4}>
              <Title
                heading="Approve Booking"
                subtitle="Click ‘Approve’ to confirm booking"
              />

              <HStack justify="center" mt={4}>
                <Button> Cancel </Button>
                <Button colorScheme="primary"> Approve </Button>
              </HStack>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ApproveBookingPage;
