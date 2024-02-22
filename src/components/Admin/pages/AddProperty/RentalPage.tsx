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
import { useState } from "react";

const RentalPage = () => {
  const [rentInside, setRentInside] = useState(false);

  return (
    <>
      <Image src={building} alt="" w={350} />

      <AddTitle
        heading="Rental Details"
        subtitle="Please select whether this property is rented inside"
      />

      <VStack gap={4}>
        <InputGroup size="md" bg="gray.50" borderRadius={99}>
          <Input placeholder="Rental Within" />
          <InputRightElement width="4.5rem">
            <Switch
              colorScheme="primary"
              onChange={() => setRentInside(!rentInside)}
            />
          </InputRightElement>
        </InputGroup>

        <Input
          type="number"
          bg="gray.50"
          placeholder="Number of rooms available"
          isDisabled={!rentInside}
        />
      </VStack>
    </>
  );
};

export default RentalPage;
