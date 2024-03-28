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
import {
  useManagerChangePassword,
  useManagerLogin,
} from "../../../hooks/useManagerAuth";

const ManagerLoginPage = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [newPassword, setNPassword] = useState("");
  const [confirmNewPassword, setCNPassword] = useState("");

  const { mutate, data, isSuccess, isPending } = useManagerLogin();
  const { mutate: changePassword, isPending: isReqPending } =
    useManagerChangePassword(true);

  const login = () => mutate({ userName: email, password });
  const submit = () => changePassword({ password: newPassword });

  return (
    <>
      {confirmNewPassword.length > 0 &&
        newPassword.length > 0 &&
        confirmNewPassword !== newPassword && (
          <Text color="red.300"> Password Doesn't Match </Text>
        )}
      <VStack my={4} mb={8}>
        {isSuccess && (
          <>
            <InputGroup>
              <Input
                placeholder="New Password"
                bg="gray.50"
                mb={4}
                value={newPassword || ""}
                onChange={(e) => setNPassword(e.target.value)}
              />
              <InputRightElement top={0}>
                <Text>#</Text>
              </InputRightElement>
            </InputGroup>
            <InputGroup>
              <Input
                placeholder="Confirm New Password"
                bg="gray.50"
                mb={4}
                value={confirmNewPassword || ""}
                onChange={(e) => setCNPassword(e.target.value)}
              />
              <InputRightElement top={0}>
                <Text>#</Text>
              </InputRightElement>
            </InputGroup>
          </>
        )}

        {!isSuccess && (
          <>
            <InputGroup>
              <Input
                placeholder="Username"
                bg="gray.50"
                mb={4}
                value={email || ""}
                onChange={(e) => setEmail(e.target.value)}
                isDisabled={isSuccess}
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
                isDisabled={isSuccess}
              />
              <InputRightElement top={0}>
                <Button onClick={handleClick} bg="none" _hover={{ bg: "none" }}>
                  <Icon as={show ? BsEyeSlash : BsEye} />
                </Button>
              </InputRightElement>
            </InputGroup>
          </>
        )}
      </VStack>

      {!isSuccess && (
        <>
          <Title
            heading="Welcome Back!"
            subtitle="Login using your credentials"
          />
          <Button
            colorScheme="primary"
            my={4}
            px={8}
            isDisabled={!email || !password}
            onClick={login}
            isLoading={isPending}
          >
            Login
          </Button>
        </>
      )}

      {data?.data.firstLogin && isSuccess && (
        <>
          <Title
            heading="Set Password"
            subtitle="Set a new password for yourself"
          />
          <Button
            colorScheme="primary"
            my={4}
            px={8}
            isDisabled={!newPassword || !confirmNewPassword}
            onClick={submit}
            isLoading={isReqPending}
          >
            Enter
          </Button>
        </>
      )}
    </>
  );
};

export default ManagerLoginPage;
