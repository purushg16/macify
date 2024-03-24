import { Flex, Icon } from "@chakra-ui/react";
import { IoCloseCircleOutline, IoBedOutline } from "react-icons/io5";

const BedTile = ({
  bedNo,
  color,
  callback,
}: {
  bedNo: number;
  color: string;
  callback: () => void;
}) => {
  return (
    <Flex
      bg={color}
      p={4}
      gap={2}
      borderRadius={20}
      flexDir="column"
      align="center"
      pos="relative"
    >
      <Icon
        pos="absolute"
        right={2}
        top={2}
        as={IoCloseCircleOutline}
        color="red.500"
        onClick={callback}
      />
      <Icon as={IoBedOutline} boxSize={8} />
      Bed {bedNo}
    </Flex>
  );
};

export default BedTile;
