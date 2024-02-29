import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import Title from "../../elements/Title";

const ForgotPasswordPage = () => {
  return (
    <>
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
    </>
  );
};

export default ForgotPasswordPage;
