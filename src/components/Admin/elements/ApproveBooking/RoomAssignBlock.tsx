import { Button, Icon } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  propertyId: string;
}

const RoomAssignBlock = ({ propertyId }: Props) => {
  console.log(propertyId);

  return (
    <Button size="sm" colorScheme="primary">
      Select Room
      <Icon as={BsChevronDown} ml={2} />
    </Button>
  );
};

export default RoomAssignBlock;
