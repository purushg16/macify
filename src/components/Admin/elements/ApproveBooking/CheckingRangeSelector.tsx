import { Box, HStack, Icon, IconButton, Text } from "@chakra-ui/react";
import { BsPencilFill } from "react-icons/bs";
import { FaCalendar } from "react-icons/fa";

const CheckingRangeSelector = () => {
  return (
    <Box p={4} bg="#f6f6f6" borderRadius={10}>
      <HStack gap={4} alignItems="center">
        <Icon as={FaCalendar} boxSize={6} />
        <HStack gap={4}>
          <Text px={4} py={2} bg="gray.50" borderRadius={10}>
            Feb 29, 2024
          </Text>
          <Text>-</Text>
          <Text px={4} py={2} bg="gray.50" borderRadius={10}>
            Feb 29, 2024
          </Text>
        </HStack>
        <IconButton
          colorScheme="primary"
          //   bg="gray.50"
          //   _hover={{ bg: "gray.100" }}
          aria-label="Search database"
          icon={<BsPencilFill />}
        />
      </HStack>
    </Box>
  );
};

export default CheckingRangeSelector;
