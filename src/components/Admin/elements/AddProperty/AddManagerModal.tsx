import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  VStack,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import Manager from "../../../entities/manager";

const AddManagerModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [newManager, editNewManager] = useState<Manager>({
    name: "",
    phone: parseInt(""),
    email: "",
    userName: "",
  });

  const addNewManager = () => {};

  return (
    <>
      <Button onClick={onOpen} colorScheme="primary" size="sm">
        Add Manager
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent borderRadius={20} bg="gray.50" py={8}>
          <ModalBody px={16}>
            <Text mb={4}>Add Manager</Text>
            <VStack gap={6}>
              <Input
                bg="gray.100"
                placeholder="Name"
                value={newManager.name}
                onChange={(e) =>
                  editNewManager({ ...newManager, name: e.target.value })
                }
              />
              <Input
                bg="gray.100"
                placeholder="Phone"
                type="number"
                value={newManager.phone}
                onChange={(e) =>
                  editNewManager({
                    ...newManager,
                    phone: parseInt(e.target.value || ""),
                  })
                }
              />
              <Input
                bg="gray.100"
                placeholder="Email"
                type="email"
                value={newManager.email}
                onChange={(e) =>
                  editNewManager({
                    ...newManager,
                    email: e.target.value,
                    userName: e.target.value,
                  })
                }
              />
            </VStack>
          </ModalBody>

          <ModalFooter justifyContent="center">
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="primary"
              onClick={addNewManager}
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
