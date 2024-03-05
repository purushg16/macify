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
import { useState } from "react";
import useApproveBookingStore from "../../../store/approveBooking";

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

const ApproveBookingModal = ({ onClose, isOpen }: Props) => {
  const [isLoading, setLoading] = useState(false);

  const paid = useApproveBookingStore((s) => s.paid);
  const setPaid = useApproveBookingStore((s) => s.setPaid);
  const balance = useApproveBookingStore((s) => s.balance);
  const setBalance = useApproveBookingStore((s) => s.setBalance);

  const handleSubmit = () => setLoading(true);

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
              isLoading={isLoading}
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
