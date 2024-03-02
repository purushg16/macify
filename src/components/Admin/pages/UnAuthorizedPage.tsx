import { Button, Flex, Heading, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const UnAuthorizedPage = () => {
  return (
    <Flex h="100vh" w="100%" justify="center" align="center">
      <VStack gap={8}>
        <Heading> You are unauthorized to use this page </Heading>
        <Link to="/manager">
          <Button> Let's Go Home </Button>
        </Link>
      </VStack>
    </Flex>
  );
};

export default UnAuthorizedPage;
