import {
  Button,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Title from "../../elements/Title";
import { useManagerLogin } from "../../../hooks/useManagerAuth";

const ManagerLoginPage = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, status } = useManagerLogin();

  const login = () => mutate({ userName: email, password });

  return (
    <>
      <VStack my={4} mb={8}>
        <InputGroup>
          <Input
            placeholder="Username"
            bg="gray.50"
            mb={4}
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputRightElement top={0}>
            <Text>@</Text>
          </InputRightElement>
        </InputGroup>

        <InputGroup>
          <Input
            placeholder="Password"
            bg="gray.50"
            type={show ? "text" : "password"}
            pr="4.5rem"
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement top={0}>
            <Button onClick={handleClick} bg="none" _hover={{ bg: "none" }}>
              <Icon as={show ? BsEyeSlash : BsEye} />
            </Button>
          </InputRightElement>
        </InputGroup>
      </VStack>

      {/* <Text
        mb={8}
        textAlign="end"
        fontSize="sm"
        color="primary.500"
        textDecor="underline"
      >
        <Link to="/auth/forgotPassword"> Forgot Password? </Link>
      </Text> */}

      <Title heading="Welcome Back!" subtitle="Login using your credentials" />

      <Button
        colorScheme="primary"
        my={4}
        px={8}
        isDisabled={!email || !password}
        onClick={login}
        isLoading={
          status === "idle"
            ? false
            : status === "success" || status === "error"
            ? false
            : true
        }
      >
        Login
      </Button>
    </>
  );
};

export default ManagerLoginPage;
