import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import AddRoomDetailsModal from "./AddRoomDetailsModal";

const AddBedSection = ({
  propertyId,
}: {
  propertyId: string;
  roomId: string | undefined;
}) => {
  return (
    <Box mt={6}>
      <Heading fontSize="sm" color="gray.200" mb={2}>
        Added Rooms
      </Heading>
      <SimpleGrid columns={2} spacing={4}>
        <AddRoomDetailsModal propertyId={propertyId} />
      </SimpleGrid>
    </Box>
  );
};

export default AddBedSection;
