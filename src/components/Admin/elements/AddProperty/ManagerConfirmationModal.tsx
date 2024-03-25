import {
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";
import Manager from "../../../entities/manager";
import useAddPropertyStore from "../../../store/AddProperty/addPropertyBasicStore";

interface ManagerConfirmationModalProps {
  manager: Manager;
}

const ManagerConfirmationModal = ({
  manager,
}: ManagerConfirmationModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);

  const setManager = useAddPropertyStore((s) => s.setManager);

  const handleConfirm = () => {
    setManager(manager);
    onClose();
  };

  return (
    <>
      <Button
        bg="#f4f4f4"
        _hover={{ bg: "none" }}
        justifyContent="left"
        w="100%"
        onClick={onOpen}
      >
        {manager.name}
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {manager.name}
            </AlertDialogHeader>

            <AlertDialogBody>
              Click "Confirm", if you want to assign{" "}
              <strong>{manager.name}</strong> as the Manager for this property.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="primary" onClick={handleConfirm} ml={3}>
                Confirm
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default ManagerConfirmationModal;
