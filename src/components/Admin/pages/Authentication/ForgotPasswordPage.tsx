import {
  Button,
  GridItem,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import Title from "../../elements/Title";
import { useState } from "react";
import AnimateMove from "../../../motions/Move";

const ForgotPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  return (
    <>
      {!!password && !!cPassword && password !== cPassword && (
        <AnimateMove>
          <Text color="primary.500" fontSize="sm">
            Password does not match!
          </Text>
        </AnimateMove>
      )}
      <VStack mb={8}>
        <InputGroup>
          <Input
            placeholder="Password"
            bg="gray.50"
            type="password"
            value={password || ""}
            onChange={(e) => setPassword(e.target.value!)}
          />
          <InputRightElement top={0}>
            <Text>#</Text>
          </InputRightElement>
        </InputGroup>

        <InputGroup mt={4}>
          <Input
            placeholder="Confirm Password"
            bg="gray.50"
            value={cPassword || ""}
            onChange={(e) => setCPassword(e.target.value!)}
          />
          <InputRightElement top={0}>
            <Text>#</Text>
          </InputRightElement>
        </InputGroup>
      </VStack>

      <Title
        heading="Reset Password"
        subtitle="Enter your new password & click 'Reset'"
      />

      <HStack mt={8} mb={4}>
        <GridItem>
          <Button px={8}>Cancel</Button>
        </GridItem>
        <GridItem>
          <Button
            colorScheme="primary"
            px={8}
            isDisabled={!(!!password && !!cPassword && password === cPassword)}
          >
            Reset
          </Button>
        </GridItem>
      </HStack>
    </>
  );
};

export default ForgotPasswordPage;
