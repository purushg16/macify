import {
  Button,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Switch,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import building from "../../../../assets/app/building.png";
import Room from "../../../entities/room";
import AnimateMove from "../../../motions/Move";
import useAddPropertyStore from "../../../store/AddProperty/addPropertyBasicStore";
import useAddPropertyRoomStore from "../../../store/AddProperty/addPropertyRoomStore";
import PropertyTypeSelector from "../../elements/AddProperty/PropertyTypeSelector";
import NavigatorWrapper from "../../elements/NavigatorWrapper";
import Title from "../../elements/Title";

const RentalPage = () => {
  const numberOfRooms = useAddPropertyRoomStore((s) => s.numberOfRooms);
  const setNumberOfRooms = useAddPropertyRoomStore((s) => s.setNumberOfRooms);
  const addPropertyRooms = useAddPropertyRoomStore((s) => s.addPropertyRooms);

  const rentWithin = useAddPropertyStore((s) => s.rentWithin);
  const setRentWithin = useAddPropertyStore((s) => s.setRentWithin);

  const propertyType = useAddPropertyStore((s) => s.propertyType);

  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const createRooms = () => {
    setLoading(true);
    const propertyRooms = [] as Room[];

    for (let index = 0; index < numberOfRooms!; index++)
      propertyRooms.push({
        roomId: uuidv4(),
        roomName: `Room${index + 1}`,
        guestCapacity: 4,
      });

    addPropertyRooms(propertyRooms);
    setLoading(false);
    navigate("/admin/properties/add/3");
  };

  return (
    <>
      <AnimateMove delay={0.2}>
        <Image src={building} alt="" w={350} />
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <Title
          heading="Rental Details"
          subtitle="Please select whether this property is rented inside"
        />
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <VStack gap={4}>
          <PropertyTypeSelector />

          <InputGroup size="md" bg="gray.50" borderRadius={99}>
            <Input defaultValue="Rental Within" pointerEvents="none" />
            <InputRightElement width="4.5rem">
              <Switch
                isChecked={rentWithin}
                isDisabled={propertyType !== "Villa"}
                colorScheme="primary"
                onChange={() => {
                  if (rentWithin) setNumberOfRooms(1);
                  setRentWithin(!rentWithin);
                }}
              />
            </InputRightElement>
          </InputGroup>

          <Input
            type="number"
            bg="gray.50"
            placeholder="Number of rooms available"
            isDisabled={!rentWithin}
            value={numberOfRooms || ""}
            onChange={(event) => setNumberOfRooms(parseInt(event.target.value))}
          />
        </VStack>
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <HStack>
          <NavigatorWrapper to="/admin/properties/add">
            <Button id="extra"> Back </Button>
          </NavigatorWrapper>

          <Button
            id="extra"
            colorScheme="primary"
            onClick={createRooms}
            isLoading={isLoading}
            isDisabled={
              propertyType
                ? rentWithin
                  ? numberOfRooms
                    ? false
                    : true
                  : false
                : true
            }
          >
            Next
          </Button>
        </HStack>
      </AnimateMove>
    </>
  );
};

export default RentalPage;
