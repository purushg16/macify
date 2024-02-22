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

const AddManagerModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
              <Input bg="gray.100" placeholder="Name" />
              <Input bg="gray.100" placeholder="Phone" type="number" />
              <Input bg="gray.100" placeholder="Email" type="email" />
            </VStack>
          </ModalBody>

          <ModalFooter justifyContent="center">
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="primary"> Create </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddManagerModal;
