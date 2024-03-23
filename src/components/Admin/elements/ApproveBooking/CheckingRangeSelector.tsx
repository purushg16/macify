import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import DateFormatter from "../../../functions/dateFormatter";
import useApproveBookingStore from "../../../store/approveBookingStore";
import useEditBookingStore from "../../../store/editBookingStore";
import RangePickerMenu from "./RangePickerMenu";

interface Props {
  checkIn: Date;
  checkOut: Date;
  groupId: string;
  editBooking?: boolean;
}

const CheckingRangeSelector = ({
  checkIn,
  checkOut,
  groupId,
  editBooking = false,
}: Props) => {
  const storeCheckIn = useApproveBookingStore((s) => s.singlBooking)?.find(
    (b) => b.groupId === groupId!
  )?.checkIn;
  const storeCheckOut = useApproveBookingStore((s) => s.singlBooking)?.find(
    (b) => b.groupId === groupId!
  )?.checkOut;

  const editStoreCheckIn = useEditBookingStore(
    (s) => s.editBookingEntries
  )?.find((b) => b.bookingId === groupId!)?.checkIn;

  const editStoreCheckOut = useEditBookingStore(
    (s) => s.editBookingEntries
  )?.find((b) => b.bookingId === groupId!)?.checkOut;

  return (
    <Box p={4} bg="#f6f6f6" borderRadius={20} pb={6}>
      <HStack
        gap={4}
        alignItems="center"
        justify="space-between"
        w="100%"
        pb={8}
      >
        <Text>Checking Time Details</Text>
        {editBooking ? (
          <RangePickerMenu
            startDate={editStoreCheckIn! || checkIn}
            endDate={editStoreCheckOut! || checkOut}
            groupId={groupId}
            editBooking
          />
        ) : (
          <RangePickerMenu
            startDate={storeCheckIn! || checkIn}
            endDate={storeCheckOut! || checkOut}
            groupId={groupId}
          />
        )}
      </HStack>

      <HStack gap={2}>
        <HStack p={2} bg="white" borderRadius={10}>
          <Icon
            as={BsArrowRightCircle}
            color="primary.500"
            bg="none"
            _hover={{ bg: "none" }}
          />
          <Text size="sm">
            {editBooking
              ? DateFormatter(editStoreCheckIn! || checkIn)
              : DateFormatter(storeCheckIn! || checkIn)}
          </Text>
        </HStack>

        <HStack p={2} bg="white" borderRadius={10}>
          <Icon as={BsArrowLeftCircle} color="red.500" />
          <Text size="sm">
            {editBooking
              ? DateFormatter(editStoreCheckOut! || checkOut)
              : DateFormatter(storeCheckOut! || checkOut)}
          </Text>
        </HStack>
      </HStack>
    </Box>
  );
};

export default CheckingRangeSelector;
