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
import useApproveBookingStore from "../../store/approveBooking";
import { useEffect, useState } from "react";

const ApproveBookingPage = () => {
  const singleBookingId = useParams().id;
  console.log(singleBookingId);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDisabled, setDisabled] = useState(false);

  const assignedRooms = useApproveBookingStore((s) => s.bookings);
  const booking = bookingsToApprove[0];

  const {
    data: property,
    isLoading,
    isError,
  } = useGetSingleProperty(booking.property._id);

  useEffect(() => {
    booking.bookings.map((b) => {
      const bookingId = b._id;
      const group = assignedRooms?.find((room) => room.bookingId === bookingId);

      // if the group was not found.
      if (!group) {
        setDisabled(true);
        return;
      }

      // if it's a hostel & room, bed not assigned
      if (property?.propertyType === "hostel")
        if (!group.roomId || !group.bedId) {
          setDisabled(true);
          return;
        }

      // if it's not a hostel and room not assigned
      if (!group.roomId) {
        setDisabled(true);
        return;
      }

      setDisabled(false);
    });
  }, [assignedRooms, booking.bookings, property?.propertyType]);

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
          checkIn={new Date(booking.bookings[0].checkIn)}
          checkOut={new Date(booking.bookings[0].checkOut)}
        />
      </Box>

      {booking.bookings.map((b) => (
        <Box key={b._id}>
          <Text mb={4}>Guest Details</Text>
          <HStack mb={2}>
            <RoomAssignBlock
              property={property}
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
          <Button
            colorScheme="primary"
            onClick={onOpen}
            isDisabled={isDisabled}
          >
            Proceed
          </Button>
          <ApproveBookingModal
            onClose={onClose}
            isOpen={isOpen}
            groupId={booking._id}
            propertyId={booking.property._id}
          />
        </HStack>
      </Box>
    </Flex>
  );
};

export default ApproveBookingPage;
