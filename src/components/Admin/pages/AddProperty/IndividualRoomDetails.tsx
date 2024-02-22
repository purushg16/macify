import { Box, Text } from "@chakra-ui/react";
import RoomCardGrid from "../../elements/AddProperty/RoomCardGrid";
import AddTitle from "../../elements/AddTitle";

const IndividualRoomDetails = () => {
  return (
    <>
      <RoomCardGrid />

      <Box>
        <AddTitle
          heading="Individual Room Details"
          subtitle="Enter individual room name & numbers "
        />

        <Text w="85%" textAlign="center" m="auto">
          You can assign each room its name and capacity by tapping on the room
          card
        </Text>
      </Box>
    </>
  );
};

export default IndividualRoomDetails;
