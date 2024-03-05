import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { FaCalendar } from "react-icons/fa";
import RangePickerMenu from "./RangePickerMenu";
import DateFormatter from "../../../functions/dateFormatter";
import useApproveBookingStore from "../../../store/approveBooking";

interface Props {
  checkIn: Date;
  checkOut: Date;
}

const CheckingRangeSelector = ({ checkIn, checkOut }: Props) => {
  const storeCheckIn = useApproveBookingStore((s) => s.checkIn);
  const storeCheckOut = useApproveBookingStore((s) => s.checkOut);
  const setCheckIn = useApproveBookingStore((s) => s.setCheckIn);
  const setCheckOut = useApproveBookingStore((s) => s.setCheckOut);

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
