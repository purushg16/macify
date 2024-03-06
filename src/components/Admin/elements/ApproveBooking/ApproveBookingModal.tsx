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
import { useApproveBooking } from "../../../hooks/useAdmin";
import useApproveBookingStore from "../../../store/approveBookingStore";

interface Props {
  onClose: () => void;
  isOpen: boolean;
  groupId: string;
}

const ApproveBookingModal = ({ onClose, isOpen, groupId }: Props) => {
  const postValue = useApproveBookingStore((s) => s.singlBooking)?.find(
    (b) => b.groupId === groupId
  );

  const paid = postValue?.paid;
  const balance = postValue?.balance;
  const set = useApproveBookingStore((s) => s.setSingleBooking);

  const { mutate, isPending } = useApproveBooking();
  const handleSubmit = () => {
    if (postValue) mutate(postValue);
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
                onChange={(e) => set(groupId, "paid", parseInt(e.target.value))}
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
                onChange={(e) =>
                  set(groupId, "balance", parseInt(e.target.value))
                }
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
