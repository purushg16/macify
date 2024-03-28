import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdOutlinePassword } from "react-icons/md";
import { useManagerChangePassword } from "../../../hooks/useManagerAuth";
import LabelInput from "../LabelInput";

const ChangePasswordModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newPassword, setNPassword] = useState("");
  const [confirmNewPassword, setCNPassword] = useState("");

  const reset = () => {
    setCNPassword("");
    setNPassword("");
    onClose();
  };

  const { mutate, isPending } = useManagerChangePassword(false, reset);
  const submit = () => mutate({ password: newPassword });

  return (
    <>
      <Button onClick={onOpen}> Change Password </Button>

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
                label="Password"
                value={newPassword}
                onChange={setNPassword}
                icon={MdOutlinePassword}
              />
              <LabelInput
                label="Confirm Password"
                value={confirmNewPassword}
                onChange={setCNPassword}
                icon={MdOutlinePassword}
              />
            </VStack>

            <Box textAlign="right" mt={8}>
              {newPassword &&
                confirmNewPassword &&
                newPassword !== confirmNewPassword && (
                  <Text color="red" textAlign="right" fontSize="xs" my={2}>
                    Passwords do not match
                  </Text>
                )}
              <Button mr={2} onClick={onClose}>
                Close
              </Button>
              <Button
                colorScheme="primary"
                onClick={submit}
                isLoading={isPending}
                isDisabled={
                  !newPassword ||
                  !confirmNewPassword ||
                  newPassword !== confirmNewPassword
                }
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

export default ChangePasswordModal;
