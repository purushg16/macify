import { Button, Icon } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  propertyId: string;
}

const BedAssignBlock = ({ propertyId }: Props) => {
  console.log(propertyId);
  return (
    <Button size="sm" colorScheme="primary">
      Select Bed
      <Icon as={BsChevronDown} ml={2} />
    </Button>
  );
};

export default BedAssignBlock;
