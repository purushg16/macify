import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { FaCalendar } from "react-icons/fa";
import RangePickerMenu from "./RangePickerMenu";
import DateFormatter from "../../../functions/dateFormatter";
import useApproveBookingStore from "../../../store/approveBookingStore";

interface Props {
  checkIn: Date;
  checkOut: Date;
  groupId: string;
}

const CheckingRangeSelector = ({ checkIn, checkOut, groupId }: Props) => {
  const storeCheckIn = useApproveBookingStore((s) => s.singlBooking)?.find(
    (b) => b.groupId === groupId!
  )?.checkIn;
  const storeCheckOut = useApproveBookingStore((s) => s.singlBooking)?.find(
    (b) => b.groupId === groupId!
  )?.checkOut;

  console.log(groupId);

  return (
    <Box p={4} bg="#f6f6f6" borderRadius={10}>
      <HStack gap={4} alignItems="center">
        <Icon as={FaCalendar} boxSize={6} />
        <HStack gap={4}>
          <Text px={4} py={2} bg="gray.50" borderRadius={10}>
            {DateFormatter(storeCheckIn! || checkIn)}
          </Text>
          <Text>-</Text>
          <Text px={4} py={2} bg="gray.50" borderRadius={10}>
            {DateFormatter(storeCheckOut! || checkOut)}
          </Text>
        </HStack>
        <RangePickerMenu
          startDate={checkIn}
          endDate={checkOut}
          groupId={groupId}
        />
      </HStack>
    </Box>
  );
};

export default CheckingRangeSelector;
