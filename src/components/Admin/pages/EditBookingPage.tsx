import {
  Flex,
  Box,
  Heading,
  Text,
  HStack,
  Spinner,
  Button,
} from "@chakra-ui/react";
import CheckingRangeSelector from "../elements/ApproveBooking/CheckingRangeSelector";
import GuestGrid from "../elements/ApproveBooking/GuestGrid";
import RoomAssignBlock from "../elements/ApproveBooking/RoomAssignBlock";
import { useGetSingleProperty } from "../../hooks/usePropertyServices";
import { TimelineBookingDetails } from "../../api/admin-client";
import EditBedAssign from "../elements/EditBooking.tsx/EditBedAssign";
import Title from "../elements/Title";
import { useEditBooking } from "../../hooks/useAdmin";

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

  const { mutate, isPending } = useEditBooking(booking._id);

  if (isLoading || !booking) return <Spinner />;
  if (isError) return <Text> Error Getting the data </Text>;

  if (property)
    return (
      <Flex flexDir="column" gap={8}>
        <Flex gap={2} alignItems="center">
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
                  rooms={[]}
                  bookingId={b._id}
                  isLoading={isLoading}
                  isError={isError}
                  editBooking
                />
              )}
              {property.propertyType === "hostel" && (
                <EditBedAssign bookingId={b._id} propertyId={propertyId} />
              )}
            </HStack>
            <GuestGrid guests={booking.guests} />
          </Box>
        ))}

        <Box mb={4}>
          <Title
            heading="Approve Booking"
            subtitle="Click 'Proceed' to enter payment details"
          />

          <HStack justify="center" mt={4}>
            <Button
              colorScheme="primary"
              onClick={() => {
                mutate();
              }}
              isLoading={isPending}
            >
              Proceed
            </Button>
          </HStack>
        </Box>
      </Flex>
    );
};

export default EditBookingPage;
