import { Button, Flex, HStack, VStack } from "@chakra-ui/react";
import Title from "../../elements/Title";
import { useState } from "react";
import LabelInput from "../../elements/LabelInput";
import { RxAvatar } from "react-icons/rx";
import { BiKey } from "react-icons/bi";

const ManagerAccountPage = () => {
  const [edit, toggleEdit] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Flex gap={8} flexDir="column">
      <Title
        heading="Account"
        subtitle="View & edit your details here!"
        size="3xl"
        align="left"
      />
      <Flex p={4} bg="#f4f4f4" borderRadius={20} gap={8} flexDir="column">
        <VStack gap={4}>
          <LabelInput
            label="Username"
            icon={RxAvatar}
            value={username}
            onChange={setUsername}
          />
          <LabelInput
            label="Password"
            icon={BiKey}
            value={password}
            onChange={setPassword}
          />
        </VStack>
        <HStack align="center" justify="center">
          {edit ? (
            <>
              <Button onClick={() => toggleEdit(!edit)}> cancel </Button>
              <Button colorScheme="primary" onClick={() => toggleEdit(!edit)}>
                Submit
              </Button>
            </>
          ) : (
            <Button colorScheme="primary" onClick={() => toggleEdit(!edit)}>
              Edit
            </Button>
          )}
        </HStack>
      </Flex>
    </Flex>
  );
};

export default ManagerAccountPage;
