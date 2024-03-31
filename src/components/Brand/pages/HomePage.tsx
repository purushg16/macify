import {
  Heading,
  Text,
  VStack,
  Button,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { BsArrowRightCircle } from "react-icons/bs";
import AnimateMove from "../../motions/Move";
import land from "../../../assets/landing.png";
import BrandModal from "../elements/BrandModal";

const HomePage = () => {
  return (
    <VStack gap={8} w="100%">
      <Flex w="100%" align="center" mb={12}>
        <Heading fontSize="2xl" textAlign="left" alignSelf="start">
          Macify
        </Heading>
        <Spacer />
        <BrandModal />
      </Flex>
      <VStack>
        <AnimateMove delay={0.2}>
          <Box textAlign="center">
            <Text m={0} fontSize="sm" color="gray">
              with Macify,
            </Text>
            <Heading fontSize={{ base: "4xl", md: "4xl", lg: "6xl" }} m={0}>
              Unlock simple
            </Heading>
            <Heading
              fontSize={{ base: "4xl", md: "4xl", lg: "6xl" }}
              m={0}
              color="primary.500"
            >
              property management.
            </Heading>
          </Box>
        </AnimateMove>

        <AnimateMove delay={0.4}>
          <VStack gap={8} maxW={{ base: 350, md: 400, lg: 630 }}>
            <Text fontSize="xs" textAlign="center">
              Handle all your properties in single place, right at your palm!
              You can start managing right away!
            </Text>
            <Flex align="center" justify="center" gap={4}>
              <Button> Sign In </Button>
              <Button colorScheme="primary" rightIcon={<BsArrowRightCircle />}>
                Register
              </Button>
            </Flex>
          </VStack>
        </AnimateMove>
      </VStack>

      <AnimateMove delay={0.6}>
        <Box
          mt={8}
          id="land-img-container"
          pos="relative"
          bg="#2b443f"
          aspectRatio="16/9"
          w={{ base: 330, md: 500, lg: 600 }}
          bgImg={land}
          bgRepeat="no-repeat"
          bgPos="center 40px"
          borderRadius={20}
        />
      </AnimateMove>
    </VStack>
  );
};

export default HomePage;
