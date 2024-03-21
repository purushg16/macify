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

const AvailableGuestModal = ({ roomId }: { roomId: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        pos="absolute"
        right={1}
        bottom={1}
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
            <AvailableGuestCard roomId={roomId} />
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
