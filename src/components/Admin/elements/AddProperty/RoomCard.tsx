import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { BsPeopleFill } from "react-icons/bs";

const RoomCard = () => {
  return (
    <Box
      borderRadius="20px 20px 0px 0px"
      m="auto"
      w="100%"
      h={140}
      bg="primary.100"
      pos="relative"
      display="flex"
      justifyContent="end"
      alignItems="center"
      border="5px solid"
      borderColor="gray.100"
      borderBottom="none"
    >
      <Text pos="absolute" top={1} left={3} color="white">
        Room 1
      </Text>
      <HStack bg="white" borderRadius={99} px={2} mr={2}>
        <Text fontSize="lg"> 10 </Text>
        <Icon as={BsPeopleFill} boxSize={3} />
      </HStack>
    </Box>
  );
};

export default RoomCard;
