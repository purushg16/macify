import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  VStack,
} from "@chakra-ui/react";
import Guest from "../../../entities/Guest";
import LabelInput from "../LabelInput";
import { RxAvatar } from "react-icons/rx";
import Title from "../Title";
import DateFormatter from "../../../functions/dateFormatter";
import { FaGenderless } from "react-icons/fa";
import { MdOutlineBadge, MdOutlineCake } from "react-icons/md";
import { TiPhoneOutline } from "react-icons/ti";
import GuestIdProofImageAccordian from "./GuestIdProofImageAccordian";

interface Props {
  guest: Guest;
  isOpen: boolean;
  onClose: () => void;
}

const GuestDetailsModal = ({ guest, isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Title
            heading="Guest Details"
            subtitle="Preview guest"
            align="left"
            size="md"
          />
        </ModalHeader>
        <ModalBody>
          <VStack gap={4} bg="#f4f4f4" borderRadius={20} p={4}>
            <LabelInput
              value={guest.guestName}
              onChange={() => {}}
              isDisabled
              icon={RxAvatar}
              label="Guest Name"
            />
            <LabelInput
              value={guest.age}
              onChange={() => {}}
              isDisabled
              icon={FaGenderless}
              label="Age"
            />
            <LabelInput
              value={guest.phone}
              onChange={() => {}}
              isDisabled
              icon={TiPhoneOutline}
              label="Phone"
            />
            <LabelInput
              value={DateFormatter(guest.dob)}
              onChange={() => {}}
              isDisabled
              icon={MdOutlineCake}
              label="DOB"
            />
            <LabelInput
              value={guest.idProofType || ""}
              onChange={() => {}}
              isDisabled
              icon={MdOutlineBadge}
              label="Id Proof Type"
            />
            <GuestIdProofImageAccordian image={guest.idProof} />
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default GuestDetailsModal;
