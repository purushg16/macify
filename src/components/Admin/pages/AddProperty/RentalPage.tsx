import {
  Input,
  VStack,
  Image,
  InputGroup,
  InputRightElement,
  Switch,
  Button,
  HStack,
} from "@chakra-ui/react";
import AddTitle from "../../elements/AddTitle";
import building from "../../../../assets/app/building.png";
import useAddPropertyStore from "../../../store/admin/addPropertyStore";
import AnimateMove from "../../../motions/Move";
import { Link } from "react-router-dom";

const RentalPage = () => {
  const numberOfRooms = useAddPropertyStore((s) => s.numberOfRooms);
  const setNumberOfRooms = useAddPropertyStore((s) => s.setNumberOfRooms);

  const rentWithin = useAddPropertyStore((s) => s.rentWithin);
  const setRentWithin = useAddPropertyStore((s) => s.setRentWithin);

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
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <HStack>
          <Link to="/admin/add/property">
            <Button id="extra"> Back </Button>
          </Link>
          <Link to="/admin/add/property/3">
            <Button id="extra" colorScheme="primary">
              Next
            </Button>
          </Link>
        </HStack>
      </AnimateMove>
    </>
  );
};

export default RentalPage;
