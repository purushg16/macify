import {
  Heading,
  Text,
  VStack,
  Highlight,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";

const HomePage = () => {
  return (
    <SimpleGrid
      h="100%"
      columns={{ base: 1, md: 2 }}
      spacing={4}
      px={{ base: 12, md: 24, lg: 32 }}
      alignItems="center"
    >
      <GridItem>
        <VStack align="start" gap={4}>
          <VStack align="start" gap={4}>
            <Text m={0}> with Macify, </Text>
            <Heading fontSize={{ base: "4xl", md: "4xl", lg: "6xl" }} m={0}>
              Unlock simple
              <br />
              <Highlight
                query="property"
                styles={{
                  color: "primary.500",
                  whiteSpace: "nowrap",
                }}
              >
                property
              </Highlight>
              <br />
              <Highlight
                query="management."
                styles={{
                  color: "primary.500",
                  whiteSpace: "nowrap",
                }}
              >
                management.
              </Highlight>
            </Heading>
            <Text>
              Handle all your properties in single place, right at your palm!
              You can start managing right away!
            </Text>
          </VStack>
        </VStack>
      </GridItem>
      <GridItem></GridItem>
    </SimpleGrid>
    // <Flex flexDir="column">
    //   <Flex
    //     minHeight="100vh"
    //     px={16}
    //     py={8}
    //     flexDir="column"
    //     gap={8}
    //     justifyContent="center"
    //     alignItems="center"
    //   >
    //     <VStack maxW={800}>

    //     </VStack>

    //     <HStack gap={4}>
    //       <InputGroup>
    //         <Input />
    //         <InputRightElement>
    //           <Btn text={<Icon as={TbArrowRight} />} primary />
    //         </InputRightElement>
    //       </InputGroup>
    //     </HStack>
    //   </Flex>
    // </Flex>
  );
};

export default HomePage;
