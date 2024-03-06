import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { FaCalendar } from "react-icons/fa";
import RangePickerMenu from "./RangePickerMenu";
import DateFormatter from "../../../functions/dateFormatter";
import useApproveBookingRoomStore from "../../../store/approveBooking";

interface Props {
  checkIn: Date;
  checkOut: Date;
}

const CheckingRangeSelector = ({ checkIn, checkOut }: Props) => {
  const storeCheckIn = useApproveBookingRoomStore((s) => s.checkIn);
  const storeCheckOut = useApproveBookingRoomStore((s) => s.checkOut);
  const setCheckIn = useApproveBookingRoomStore((s) => s.setCheckIn);
  const setCheckOut = useApproveBookingRoomStore((s) => s.setCheckOut);

  if (storeCheckIn === undefined || storeCheckOut === undefined) {
    setCheckIn(checkIn);
    setCheckOut(checkOut);
  }

  return (
    <Box p={4} bg="#f6f6f6" borderRadius={10}>
      <HStack gap={4} alignItems="center">
        <Icon as={FaCalendar} boxSize={6} />
        <HStack gap={4}>
          <Text px={4} py={2} bg="gray.50" borderRadius={10}>
            {DateFormatter(storeCheckIn!)}
          </Text>
          <Text>-</Text>
          <Text px={4} py={2} bg="gray.50" borderRadius={10}>
            {DateFormatter(storeCheckOut!)}
          </Text>
        </HStack>
        <RangePickerMenu startDate={checkIn} endDate={checkOut} />
      </HStack>
    </Box>
  );
};

export default CheckingRangeSelector;
