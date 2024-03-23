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
import EditBedAssign from "../elements/EditBooking.tsx/EditBedAssign";
import Title from "../elements/Title";
import { useEditBooking, useGetSingleBooking } from "../../hooks/useAdmin";

interface Props {
  bookingId: string | undefined;
}

const EditBookingPage = ({ bookingId }: Props) => {
  const { data: booking } = useGetSingleBooking(bookingId!, !!bookingId);
  const {
    data: property,
    isLoading,
    isError,
  } = useGetSingleProperty(
    booking?.data[0].property._id,
    !!booking?.data[0].property._id
  );

  const { mutate, isPending } = useEditBooking(booking?.data[0]._id);
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
            checkIn={new Date(booking.data[0].checkIn)}
            checkOut={new Date(booking.data[0].checkOut)}
            groupId={booking.data[0]._id}
            editBooking
          />
        </Box>

        <Box>
          <Text mb={4}>Guest Details</Text>
          <HStack mb={2}>
            {property.rentWithin && (
              <RoomAssignBlock
                groupId={booking.data[0]._id}
                rooms={[]}
                bookingId={booking.data[0]._id}
                isLoading={isLoading}
                isError={isError}
                editBooking
              />
            )}
            {property.propertyType === "hostel" && (
              <EditBedAssign
                bookingId={booking.data[0]._id}
                propertyId={booking.data[0].property._id}
              />
            )}
          </HStack>
          <GuestGrid guests={booking.data[0].guests} />
        </Box>

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
