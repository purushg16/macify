import {
  Input,
  VStack,
  Image,
  InputGroup,
  InputRightElement,
  Switch,
} from "@chakra-ui/react";
import AddTitle from "../../elements/AddTitle";
import building from "../../../../assets/app/building.png";
import useAddPropertyStore from "../../../store/admin/addPropertyStore";

const RentalPage = () => {
  const numberOfRooms = useAddPropertyStore((s) => s.numberOfRooms);
  const setNumberOfRooms = useAddPropertyStore((s) => s.setNumberOfRooms);

  const rentWithin = useAddPropertyStore((s) => s.rentWithin);
  const setRentWithin = useAddPropertyStore((s) => s.setRentWithin);

  return (
    <>
      <Image src={building} alt="" w={350} />

      <AddTitle
        heading="Rental Details"
        subtitle="Please select whether this property is rented inside"
      />

      <VStack gap={4}>
        <InputGroup size="md" bg="gray.50" borderRadius={99}>
          <Input placeholder="Rental Within" pointerEvents="none" />
          <InputRightElement width="4.5rem">
            <Switch
              colorScheme="primary"
              onChange={() => setRentWithin(!rentWithin)}
            />
          </InputRightElement>
        </InputGroup>

        <Input
          type="number"
          bg="gray.50"
          placeholder="Number of rooms available"
          isDisabled={!rentWithin}
          value={numberOfRooms}
          onChange={(event) => setNumberOfRooms(parseInt(event.target.value))}
        />
      </VStack>
    </>
  );
};

export default RentalPage;
