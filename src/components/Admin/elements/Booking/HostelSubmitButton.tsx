import {
  useDisclosure,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import React from "react";
import { useCustomerBooking } from "../../../hooks/useCustomer";
import { PropertyType } from "../../../store/AddProperty/addPropertyBasicStore";

const HostelSubmitButton = ({
  isDisabled,
  propertyType,
}: {
  propertyType: PropertyType;
  isDisabled: boolean;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef(null);
  const { mutate, isPending } = useCustomerBooking(propertyType, false);

  return (
    <>
      <Button colorScheme="primary" onClick={onOpen} isDisabled={isDisabled}>
        Submit
      </Button>

      <AlertDialog
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
                ml={3}
                onClick={() => mutate()}
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

export default HostelSubmitButton;
