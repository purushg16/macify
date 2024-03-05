import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import RoomAssignBlock from "../elements/ApproveBooking/RoomAssignBlock";
import Title from "../elements/Title";
import CheckingRangeSelector from "../elements/ApproveBooking/CheckingRangeSelector";
import GuestGrid from "../elements/ApproveBooking/GuestGrid";
import BedAssignBlock from "../elements/ApproveBooking/BedAssignBlock";
import { useGetSingleProperty } from "../../hooks/usePropertyServices";
import bookingsToApprove from "../../data/bookingsToApprove";
import { Link, useParams } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import ApproveBookingModal from "../elements/ApproveBooking/ApproveBookingModal";

const ApproveBookingPage = () => {
  const singleBookingId = useParams().id;
  console.log(singleBookingId);

  const booking = bookingsToApprove[0];

  const {
    data: property,
    isLoading,
    isError,
  } = useGetSingleProperty(booking.property._id);

  const { isOpen, onOpen, onClose } = useDisclosure();

  if (!property) return <Spinner />;
  return (
    <Flex flexDir="column" gap={8}>
      <Box>
        <Link to="/admin/notifications">
          <Button leftIcon={<MdArrowBack />}> All Bookings </Button>
        </Link>
      </Box>
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
              property={property}
              propertyId={booking.property._id}
              bookingId={b._id}
              isLoading={isLoading}
              isError={isError}
            />
            {property.propertyType === "hostel" && (
              <BedAssignBlock bookingId={b._id} />
            )}
          </HStack>
          <GuestGrid guests={b.guests} />
        </Box>
      ))}

      <Box mb={4}>
        <Title
          heading="Approve Booking"
          subtitle="Click 'Proceed' to enter payment details"
        />

        <HStack justify="center" mt={4}>
          <Button> Cancel </Button>
          <Button colorScheme="primary" onClick={onOpen}>
            Proceed
          </Button>
          <ApproveBookingModal onClose={onClose} isOpen={isOpen} />
        </HStack>
      </Box>
    </Flex>
  );
};

export default ApproveBookingPage;
