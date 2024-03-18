import { Flex, Icon } from "@chakra-ui/react";
import { IoMdCloseCircle } from "react-icons/io";

const RoomGuestTag = () => {
  return (
    <Flex
      fontSize="sm"
      w="max-content"
      p={2}
      bg="#e4e2e2"
      borderRadius={10}
      align="center"
      gap={2}
    >
      Guest Name
      <Icon as={IoMdCloseCircle} onClick={() => {}} />
    </Flex>
  );
};

export default RoomGuestTag;
