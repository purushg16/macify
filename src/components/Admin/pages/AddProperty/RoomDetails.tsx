import { Box, Button, HStack, Text } from "@chakra-ui/react";
import AddTitle from "../../elements/AddTitle";
import RoomCardGrid from "../../elements/AddProperty/RoomCardGrid";

interface RoomDetailsPageProps {
  backward?: () => void;
  forward?: () => void;
}

const RoomDetailsPage = ({ backward, forward }: RoomDetailsPageProps) => {
  return (
    <>
      <RoomCardGrid />

      <Box>
        <AddTitle
          heading="Room Details"
          subtitle="Enter individual room name & numbers "
        />
        <Text w="90%" textAlign="center" m="auto">
          You can assign each room its name and capacity by tapping on the room
          card
        </Text>
      </Box>

      <HStack>
        <Button onClick={backward} id="extra">
          Back
        </Button>
        <Button onClick={forward} id="extra" colorScheme="primary">
          Next
        </Button>
      </HStack>
    </>
  );
};

export default RoomDetailsPage;
