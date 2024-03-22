import { Flex, Icon } from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const EditPropertyAmenityTag = ({
  amenity,
  selected = false,
  onClick,
}: {
  amenity: string;
  selected?: boolean;
  onClick: (amenity: string) => void;
}) => {
  return (
    <Flex
      fontSize="sm"
      w="max-content"
      p={2}
      borderRadius={10}
      align="center"
      textTransform="capitalize"
      bg={selected ? "green.100" : "red.100"}
      border="1px solid"
      borderColor={selected ? "green.300" : "red.300"}
      gap={4}
      onClick={() => onClick(amenity)}
    >
      {amenity}
      {selected && <Icon as={IoClose} onClick={() => onClick(amenity)} />}
      {!selected && <Icon as={BiPlus} onClick={() => onClick(amenity)} />}
    </Flex>
  );
};

export default EditPropertyAmenityTag;
