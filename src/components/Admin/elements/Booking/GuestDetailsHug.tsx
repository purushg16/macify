import { Box, Flex, HStack, Input, Text } from "@chakra-ui/react";
import GuestGenderSelector from "./GuestGenderSelector";

const GuestDetailsHug = () => {
  return (
    <Box textAlign="left" padding={2}>
      <Text size="sm">Guest 1</Text>
      <Flex
        flexDir="column"
        gap={4}
        p={4}
        borderRadius={10}
        border="1px dashed"
        borderColor="primary.200"
      >
        <Input placeholder="Guest Name" bg="#f4f4f4" />

        <HStack maxW="100%" gap={4}>
          <Input placeholder="Age" bg="#f4f4f4" w={100} />
          <GuestGenderSelector />
        </HStack>

        <HStack maxW="100%" gap={4}>
          <Input placeholder="DOB" bg="#f4f4f4" />
          <Input placeholder="Phone" bg="#f4f4f4" />
          {/* <Input placeholder="Gender" bg="#f4f4f4" /> */}
        </HStack>
      </Flex>
    </Box>
  );
};

export default GuestDetailsHug;
