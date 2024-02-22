import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Switch,
  Text,
  VStack,
} from "@chakra-ui/react";
import AddTitle from "../../elements/AddTitle";
import building from "../../../../assets/app/building.png";

const RoomDetailsPage = () => {
  return (
    <>
      <Image src={building} alt="" w={350} />
      <Box>
        <AddTitle
          heading="Room Details"
          subtitle="Enter individual room name & numbers "
        />
        <Text w="85%" textAlign="center" m="auto">
          If you have rooms with different serial of numbers and different
          capacities, press “Next”
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
