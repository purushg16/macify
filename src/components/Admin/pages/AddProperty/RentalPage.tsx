import { Button, Checkbox, HStack, Image, VStack } from "@chakra-ui/react";
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
import LabelInput from "../../elements/LabelInput";
import { BiGrid } from "react-icons/bi";

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
    const roomsCount = rentWithin ? numberOfRooms! : 1;

    for (let index = 0; index < roomsCount; index++)
      propertyRooms.push({
        roomId: uuidv4(),
        roomName: `Room ${index + 1}`,
        guestCapacity: 4,
      });

    addPropertyRooms(propertyRooms);
    setLoading(false);
    if (rentWithin) navigate("/admin/properties/add/3");
    else navigate("/admin/properties/add/4");
  };

  return (
    <>
      <AnimateMove delay={0.2}>
        <Image src={building} alt="" w={350} />
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <Title
          heading="Rental Details"
          subtitle="Enter property's rental details"
          size="lg"
          substitleSize="xs"
        />
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <VStack gap={4}>
          <PropertyTypeSelector />

          <VStack>
            <LabelInput
              icon={BiGrid}
              label="Number of rooms available"
              value={numberOfRooms || ""}
              onChange={(value) => setNumberOfRooms(parseInt(value))}
            />
            <Checkbox
              size="sm"
              isChecked={rentWithin}
              colorScheme="primary"
              onChange={() => setRentWithin(!rentWithin)}
            >
              Is each room rented separately?
            </Checkbox>
          </VStack>
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
              !propertyType
              // ? rentWithin
              //   ? numberOfRooms
              //     ? false
              //     : true
              //   : false
              // : true
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
