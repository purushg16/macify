import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import useBookingModalStore from "../../../store/bookingDetailsModalStore";
import EditBookingPage from "../../pages/EditBookingPage";
import useEditBookingStore from "../../../store/editBookingStore";

const BookingDetailsModal = () => {
  const isOpen = useBookingModalStore((s) => s.isOpen);
  const toggleModal = useBookingModalStore((s) => s.toggleModal);
  const currentDetail = useBookingModalStore((s) => s.currentDetail);

  const appendEditBooking = useEditBookingStore(
    (s) => s.setEditBookingsEntries
  );

  const handleToggle = () => {
    appendEditBooking(undefined);
    toggleModal();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={handleToggle}
        closeOnOverlayClick={false}
        isCentered
        size="full"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EditBookingPage booking={currentDetail!} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleToggle}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BookingDetailsModal;
