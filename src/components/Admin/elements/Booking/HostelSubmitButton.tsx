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
import React, { useState } from "react";
import { useCustomerBooking } from "../../../hooks/useCustomer";
import { PropertyType } from "../../../store/AddProperty/addPropertyBasicStore";
import PaymentProofModal from "./PaymentProofModal";

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

  const [canSubmit, setCanSubmit] = useState(false);

  return (
    <>
      <Button colorScheme="primary" onClick={onOpen} isDisabled={isDisabled}>
        Submit
      </Button>

      <AlertDialog
        size="full"
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
                ml={3}
                onClick={() => mutate()}
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

export default HostelSubmitButton;
