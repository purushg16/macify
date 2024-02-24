import { Box, Icon, Spacer, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface AmenityCardProps {
  icon: IconType;
  title: string;
  selected?: boolean;
}

const AmenityCard = ({ title, icon, selected = false }: AmenityCardProps) => {
  return (
    <Box
      cursor="pointer"
      textAlign="left"
      h={130}
      borderRadius={20}
      bg={selected ? "primary.300" : "none"}
      border="3px solid"
      borderColor={selected ? "primary.300" : "none"}
      transition="all 0.5s"
      p={4}
      display="flex"
      flexDir="column"
    >
      <Spacer />
      <Icon as={icon} boxSize={49} mb={2} />
      <Text>{title}</Text>
    </Box>
  );
};

export default AmenityCard;
