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
import useAddPropertyStore from "../../../store/AddProperty/addPropertyBasicStore";
import { useState } from "react";
import roomSerializer from "../../../generator/roomSerializer";
import useAddPropertyRoomStore from "../../../store/AddProperty/addPropertyRoomStore";

const RoomDetailsPage = () => {
  const [startingNumber, setStartingNumber] = useState<number>();
  const [capacity, setCapacity] = useState<number>();
  const [serialize, isSerialized] = useState<boolean>(false);
  const [applyAll, isAppliedAll] = useState<boolean>(false);

  const propertyType = useAddPropertyStore((s) => s.propertyType);
  const numberOfRooms = useAddPropertyRoomStore((s) => s.numberOfRooms);
  const addPropertyRooms = useAddPropertyRoomStore((s) => s.addPropertyRooms);
  const capacityApplyAll = useAddPropertyRoomStore((s) => s.capacityApplyAll);

  const doSerialize = () => {
    if (!serialize && !!startingNumber) {
      addPropertyRooms(roomSerializer(startingNumber, numberOfRooms!));
    } else addPropertyRooms(roomSerializer(1, numberOfRooms!));
    isSerialized(!serialize);
  };

  const doApplyAll = () => {
    if (!applyAll) capacityApplyAll(capacity!);
    isAppliedAll(!applyAll);
  };

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
            <Input
              type="number"
              placeholder="Starting Room Number"
              bg="gray.50"
              flex={1}
              value={startingNumber || ""}
              onChange={(e) => {
                isSerialized(false);
                setStartingNumber(parseInt(e.target.value || ""));
              }}
            />

            <Button w={130} onChange={doSerialize}>
              <Switch
                colorScheme="primary"
                mr={2}
                isDisabled={!startingNumber}
                isChecked={serialize}
                onChange={doSerialize}
              />
              Serialize
            </Button>
          </Flex>

          <Flex gap={2}>
            {propertyType === "Hostel" ? (
              <>
                <Input
                  placeholder="Number of beds"
                  bg="gray.50"
                  flex={1}
                  value={capacity || ""}
                  onChange={(e) => {
                    isAppliedAll(false);
                    setCapacity(parseInt(e.target.value));
                  }}
                />

                <Button w={130} onChange={doApplyAll}>
                  <Switch
                    colorScheme="primary"
                    mr={2}
                    isChecked={applyAll}
                    onChange={doApplyAll}
                    isDisabled={!capacity}
                  />
                  Apply All
                </Button>
              </>
            ) : (
              <>
                <Input
                  placeholder="Capacity"
                  bg="gray.50"
                  flex={1}
                  type="number"
                  value={capacity || ""}
                  onChange={(e) => setCapacity(parseInt(e.target.value))}
                />

                <Button w={130}>
                  <Switch colorScheme="primary" mr={2} />
                  Apply All
                </Button>
              </>
            )}
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
