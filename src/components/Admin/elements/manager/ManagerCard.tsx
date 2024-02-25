import { Flex, Image, Spacer, Text } from "@chakra-ui/react";
import Manager from "../../../entities/manager";
import ManagerDrawer from "./ManagerDrawer";

interface ManagerCardProps {
  manager: Manager;
}

const ManagerCard = ({ manager }: ManagerCardProps) => {
  return (
    <Flex
      h="100%"
      flexDir="column"
      align="center"
      bg="primary.50"
      borderRadius={20}
    >
      <Image
        pt={2}
        src="https://img.icons8.com/ios-glyphs/120/businessman.png"
        alt="manager"
      />
      <Flex
        w="100%"
        alignItems="center"
        p={4}
        bg="primary.100"
        borderRadius={20}
      >
        <Text> {manager.name} </Text>
        <Spacer />
        <ManagerDrawer manager={manager} />
      </Flex>
    </Flex>
  );
};

export default ManagerCard;
