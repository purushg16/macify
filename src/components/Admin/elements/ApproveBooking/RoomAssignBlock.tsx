import { Box, Button, HStack, SimpleGrid } from "@chakra-ui/react";
import GuestCard from "./GuestCard";

const RoomAssignBlock = () => {
  return (
    <Box>
      <HStack mb={2}>
        <Button size="sm" colorScheme="primary">
          Select Room
        </Button>
        <Button size="sm" colorScheme="primary">
          Select Bed
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
        <GuestCard />
        <GuestCard />
      </SimpleGrid>
    </Box>
  );
};

export default RoomAssignBlock;
