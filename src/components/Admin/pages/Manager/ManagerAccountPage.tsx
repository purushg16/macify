import { Flex, HStack, VStack } from "@chakra-ui/react";
import Title from "../../elements/Title";
import { useState } from "react";
import LabelInput from "../../elements/LabelInput";
import { RxAvatar } from "react-icons/rx";
import { BiKey } from "react-icons/bi";
import ChangePasswordModal from "../../elements/manager/ChangePasswordModal";
import ChangeDetailsModal from "../../elements/manager/ChangeDetailsModal";

const ManagerAccountPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  return (
    <Flex gap={8} flexDir="column">
      <Title
        heading="Account"
        subtitle="View & edit your details here!"
        size="3xl"
        align="left"
      />
      <Flex borderRadius={20} gap={8} flexDir="column">
        <VStack
          gap={4}
          p={4}
          pb={6}
          bg="#f4f4f4"
          borderRadius={20}
          flexDir="column"
        >
          <LabelInput
            label="Username"
            icon={RxAvatar}
            value={username}
            onChange={setUsername}
            isDisabled
          />
          <LabelInput
            label="Phone"
            icon={BiKey}
            value={phone}
            onChange={setPhone}
            isDisabled
          />
          <LabelInput
            label="Password"
            icon={BiKey}
            value={password}
            onChange={setPassword}
            isDisabled
          />
        </VStack>
        <HStack align="center" justify="center">
          <ChangePasswordModal />
          <ChangeDetailsModal />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default ManagerAccountPage;
