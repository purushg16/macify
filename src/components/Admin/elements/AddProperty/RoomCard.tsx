import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { BsPeopleFill } from "react-icons/bs";

const RoomCard = () => {
  return (
    <Box
      p={2}
      pb={0}
      border="5px solid"
      borderColor="gray.100"
      borderBottom="none"
      borderRadius="20px 20px 0px 0px"
    >
      <Box
        borderRadius="10px 10px 0px 0px"
        w={160}
        h={130}
        bg="primary.100"
        pos="relative"
        display="flex"
        justifyContent="end"
        alignItems="center"
      >
        <Text pos="absolute" top={1} left={3}>
          Room 1
        </Text>
        <HStack bg="white" borderRadius={99} px={2} mr={2}>
          <Text fontSize="lg"> 10 </Text>
          <Icon as={BsPeopleFill} boxSize={3} />
        </HStack>
      </Box>
    </Box>
  );
};

export default RoomCard;
