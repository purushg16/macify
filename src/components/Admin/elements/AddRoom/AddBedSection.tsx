import { Box, Button, Heading, SimpleGrid } from "@chakra-ui/react";
import useAddBedsStore from "../../../store/addBedStore";
import BedTile from "./BedTile";
import { BiPlusCircle } from "react-icons/bi";

const AddBedSection = ({
  propertyId,
  roomId,
  count,
}: {
  propertyId: string;
  roomId: string | undefined;
  count: number;
}) => {
  const beds = useAddBedsStore((s) => s.storeBeds).find(
    (bed) => bed.propertyId === propertyId && bed.roomId === roomId
  );
  const addBed = useAddBedsStore((s) => s.addBeds);
  const removeBed = useAddBedsStore((s) => s.removeBed);

  return (
    <Box mt={6}>
      <Heading fontSize="sm" color="gray.200" mb={2}>
        Added Beds
      </Heading>
      <SimpleGrid columns={2} spacing={4}>
        {beds?.bedsData.map((bed) => (
          <BedTile
            bedNo={bed.bedNo}
            key={bed.id}
            color="green.200"
            callback={() => removeBed(propertyId, roomId!)}
          />
        ))}
        <Button
          onClick={() =>
            addBed(propertyId, roomId!, count + (beds?.bedsData.length || 0))
          }
          colorScheme="primary"
          leftIcon={<BiPlusCircle />}
          w="max-content"
        >
          Add
        </Button>
      </SimpleGrid>
    </Box>
  );
};

export default AddBedSection;
