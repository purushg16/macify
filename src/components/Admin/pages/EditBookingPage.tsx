import {
  Box,
  Button,
  Flex,
  HStack,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
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
import EditBedAssign from "../elements/EditBooking.tsx/EditBedAssign";
import EditBookingGuestWrapper from "../elements/EditBooking.tsx/EditBookingGuestWrapper";
import useBookingModalStore from "../../store/bookingDetailsModalStore";
import Title from "../elements/Title";
import { BsArrowLeftCircle } from "react-icons/bs";
import LoadingIndicator from "../elements/LoadingIndicator";
import { BiEdit } from "react-icons/bi";
import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";
import formatDateToYYYYMMDD from "../../functions/dateToString";

interface Props {
  bookingId?: string | undefined;
}

const EditBookingPage = ({ bookingId }: Props) => {
  const id = useParams().bookingId;
  const navigate = useNavigate();
  if (!bookingId) bookingId = id;

  const { data: booking } = useGetSingleBooking(bookingId!, !!bookingId);
  const selectedRoom = useEditBookingStore((s) => s.editBookingEntries)?.find(
    (b) => b.bookingId === bookingId
  )?.roomId;
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
    formatDateToYYYYMMDD(storeCheckIn!),
    formatDateToYYYYMMDD(storeCheckOut!),
    !!booking?.data[0].property._id &&
      booking.data[0].property.rentWithin &&
      booking?.data[0].property.propertyType !== "hostel"
  );

  const {
    data: hostelProperty,
    isLoading: isHPLoading,
    isError: isHPError,
  } = useGetAvailableBeds(
    booking?.data[0].property._id,
    formatDateToYYYYMMDD(storeCheckIn!),
    formatDateToYYYYMMDD(storeCheckOut!),
    !!booking?.data[0].property._id &&
      booking.data[0].property.rentWithin &&
      booking?.data[0].property.propertyType === "hostel"
  );

  const entry = useEditBookingStore((s) => s.editBookingEntries)?.find(
    (entry) => entry.bookingId === bookingId
  );

  const toggleModal = useBookingModalStore((s) => s.toggleModal);

  const { mutate, isPending } = useEditBooking(
    booking?.data[0]._id,
    !id ? () => toggleModal() : () => navigate("/admin")
  );

  const [edit, toggleEdit] = useState<boolean>(false);
  if (isLoading || !booking) return <LoadingIndicator text="Details" />;
  if (isError) return <Text> Error Getting the data </Text>;
  if (property)
    return (
      <Flex flexDir="column" gap={4} mb={8}>
        <Flex align="center">
          <Box>
            <Button
              leftIcon={<BsArrowLeftCircle />}
              size="xs"
              onClick={() => {
                !id ? toggleModal() : navigate("/admin");
              }}
              mb={2}
            >
              Back
            </Button>
            <Title
              heading={booking.data[0].property.propertyName}
              subtitle={booking.data[0].property.propertyType}
              size="xl"
              align="left"
            />
          </Box>
          <Spacer />
          <Button
            colorScheme={edit ? "red" : "primary"}
            size="sm"
            rightIcon={!edit ? <BiEdit /> : <IoCloseCircleOutline />}
            onClick={() => {
              edit && toggleEdit(false);
              !edit && toggleEdit(true);
            }}
          >
            {edit ? `Discard` : `Edit`}
          </Button>
        </Flex>
        <CheckingRangeSelector
          checkIn={new Date(booking.data[0].checkIn)}
          checkOut={new Date(booking.data[0].checkOut)}
          groupId={booking.data[0]._id}
          editBooking
          disabled={!edit}
        />
        <EditBookingGuestWrapper>
          {!edit && (
            <HStack mb={2}>
              {property.rentWithin && (
                <Button size="sm">
                  {
                    property.rooms.find((r) => r._id === booking.data[0].room)
                      ?.roomName
                  }
                </Button>
              )}
              {property.propertyType === "hostel" && (
                <Button size="sm">
                  Bed{" "}
                  {
                    property.rooms
                      .find((r) => r._id === booking.data[0].room)
                      ?.beds.find((b) => b._id === booking.data[0].bed)?.bedNo
                  }
                </Button>
              )}
            </HStack>
          )}
          {edit && (
            <HStack mb={2}>
              {property.rentWithin && (
                <RoomAssignBlock
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
              {selectedRoom &&
                hostelProperty &&
                property.propertyType === "hostel" && (
                  <EditBedAssign
                    data={hostelProperty!}
                    bookingId={booking.data[0]._id}
                    isLoading={isHPLoading}
                    isError={isHPError}
                  />
                )}
            </HStack>
          )}
          <GuestGrid guests={booking.data[0].guests} />
        </EditBookingGuestWrapper>
        {edit && (
          <VStack gap={4} mt={4}>
            <Title
              size="xl"
              heading="Approve Booking"
              subtitle="Click 'Proceed' to enter payment details"
            />
            <HStack>
              <Button
                colorScheme="red"
                rightIcon={<IoCloseCircleOutline />}
                onClick={() => toggleEdit(false)}
              >
                Discard
              </Button>

              <Button
                isDisabled={
                  !property.rentWithin
                    ? false
                    : property?.propertyType === "hostel"
                    ? !entry?.bedId || !entry.roomId
                      ? true
                      : false
                    : !entry?.roomId
                    ? true
                    : false
                }
                rightIcon={<CiCircleCheck />}
                colorScheme="primary"
                onClick={() => {
                  mutate();
                }}
                isLoading={isPending}
              >
                Save Changes
              </Button>
            </HStack>
          </VStack>
        )}
      </Flex>
    );
};

export default EditBookingPage;
