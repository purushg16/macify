import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import useBookingRoomStore from "../../../store/bookingRoomStore";
import { useCustomerBooking } from "../../../hooks/useCustomer";
import React, { useState } from "react";
import PaymentProofModal from "./PaymentProofModal";

const SubmitButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutate, isPending } = useCustomerBooking("apartment", true);
  const cancelRef = React.useRef(null);

  const unassignedGuests = useBookingRoomStore((s) => s.unassignedGuests);
  const rooms = useBookingRoomStore((s) => s.rooms);
  const [canSubmit, setCanSubmit] = useState(false);

  return (
    <>
      <Button
        isDisabled={
          unassignedGuests.length > 0 ||
          rooms?.some((room) => room.guests.length === 0)
        }
        colorScheme="primary"
        onClick={onOpen}
      >
        Submit
      </Button>
      <AlertDialog
        size="full"
        isCentered
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Confirm Booking
            </AlertDialogHeader>

            <AlertDialogBody>
              <PaymentProofModal callback={setCanSubmit} />
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="primary"
                onClick={() => mutate()}
                ml={3}
                isLoading={isPending}
                isDisabled={!canSubmit}
              >
                Submit Booking
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default SubmitButton;
