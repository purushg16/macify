import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import useBookingModalStore from "../../../store/bookingDetailsModalStore";
import EditBookingPage from "../../pages/EditBookingPage";

const BookingDetailsModal = () => {
  const isOpen = useBookingModalStore((s) => s.isOpen);
  const toggleModal = useBookingModalStore((s) => s.toggleModal);
  const currentDetail = useBookingModalStore((s) => s.currentDetail);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={toggleModal}
        closeOnOverlayClick={false}
        isCentered
        size="full"
      >
        <ModalOverlay />
        <ModalContent pt={4}>
          <ModalBody>
            <EditBookingPage bookingId={currentDetail?._id} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BookingDetailsModal;
