import {
  Button,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import Title from "../../elements/Title";
import { Link, useNavigate } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import { useLogin } from "../../../hooks/useAuth";

const LoginPage = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const callback = () => setLoading(false);
  const { mutate, isSuccess, isError, error } = useLogin(callback);

  const login = () => {
    setLoading(true);
    mutate({ email, password });
    if (isSuccess) {
      console.log("first");
      navigate("/admin");
    } else if (isError) {
      console.log(error);
    }
  };

  return (
    <>
      <VStack my={4}>
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

      <Text
        mb={8}
        textAlign="end"
        fontSize="sm"
        color="primary.500"
        textDecor="underline"
      >
        <Link to="/auth/forgotPassword"> Forgot Password? </Link>
      </Text>

      <Title heading="Welcome Back!" subtitle="Login using your credentials" />

      <Button
        colorScheme="primary"
        my={4}
        px={8}
        isDisabled={!email || !password}
        onClick={login}
        isLoading={isLoading}
      >
        Login
      </Button>

      <Text mb={4} mt={8} fontSize="sm" color="gray">
        If you are new here,{" "}
        <Link
          to="/auth/register"
          style={{
            color: "rgb(82, 83, 235)",
            textDecoration: "underline",
          }}
        >
          Register
        </Link>{" "}
        yourself!
      </Text>
    </>
  );
};

export default LoginPage;
