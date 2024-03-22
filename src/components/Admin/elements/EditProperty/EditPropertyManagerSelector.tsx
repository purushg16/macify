import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  Icon,
  Text,
  VStack,
  Spinner,
  Box,
} from "@chakra-ui/react";
import { TiUserOutline } from "react-icons/ti";
import { useGetAllManagers } from "../../../hooks/useAdmin";
import { PropertyManager } from "../../../entities/property";

interface Props {
  manager: PropertyManager;
  onClick: (manager: PropertyManager) => void;
}

const EditPropertyManagerSelector = ({ manager, onClick }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: managers, isLoading } = useGetAllManagers();

  return (
    <>
      <Box>
        <Text mb={2} fontSize="sm" color="gray">
          Manager
        </Text>
        <Button
          onClick={onOpen}
          rightIcon={<Icon as={TiUserOutline} ml={2} />}
          justifyContent="space-between"
          w="max-content"
          bg="white"
          _hover={{ bg: "white" }}
        >
          {manager.name}
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Select Manager </ModalHeader>
          <ModalBody>
            {isLoading ? (
              <Spinner />
            ) : (
              <VStack gap={4}>
                {managers?.data.map((manager) => (
                  <Text
                    w="100%"
                    p={4}
                    borderRadius={10}
                    bg="#f4f4f4"
                    onClick={() => {
                      onClick({ _id: manager._id!, name: manager.name });
                      onClose();
                    }}
                  >
                    {manager.name}
                  </Text>
                ))}
              </VStack>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="gray" mr={2} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditPropertyManagerSelector;
