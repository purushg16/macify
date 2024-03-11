import { Flex, Icon } from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";

const EditPropertyAmenityTag = ({
  amenity,
  selected = false,
}: {
  amenity: string;
  selected?: boolean;
}) => {
  return (
    <Flex
      p={2}
      borderRadius={10}
      textTransform="capitalize"
      fontSize="md"
      bg={selected ? "green.100" : "red.100"}
      border="1px solid"
      borderColor={selected ? "green.300" : "red.300"}
      gap={4}
      align="center"
    >
      {amenity}
      {selected && <Icon as={IoClose} />}
    </Flex>
  );
};

export default EditPropertyAmenityTag;
