import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { FaCalendar } from "react-icons/fa";
import RangePickerMenu from "./RangePickerMenu";
import DateFormatter from "../../../functions/dateFormatter";

interface Props {
  checkIn: string;
  checkOut: string;
}

const CheckingRangeSelector = ({ checkIn, checkOut }: Props) => {
  return (
    <Box p={4} bg="#f6f6f6" borderRadius={10}>
      <HStack gap={4} alignItems="center">
        <Icon as={FaCalendar} boxSize={6} />
        <HStack gap={4}>
          <Text px={4} py={2} bg="gray.50" borderRadius={10}>
            {DateFormatter(new Date(checkIn))}
          </Text>
          <Text>-</Text>
          <Text px={4} py={2} bg="gray.50" borderRadius={10}>
            {DateFormatter(new Date(checkOut))}
          </Text>
        </HStack>
        <RangePickerMenu />
      </HStack>
    </Box>
  );
};

export default CheckingRangeSelector;
