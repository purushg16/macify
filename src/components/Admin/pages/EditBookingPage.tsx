import {
  Flex,
  Box,
  IconButton,
  Heading,
  Text,
  HStack,
  //   Button,
  Spinner,
} from "@chakra-ui/react";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
// import ApproveBookingModal from "../elements/ApproveBooking/ApproveBookingModal";
import BedAssignBlock from "../elements/ApproveBooking/BedAssignBlock";
import CheckingRangeSelector from "../elements/ApproveBooking/CheckingRangeSelector";
import GuestGrid from "../elements/ApproveBooking/GuestGrid";
// import RejectBookingButton from "../elements/ApproveBooking/RejectBookingButton";
import RoomAssignBlock from "../elements/ApproveBooking/RoomAssignBlock";
// import Title from "../elements/Title";
import { useGetSingleProperty } from "../../hooks/usePropertyServices";
import { TimelineBookingDetails } from "../../api/admin-client";

interface Props {
  booking: TimelineBookingDetails;
}

const EditBookingPage = ({ booking }: Props) => {
  const propertyId = booking.property;
  const {
    data: property,
    isLoading,
    isError,
  } = useGetSingleProperty(propertyId!, true);

  if (isLoading || !booking) return <Spinner />;
  if (isError) return <Text> Error Getting the data </Text>;

  if (property)
    return (
      <Flex flexDir="column" gap={8}>
        <Flex gap={2} alignItems="center">
          <Link to="/admin/notifications">
            <IconButton
              aria-label="back-btn"
              icon={<MdArrowBack />}
              size="sm"
            />
          </Link>
          <Heading fontSize="xl" textTransform="capitalize">
            {property.propertyName}
          </Heading>
        </Flex>

        <Box w="max-content">
          <Text mb={4}>Checking Time Details</Text>
          <CheckingRangeSelector
            checkIn={new Date(booking.checkIn)}
            checkOut={new Date(booking.checkOut)}
            groupId={booking._id}
            editBooking
          />
        </Box>

        {booking.guests.map((b) => (
          <Box key={b._id}>
            <Text mb={4}>Guest Details</Text>
            <HStack mb={2}>
              {property.rentWithin && (
                <RoomAssignBlock
                  groupId={booking._id}
                  property={property}
                  bookingId={b._id}
                  isLoading={isLoading}
                  isError={isError}
                  editBooking
                />
              )}
              {property.propertyType === "hostel" && (
                <BedAssignBlock bookingId={b._id} groupId={booking._id} />
              )}
            </HStack>
            <GuestGrid guests={booking.guests} />
          </Box>
        ))}

        {/* <Box mb={4}>
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
      </Box> */}
      </Flex>
    );
};

export default EditBookingPage;
