import {
  Button,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import Title from "../Title";
import { MdPayment } from "react-icons/md";
import useApproveBookingRoomStore from "../../../store/approveBooking";
import { useApproveBooking } from "../../../hooks/useAdmin";

interface Props {
  onClose: () => void;
  isOpen: boolean;
  groupId: string;
  propertyId: string;
}

const ApproveBookingModal = ({
  onClose,
  isOpen,
  groupId,
  propertyId,
}: Props) => {
  const paid = useApproveBookingRoomStore((s) => s.paid);
  const setPaid = useApproveBookingRoomStore((s) => s.setPaid);
  const balance = useApproveBookingRoomStore((s) => s.balance);
  const setBalance = useApproveBookingRoomStore((s) => s.setBalance);

  const setGroupId = useApproveBookingRoomStore((s) => s.setGroupId);
  const setPropertyId = useApproveBookingRoomStore((s) => s.setPropertyId);

  const postData = useApproveBookingRoomStore((s) => s.bookingPostValue);
  const triggerData = useApproveBookingRoomStore((s) => s.setBookingPostValue);

  const { mutate, isPending } = useApproveBooking();
  const handleSubmit = () => {
    setGroupId(groupId);
    setPropertyId(propertyId);
    triggerData();
    if (postData) mutate(postData);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Title
              heading="Payment Details"
              subtitle="Enter booking's payment details"
              align="left"
            />
          </ModalHeader>
          <ModalBody>
            <InputGroup>
              <Input
                bg="gray.50"
                placeholder="Amount Paid"
                value={paid || ""}
                type="number"
                onChange={(e) => setPaid(parseInt(e.target.value))}
              />
              <InputRightElement>
                <Icon as={MdPayment} />
              </InputRightElement>
            </InputGroup>

            <InputGroup mt={4}>
              <Input
                bg="gray.50"
                placeholder="Balance Amount"
                value={balance || ""}
                type="number"
                onChange={(e) => setBalance(parseInt(e.target.value))}
              />
              <InputRightElement>
                <Icon as={MdPayment} />
              </InputRightElement>
            </InputGroup>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Back
            </Button>
            <Button
              colorScheme="primary"
              isLoading={isPending}
              isDisabled={!paid || !balance}
              onClick={handleSubmit}
            >
              Approve
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ApproveBookingModal;
