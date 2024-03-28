import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdOutlineCall } from "react-icons/md";
import { useManagerChangePassword } from "../../../hooks/useManagerAuth";
import LabelInput from "../LabelInput";
import { RxAvatar } from "react-icons/rx";

const ChangeDetailsModal = () => {
  const [username, setUsername] = useState<string>("");
  const [phone, setPhone] = useState<number>(parseInt(""));
  const { mutate, isPending } = useManagerChangePassword(false);

  const submit = () => mutate({ password: username });

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} colorScheme="primary">
        {" "}
        Edit Details{" "}
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent borderRadius={20} pb={4}>
          <ModalHeader fontSize="md">Change Password</ModalHeader>
          <ModalBody>
            <VStack gap={4}>
              <LabelInput
                label="Username"
                value={username}
                onChange={setUsername}
                icon={RxAvatar}
              />
              <LabelInput
                number
                label="Phone"
                value={phone}
                onChange={(value) => setPhone(parseInt(value || ""))}
                icon={MdOutlineCall}
              />
            </VStack>

            <Box textAlign="right" mt={8}>
              <Button mr={2} onClick={onClose}>
                Close
              </Button>
              <Button
                colorScheme="primary"
                onClick={submit}
                isLoading={isPending}
                isDisabled={!username || !phone}
              >
                Submit
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChangeDetailsModal;
