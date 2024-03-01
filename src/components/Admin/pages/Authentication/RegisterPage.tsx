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
import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../../../hooks/useAuth";
import Title from "../../elements/Title";

const RegisterPage = () => {
  const [show, setShow] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const handleClick = () => setShow(!show);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFName] = useState("");
  const [lastName, setLName] = useState("");

  const navigate = useNavigate();
  const callback = () => setLoading(false);

  const { mutate, isSuccess, isError, error, variables } =
    useRegister(callback);

  const register = () => {
    mutate({ email, password, firstName, lastName });
    setLoading(true);
    if (isSuccess) {
      localStorage.setItem("emailToBeVerified", variables.email);
      navigate("/auth/verifyEmail");
    } else if (isError) console.log(error);
  };

  return (
    <>
      <VStack my={4} mb={8}>
        <Input
          placeholder="First Name*"
          bg="gray.50"
          mb={4}
          value={firstName || ""}
          onChange={(e) => setFName(e.target.value)}
        />

        <Input
          placeholder="Last Name*"
          bg="gray.50"
          mb={4}
          value={lastName || ""}
          onChange={(e) => setLName(e.target.value)}
        />

        <InputGroup>
          <Input
            placeholder="Mail*"
            bg="gray.50"
            mb={4}
            type="email"
            pr="4.5rem"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputRightElement top={0}>@</InputRightElement>
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
        onClick={register}
        isDisabled={!firstName || !lastName || !email || !password}
        isLoading={isLoading}
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
