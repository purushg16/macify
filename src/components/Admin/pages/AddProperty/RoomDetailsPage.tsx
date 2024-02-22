import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Switch,
  Text,
  VStack,
} from "@chakra-ui/react";
import AddTitle from "../../elements/AddTitle";
import RoomCardGrid from "../../elements/AddProperty/RoomCardGrid";

const RoomDetailsPage = () => {
  return (
    <>
      <RoomCardGrid />

      <Box>
        <AddTitle
          heading="Room Details"
          subtitle="Enter individual room name & numbers "
        />
        <Text w="85%" textAlign="center" m="auto">
          You can assign each room its name and capacity by tapping on the room
          card
        </Text>
      </Box>

      <VStack gap={4} w="100%">
        <Flex gap={2}>
          <Input placeholder="Starting Room Number" bg="gray.50" flex={1} />

          <Button w={130}>
            <Switch colorScheme="primary" mr={2} />
            Serialize
          </Button>
        </Flex>

        <Flex gap={2}>
          <Input placeholder="Capacity" bg="gray.50" flex={1} />

          <Button w={130}>
            <Switch colorScheme="primary" mr={2} />
            Apply All
          </Button>
        </Flex>

        <InputGroup size="md" bg="gray.50" borderRadius={99}>
          <InputRightElement width="3.5rem"></InputRightElement>
        </InputGroup>
      </VStack>
    </>
  );
};

export default RoomDetailsPage;
