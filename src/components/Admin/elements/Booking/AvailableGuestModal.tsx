import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  IconButton,
} from "@chakra-ui/react";
import { IoMdAddCircleOutline } from "react-icons/io";
import AvailableGuestCard from "./AvailableGuestCard";

const AvailableGuestModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label=""
        icon={<IoMdAddCircleOutline />}
        w="max-content"
        colorScheme="primary"
        onClick={onOpen}
      />

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Available Guests </ModalHeader>
          <ModalBody>
            <AvailableGuestCard />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
            <Button onClick={onClose} ml={4} colorScheme="primary">
              Fine
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AvailableGuestModal;
