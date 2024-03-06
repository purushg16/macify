import { useRef } from "react";
import { useRejectBooking } from "../../../hooks/useAdmin";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import Title from "../Title";

const RejectBookingButton = ({ groupId }: { groupId: string }) => {
  const { mutate, isPending } = useRejectBooking();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);

  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>
        Reject
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent borderRadius={10} py={4}>
          <AlertDialogHeader>
            <Title
              align="left"
              heading="Reject Booking?"
              subtitle="Are you sure you want to reject this booking?"
            />
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button onClick={onClose}>No</Button>
            <Button
              colorScheme="red"
              ml={3}
              onClick={() => mutate({ groupId: groupId })}
              isLoading={isPending}
            >
              Reject
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default RejectBookingButton;
