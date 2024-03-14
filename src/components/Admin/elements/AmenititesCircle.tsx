import { Box, Icon } from "@chakra-ui/react";
import { MdPets } from "react-icons/md";

const AmenititesCircle = () => {
  return (
    <Box
      borderRadius="100%"
      p={2}
      bg="primary.100"
      lineHeight="normal"
      pos="absolute"
      top={0}
      left={10}
    >
      <Icon as={MdPets} boxSize={4} />
    </Box>
  );
};

export default AmenititesCircle;
