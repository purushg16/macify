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
import { Link } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";

const RegisterPage = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <VStack my={4} mb={8}>
        <InputGroup>
          <Input
            placeholder="Username"
            bg="gray.50"
            mb={4}
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
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

      <Title heading="Hey, There!" subtitle="Register yourself here" />

      <Button
        colorScheme="primary"
        my={4}
        px={8}
        isDisabled={!username || !password}
      >
        Register
      </Button>

      <Text mb={4} mt={8} fontSize="sm" color="gray">
        Already an user,{" "}
        <Link
          to="/auth/login"
          style={{
            color: "rgb(82, 83, 235)",
            textDecoration: "underline",
          }}
        >
          Login
        </Link>{" "}
        here!
      </Text>
    </>
  );
};

export default RegisterPage;
