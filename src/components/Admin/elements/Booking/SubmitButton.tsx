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
import React from "react";
import { Navigate } from "react-router-dom";

const SubmitButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const unassignedGuests = useBookingRoomStore((s) => s.unassignedGuests);
  const { mutate, isPending, isSuccess } = useCustomerBooking();
  const cancelRef = React.useRef(null);

  if (isSuccess) <Navigate to="/booking/7" />;
  return (
    <>
      <Button
        isDisabled={unassignedGuests.length > 0}
        colorScheme="primary"
        onClick={onOpen}
      >
        Submit
      </Button>
      <AlertDialog
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
              Are you sure you want to confirm the booking?
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
