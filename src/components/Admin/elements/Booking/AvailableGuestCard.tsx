import men from "../../../../assets/avatars/men.png";
import wmen from "../../../../assets/avatars/woman.png";
import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";

const AvailableGuestCard = () => {
  return (
    <VStack gap={4} w="100%">
      <Flex gap={4} p={2} bg="#f4f4f4" borderRadius={10} w="100%">
        <Image src={men} alt="" w={20} borderRadius={20} />
        <Box>
          <Text children="Guest 1" />
          <Text children="Age: 25" />
        </Box>
      </Flex>

      <Flex gap={4} p={2} bg="#f4f4f4" borderRadius={10} w="100%">
        <Image src={wmen} alt="" w={20} borderRadius={20} />
        <Box>
          <Text children="Guest 1" />
          <Text children="Age: 25" />
        </Box>
      </Flex>
    </VStack>
  );
};

export default AvailableGuestCard;
