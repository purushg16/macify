import {
  Button,
  Flex,
  HStack,
  Heading,
  IconButton,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { MdArrowBack } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { useEditBooking, useGetSingleBooking } from "../../hooks/useAdmin";
import {
  useGetAvailableBeds,
  useGetAvailableRooms,
  useGetSingleProperty,
} from "../../hooks/usePropertyServices";
import useEditBookingStore from "../../store/editBookingStore";
import CheckingRangeSelector from "../elements/ApproveBooking/CheckingRangeSelector";
import GuestGrid from "../elements/ApproveBooking/GuestGrid";
import RoomAssignBlock from "../elements/ApproveBooking/RoomAssignBlock";
import BookingFooter from "../elements/Booking/BookingFooter";
import EditBedAssign from "../elements/EditBooking.tsx/EditBedAssign";
import EditBookingGuestWrapper from "../elements/EditBooking.tsx/EditBookingGuestWrapper";

interface Props {
  bookingId?: string | undefined;
}

const EditBookingPage = ({ bookingId }: Props) => {
  const id = useParams().bookingId;
  if (!bookingId) bookingId = id;

  const { data: booking } = useGetSingleBooking(bookingId!, !!bookingId);
  const storeCheckIn = useEditBookingStore((s) => s.editBookingEntries)?.find(
    (b) => b.bookingId === bookingId
  )?.checkIn;
  const storeCheckOut = useEditBookingStore((s) => s.editBookingEntries)?.find(
    (b) => b.bookingId === bookingId
  )?.checkOut;

  const {
    data: property,
    isLoading,
    isError,
  } = useGetSingleProperty(
    booking?.data[0].property._id,
    !!booking?.data[0].property._id
  );

  const {
    data: nonHostelProperty,
    isLoading: isNHPLoading,
    isError: isNHPError,
  } = useGetAvailableRooms(
    booking?.data[0].property._id,
    storeCheckIn!,
    storeCheckOut!,
    !!booking?.data[0].property._id &&
      booking?.data[0].property.propertyType !== "hostel"
  );

  const {
    data: hostelProperty,
    isLoading: isHPLoading,
    isError: isHPError,
  } = useGetAvailableBeds(
    booking?.data[0].property._id,
    storeCheckIn!,
    storeCheckOut!,
    !!booking?.data[0].property._id &&
      booking?.data[0].property.propertyType === "hostel"
  );

  const entry = useEditBookingStore((s) => s.editBookingEntries)?.find(
    (entry) => entry.bookingId === bookingId
  );

  const { mutate, isPending } = useEditBooking(booking?.data[0]._id);
  if (isLoading || !booking) return <Spinner />;
  if (isError) return <Text> Error Getting the data </Text>;

  if (property)
    return (
      <Flex flexDir="column" gap={8} mb={8}>
        <Flex gap={2} alignItems="center">
          <Link to="/admin">
            <IconButton
              aria-label="back-btn"
              icon={<MdArrowBack />}
              size="sm"
            />
          </Link>
          <Heading fontSize="xl" textTransform="capitalize">
            {booking.data[0].property.propertyName}
          </Heading>
        </Flex>

        <CheckingRangeSelector
          checkIn={new Date(booking.data[0].checkIn)}
          checkOut={new Date(booking.data[0].checkOut)}
          groupId={booking.data[0]._id}
          editBooking
        />

        <EditBookingGuestWrapper>
          <HStack mb={2}>
            {property.rentWithin && (
              <RoomAssignBlock
                defaultRoom={property.rooms.find(
                  (r) => r._id === booking.data[0].room
                )}
                groupId={booking.data[0]._id}
                bookingId={booking.data[0]._id}
                rooms={
                  booking.data[0].property.propertyType === "hostel"
                    ? hostelProperty!
                    : nonHostelProperty!
                }
                isLoading={
                  booking.data[0].property.propertyType === "hostel"
                    ? isHPLoading
                    : isNHPLoading
                }
                isError={
                  booking.data[0].property.propertyType === "hostel"
                    ? isHPError
                    : isNHPError
                }
                editBooking
              />
            )}
            {property.propertyType === "hostel" && (
              <EditBedAssign
                data={hostelProperty!}
                bookingId={booking.data[0]._id}
                isLoading={isHPLoading}
                isError={isHPError}
                defualtBed={property.rooms
                  .find((r) => r._id === booking.data[0].room)
                  ?.beds.find((b) => b._id === booking.data[0].bed)}
              />
            )}
          </HStack>
          <GuestGrid guests={booking.data[0].guests} />
        </EditBookingGuestWrapper>

        <BookingFooter
          title="Approve Booking"
          subheading="Click 'Proceed' to enter payment details"
          buttons={
            <Button
              isDisabled={
                property?.propertyType === "hostel"
                  ? !entry?.bedId || !entry.roomId
                    ? true
                    : false
                  : !entry?.roomId
                  ? true
                  : false
              }
              colorScheme="primary"
              onClick={() => {
                mutate();
              }}
              isLoading={isPending}
            >
              Proceed
            </Button>
          }
        />
      </Flex>
    );
};

export default EditBookingPage;
