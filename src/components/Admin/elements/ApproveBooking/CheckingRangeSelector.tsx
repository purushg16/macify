import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { FaCalendar } from "react-icons/fa";
import RangePickerMenu from "./RangePickerMenu";
import DateFormatter from "../../../functions/dateFormatter";
import useApproveBookingStore from "../../../store/approveBookingStore";
import useEditBookingStore from "../../../store/editBookingStore";

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
    <Box p={4} bg="#f6f6f6" borderRadius={10}>
      <HStack gap={4} alignItems="center">
        <Icon as={FaCalendar} boxSize={6} />
        <HStack gap={4}>
          <Text px={4} py={2} bg="gray.50" borderRadius={10}>
            {editBooking
              ? DateFormatter(editStoreCheckIn! || checkIn)
              : DateFormatter(storeCheckIn! || checkIn)}
          </Text>
          <Text>-</Text>
          <Text px={4} py={2} bg="gray.50" borderRadius={10}>
            {editBooking
              ? DateFormatter(editStoreCheckOut! || checkOut)
              : DateFormatter(storeCheckOut! || checkOut)}
          </Text>
        </HStack>
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
    </Box>
  );
};

export default CheckingRangeSelector;
