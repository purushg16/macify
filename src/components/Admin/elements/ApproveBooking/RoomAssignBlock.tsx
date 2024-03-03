import { Box, Button, HStack, Icon, SimpleGrid } from "@chakra-ui/react";
import GuestCard from "./GuestCard";
import { BookingGuest } from "../../../entities/booking";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  guests: BookingGuest[];
}

const RoomAssignBlock = ({ guests }: Props) => {
  return (
    <Box>
      <HStack mb={2}>
        <Button size="sm" colorScheme="primary">
          Select Room
          <Icon as={BsChevronDown} ml={2} />
        </Button>
        <Button size="sm" colorScheme="primary">
          Select Bed
          <Icon as={BsChevronDown} ml={2} />
        </Button>
      </HStack>

      <SimpleGrid
        columns={{ base: 2, md: 3, lg: 4 }}
        p={4}
        spacing={4}
        borderRadius={10}
        border="1px dashed"
        borderColor="gray.100"
      >
        {guests.map((guest, i) => (
          <GuestCard key={i} guest={guest} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default RoomAssignBlock;
