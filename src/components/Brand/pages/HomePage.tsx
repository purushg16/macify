import {
  Flex,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
  Highlight,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import Btn from "../elements/Button";
import Navbar from "../elements/Navbar";
import { TbArrowRight } from "react-icons/tb";

const HomePage = () => {
  return (
    <Flex flexDir="column">
      <Navbar />
      <Flex
        minHeight="100vh"
        px={16}
        py={8}
        flexDir="column"
        gap={8}
        justifyContent="center"
        alignItems="center"
      >
        <VStack maxW={800} textAlign="center">
          <Text> with Macify, </Text>
          <Heading
            lineHeight="medium"
            fontSize={{ base: "4xl", md: "4xl", lg: "6xl" }}
          >
            Make sure your
            <br />
            <Highlight
              query="property management"
              styles={{
                color: "primary.500",
                whiteSpace: "nowrap",
              }}
            >
              property management
            </Highlight>
            <br />
            is simple.
          </Heading>
        </VStack>

        <HStack gap={4}>
          <InputGroup>
            <Input />
            <InputRightElement>
              <Btn text={<Icon as={TbArrowRight} />} primary />
            </InputRightElement>
          </InputGroup>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default HomePage;
