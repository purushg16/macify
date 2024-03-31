import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

const BrandModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text
        fontSize="xs"
        textDecor="underline"
        onClick={onOpen}
        cursor="pointer"
      >
        What do we do?
      </Text>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Ourself, </ModalHeader>
          <ModalCloseButton />
          <ModalBody py={8}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae fuga
            voluptate illo magnam laudantium. Vitae dolore perferendis iure rem
            maiores quis, minus excepturi ad quae. Possimus iusto, nam sapiente
            facilis officiis repellat voluptatum, rerum saepe corrupti impedit
            quia, tempore facere ea totam dicta consequuntur excepturi.
            Assumenda dolore ad cum tempore ratione praesentium suscipit quidem
            delectus alias incidunt provident, fuga, cumque minima totam dolorem
            labore atque at est eum nesciunt ipsam iusto minus, quo consectetur?
            Nihil quidem excepturi voluptatibus recusandae aliquid, fugit
            dolorum. Perspiciatis rerum sint est nobis expedita numquam
            accusantium commodi, sunt, quo adipisci inventore nam provident
            natus sed sapiente!
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BrandModal;
