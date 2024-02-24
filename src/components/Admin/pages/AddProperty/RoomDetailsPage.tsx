import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AnimateMove from "../../../motions/Move";
import CapacityApplyInput from "../../elements/AddProperty/CapacityApplyInput";
import RoomCardGrid from "../../elements/AddProperty/RoomCardGrid";
import SerializeInput from "../../elements/AddProperty/SerializeInput";
import AddTitle from "../../elements/AddTitle";

const RoomDetailsPage = () => {
  return (
    <>
      <AnimateMove noWidth delay={0.2}>
        <RoomCardGrid />
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <Box>
          <AddTitle
            heading="Room Details"
            subtitle="Enter individual room name & numbers "
          />
          <Text w="85%" textAlign="center" m="auto">
            You can assign each room its name and capacity by long pressing on
            the room card
          </Text>
        </Box>
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <VStack gap={4} w="100%">
          <SerializeInput />
          <CapacityApplyInput />
        </VStack>
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <HStack>
          <Link to="/admin/add/property/2">
            <Button id="extra"> Back </Button>
          </Link>
          <Link to="/admin/add/property/4">
            <Button id="extra" colorScheme="primary">
              Next
            </Button>
          </Link>
        </HStack>
      </AnimateMove>
    </>
  );
};

export default RoomDetailsPage;
