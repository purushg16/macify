import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import AnimateMove from "../../../motions/Move";
import CapacityApplyInput from "../../elements/AddProperty/CapacityApplyInput";
import RoomCardGrid from "../../elements/AddProperty/RoomCardGrid";
import SerializeInput from "../../elements/AddProperty/SerializeInput";
import NavigatorWrapper from "../../elements/NavigatorWrapper";
import Title from "../../elements/Title";
import { Navigate } from "react-router-dom";
import useAddPropertyStore from "../../../store/AddProperty/addPropertyBasicStore";

const RoomDetailsPage = () => {
  const rentWithin = useAddPropertyStore((s) => s.rentWithin);

  if (!rentWithin) return <Navigate to="/admin/properties/add/4" />;
  return (
    <>
      <AnimateMove noWidth delay={0.2}>
        <RoomCardGrid />
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <Box>
          <Title
            heading="Room Details"
            subtitle="Edit individual room name & numbers"
            size="lg"
            substitleSize="xs"
          />
          <Text
            w="85%"
            textAlign="center"
            m="auto"
            fontSize="xs"
            fontStyle="italic"
          >
            You can assign each room its name and capacity by tapping on the
            room card
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
          <NavigatorWrapper to="/admin/properties/add/2">
            <Button id="extra"> Back </Button>
          </NavigatorWrapper>
          <NavigatorWrapper to="/admin/properties/add/4">
            <Button id="extra" colorScheme="primary">
              Next
            </Button>
          </NavigatorWrapper>
        </HStack>
      </AnimateMove>
    </>
  );
};

export default RoomDetailsPage;
