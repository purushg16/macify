import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import Manager from "../../../entities/manager";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Title from "../Title";
import LabelInput from "../LabelInput";
import { RxAvatar } from "react-icons/rx";
import { useAddManager } from "../../../hooks/useAdmin";

const AddManagerModal = ({ small }: { small?: boolean }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [newManager, editNewManager] = useState<Manager>({
    name: "",
    phone: parseInt(""),
    email: "",
    userName: "",
  });

  const { mutate, isPending } = useAddManager((status: "success" | "error") => {
    if (status === "success") {
      editNewManager({
        name: "",
        phone: parseInt(""),
        email: "",
        userName: "",
      });
      onClose();
    }
  });

  return (
    <>
      <Button
        size={small ? "sm" : "md"}
        w="max-content"
        my={small ? 0 : 4}
        leftIcon={<Icon as={BsFillPlusCircleFill} />}
        colorScheme="secondary"
        onClick={onOpen}
      >
        {small ? "Add" : "New Manager"}
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent borderRadius={20} bg="gray.50" py={8}>
          <ModalBody>
            <Title
              heading="Add New Manager"
              size="md"
              align="left"
              subtitle="Enter details & click 'Create'"
              substitleSize="xs"
            />
            <VStack gap={4} mt={4}>
              <LabelInput
                label="Name"
                value={newManager.name}
                onChange={(e) => editNewManager({ ...newManager, name: e })}
                icon={RxAvatar}
              />
              <LabelInput
                number
                label="Phone"
                value={newManager.phone}
                onChange={(e) =>
                  editNewManager({ ...newManager, phone: parseInt(e || "") })
                }
                icon={RxAvatar}
              />
              <LabelInput
                label="Email"
                value={newManager.email.toString()}
                onChange={(e) =>
                  editNewManager({ ...newManager, email: e, userName: e })
                }
                icon={RxAvatar}
              />
            </VStack>
          </ModalBody>

          <ModalFooter justifyContent="center">
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="primary"
              isLoading={isPending}
              onClick={() => mutate(newManager)}
              isDisabled={
                !newManager.name ||
                !newManager.email ||
                !newManager.userName ||
                !newManager.phone
              }
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddManagerModal;
