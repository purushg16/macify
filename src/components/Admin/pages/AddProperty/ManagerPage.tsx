import {
  Box,
  Button,
  Flex,
  Input,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import AddTitle from "../../elements/AddTitle";
import AddManagerModal from "../../elements/AddProperty/AddManagerModal";

const ManagerPage = () => {
  return (
    <>
      <Flex
        w="100%"
        bg="#f5f5f5"
        py={4}
        px={8}
        flexDir="column"
        gap={4}
        borderRadius={20}
        maxW={600}
      >
        <Flex w="100%">
          <Text> Select Manager </Text>
          <Spacer />
          <AddManagerModal />
        </Flex>

        <Input placeholder="Search" bg="gray.50" />

        <Box maxH={250} overflowY="auto" p={4} bg="white" borderRadius={20}>
          <VStack gap={4}>
            <Button colorScheme="gray" justifyContent="left" w="100%">
              Manager 1
            </Button>
            <Button colorScheme="gray" justifyContent="left" w="100%">
              Manager 1
            </Button>
            <Button colorScheme="gray" justifyContent="left" w="100%">
              Manager 1
            </Button>
            <Button colorScheme="gray" justifyContent="left" w="100%">
              Manager 1
            </Button>
            <Button colorScheme="gray" justifyContent="left" w="100%">
              Manager 1
            </Button>
            <Button colorScheme="gray" justifyContent="left" w="100%">
              Manager 1
            </Button>
          </VStack>
        </Box>
      </Flex>

      <AddTitle
        heading="Assign Manager"
        subtitle="Assign manager for this property or create a new one"
      />
    </>
  );
};

export default ManagerPage;
