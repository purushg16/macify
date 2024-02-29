import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import Title from "../../elements/Title";

const ForgotPasswordPage = () => {
  return (
    <Box
      textAlign="center"
      border="1px solid"
      mx={4}
      px={12}
      pt={8}
      borderRadius={20}
      borderColor="gray.50"
    >
      <Heading mb={8} fontSize="3xl">
        Macify
      </Heading>
      <InputGroup mb={8}>
        <Input placeholder="Username" bg="gray.50" />
        <InputRightElement top={0}>
          <Text>@</Text>
        </InputRightElement>
      </InputGroup>

      <Title
        heading="Reset Password"
        subtitle="Enter your email & reset password here"
      />

      <Button colorScheme="primary" mt={4} mb={8} px={8}>
        Confirm
      </Button>
    </Box>
  );
};

export default ForgotPasswordPage;
