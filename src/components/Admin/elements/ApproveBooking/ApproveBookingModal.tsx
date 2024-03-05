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

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

const ApproveBookingModal = ({ onClose, isOpen }: Props) => {
  const [isLoading, setLoading] = useState(false);
  const [amount, setAmount] = useState(0);
  const [balanceAmount, setBalanceAmount] = useState(0);
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
                value={amount || ""}
                type="number"
                onChange={(e) => setAmount(parseInt(e.target.value))}
              />
              <InputRightElement>
                <Icon as={MdPayment} />
              </InputRightElement>
            </InputGroup>

            <InputGroup mt={4}>
              <Input
                bg="gray.50"
                placeholder="Balance Amount"
                value={balanceAmount || ""}
                type="number"
                onChange={(e) => setBalanceAmount(parseInt(e.target.value))}
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
              isDisabled={!amount || !balanceAmount}
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
