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
import { Link, useNavigate } from "react-router-dom";
import building from "../../../../assets/app/building.png";
import AnimateMove from "../../../motions/Move";
import useAddPropertyStore from "../../../store/AddProperty/addPropertyBasicStore";
import PropertyTypeSelector from "../../elements/AddProperty/PropertyTypeSelector";
import AddTitle from "../../elements/AddTitle";
import useAddPropertyRoomStore from "../../../store/AddProperty/addPropertyRoomStore";
import Room from "../../../entities/room";
import { useState } from "react";

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
      propertyRooms.push({ roomName: `room${index + 1}`, capacity: 4 });

    addPropertyRooms(propertyRooms);
    setLoading(false);
    navigate("/admin/add/property/3");
  };

  return (
    <>
      <AnimateMove delay={0.2}>
        <Image src={building} alt="" w={350} />
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <AddTitle
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
          <Link to="/admin/add/property">
            <Button id="extra"> Back </Button>
          </Link>

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
