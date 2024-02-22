import { Box, Icon, Spacer, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface AmenityCardProps {
  icon: IconType;
  title: string;
}

const AmenityCard = ({ title, icon }: AmenityCardProps) => {
  return (
    <Box
      textAlign="left"
      h={130}
      borderRadius={20}
      bg="primary.300"
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
