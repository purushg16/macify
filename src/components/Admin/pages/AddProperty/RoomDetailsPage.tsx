import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Switch,
  Text,
  VStack,
} from "@chakra-ui/react";
import AddTitle from "../../elements/AddTitle";
import RoomCardGrid from "../../elements/AddProperty/RoomCardGrid";
import AnimateMove from "../../../motions/Move";
import { Link } from "react-router-dom";

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
          <Flex gap={2}>
            <Input placeholder="Starting Room Number" bg="gray.50" flex={1} />

            <Button w={130}>
              <Switch colorScheme="primary" mr={2} />
              Serialize
            </Button>
          </Flex>

          <Flex gap={2}>
            <Input placeholder="Number of beds" bg="gray.50" flex={1} />

            <Button w={130}>
              <Switch colorScheme="primary" mr={2} />
              Apply All
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
