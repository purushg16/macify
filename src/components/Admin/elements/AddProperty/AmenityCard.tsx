import { Flex, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface AmenityCardProps {
  icon: IconType;
  title: string;
  selected?: boolean;
}

const AmenityCard = ({ title, icon, selected = false }: AmenityCardProps) => {
  return (
    <Flex
      flexDir="column"
      align="start"
      justify="end"
      cursor="pointer"
      textAlign="left"
      h={130}
      borderRadius={20}
      bg={selected ? "primary.300" : "none"}
      border="3px solid"
      borderColor={selected ? "primary.300" : "none"}
      transition="all 0.5s"
      p={4}
    >
      <Icon as={icon} boxSize={{ base: 45, md: 49 }} mb={2} />
      <Text fontSize="sm">
        {title}
        {/* {title.length > 15 ? title.substring(0, 13) + ".." : title} */}
      </Text>
    </Flex>
  );
};

export default AmenityCard;
