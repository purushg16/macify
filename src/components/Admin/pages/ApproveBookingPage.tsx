import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  IconButton,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { useGetSingleBookingToApprove } from "../../hooks/useAdmin";
import {
  useGetAvailableBeds,
  useGetAvailableRooms,
} from "../../hooks/usePropertyServices";
import ApproveBookingModal from "../elements/ApproveBooking/ApproveBookingModal";
import BedAssignBlock from "../elements/ApproveBooking/BedAssignBlock";
import CheckingRangeSelector from "../elements/ApproveBooking/CheckingRangeSelector";
import GuestGrid from "../elements/ApproveBooking/GuestGrid";
import RoomAssignBlock from "../elements/ApproveBooking/RoomAssignBlock";
import Title from "../elements/Title";
import useApproveBookingStore from "../../store/approveBookingStore";
import RejectBookingButton from "../elements/ApproveBooking/RejectBookingButton";

const ApproveBookingPage = () => {
  const singleBookingId = useParams().id;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDisabled, setDisabled] = useState(false);

  const { data: booking } = useGetSingleBookingToApprove(singleBookingId!);

  const assignedRooms = useApproveBookingStore((s) => s.singlBooking)?.find(
    (b) => b.groupId === booking?._id
  )?.bookings;
  const storeCheckIn = useApproveBookingStore((s) => s.singlBooking)?.find(
    (b) => b.groupId === booking?._id
  )?.checkIn;
  const storeCheckOut = useApproveBookingStore((s) => s.singlBooking)?.find(
    (b) => b.groupId === booking?._id
  )?.checkOut;

  const propertyId = booking?.property?._id;
  // const {
  //   data: property,
  //   isLoading,
  //   isError,
  // } = useGetSingleProperty(propertyId!, !!propertyId);

  const {
    data: nonHostelProperty,
    isLoading: isNHPLoading,
    isError: isNHPError,
  } = useGetAvailableRooms(
    propertyId!,
    storeCheckIn!,
    storeCheckOut!,
    !!propertyId && booking?.property.propertyType !== "hostel"
  );

  const {
    data: hostelProperty,
    isLoading: isHPLoading,
    isError: isHPError,
  } = useGetAvailableBeds(
    propertyId!,
    storeCheckIn!,
    storeCheckOut!,
    !!propertyId && booking?.property.propertyType === "hostel"
  );

  useEffect(() => {
    if (booking)
      booking?.bookings.map((b) => {
        const bookingId = b._id;
        const group = assignedRooms?.find(
          (room) => room.bookingId === bookingId
        );

        console.log(assignedRooms);
        console.log(group);

        // if the group was not found.
        if (!group) {
          setDisabled(true);
          return;
        }

        // if it's a hostel & room, bed not assigned
        if (booking.property?.propertyType === "hostel")
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
  }, [assignedRooms, booking, booking?.property?.propertyType]);

  if ((!nonHostelProperty && !hostelProperty) || !booking) return <Spinner />;
  return (
    <Flex flexDir="column" gap={8}>
      <Flex gap={2} alignItems="center">
        <Link to="/admin/notifications">
          <IconButton aria-label="back-btn" icon={<MdArrowBack />} size="sm" />
        </Link>
        <Heading fontSize="xl" textTransform="capitalize">
          {booking.property.propertyName}
        </Heading>
      </Flex>

      <Box w="max-content">
        <Text mb={4}>Checking Time Details</Text>
        <CheckingRangeSelector
          checkIn={new Date(booking.bookings[0].checkIn)}
          checkOut={new Date(booking.bookings[0].checkOut)}
          groupId={booking._id}
        />
      </Box>

      {booking.bookings.map((b) => (
        <Box key={b._id}>
          <Text mb={4}>Guest Details</Text>
          <HStack mb={2}>
            <RoomAssignBlock
              groupId={booking._id}
              rooms={
                booking.property.propertyType === "hostel"
                  ? hostelProperty!
                  : nonHostelProperty!
              }
              bookingId={b._id}
              isLoading={
                booking.property.propertyType === "hostel"
                  ? isHPLoading
                  : isNHPLoading
              }
              isError={
                booking.property.propertyType === "hostel"
                  ? isHPError
                  : isNHPError
              }
            />
            {booking.property.propertyType === "hostel" && (
              <BedAssignBlock bookingId={b._id} groupId={booking._id} />
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
          <RejectBookingButton groupId={booking._id} />
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
          />
        </HStack>
      </Box>
    </Flex>
  );
};

export default ApproveBookingPage;
