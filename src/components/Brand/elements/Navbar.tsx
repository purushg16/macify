import {
  Box,
  Flex,
  HStack,
  Heading,
  Show,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Btn from "./Button";

const Navbar = () => {
  return (
    <Box pos="relative">
      <Flex
        bg="gray.100"
        zIndex={2}
        alignItems="center"
        pos="fixed"
        px={{ base: 8, md: 16 }}
        py={4}
        w="100%"
        top={0}
      >
        <Heading fontSize="xl"> Macify </Heading>

        <Show above="lg">
          <Spacer />
          <HStack gap={8}>
            <Link to="/">Features</Link>
            <Text>·</Text>
            <Link to="/">Company</Link>
            <Text>·</Text>
            <Link to="/">Solution</Link>
          </HStack>
        </Show>

        <Spacer />
        <Show above="lg">
          <HStack gap={4}>
            <Btn text="Start" primary />
          </HStack>
        </Show>

        <Show below="lg">
          <Btn text="Menu" />
        </Show>
      </Flex>
    </Box>
  );
};

export default Navbar;
