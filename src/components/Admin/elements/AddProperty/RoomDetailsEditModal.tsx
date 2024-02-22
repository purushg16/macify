import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
  Flex,
  Input,
  Box,
  Text,
  HStack,
} from "@chakra-ui/react";

interface RoomDetailsEditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RoomDetailsEditModal = ({
  isOpen,
  onClose,
}: RoomDetailsEditModalProps) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent borderRadius={20} bg="gray.50" py={8}>
          <ModalBody display="flex" alignItems="center" justifyContent="center">
            <Flex flexDir="column" gap={8}>
              <Box>
                <Text> Room Name: </Text>
                <Input bg="gray.100" placeholder="Room 1" />
              </Box>
              <Box>
                <Text> Number Of Beds: </Text>
                <Input bg="gray.100" placeholder="Beds" />
              </Box>

              <Box>
                <Text> Capacity: </Text>
                <Input bg="gray.100" placeholder="Capacity" />
              </Box>

              <HStack textAlign="center" mt={6}>
                <Button mr={3} onClick={onClose} id="extra">
                  Cancel
                </Button>
                <Button
                  colorScheme="primary"
                  mr={3}
                  onClick={onClose}
                  id="extra"
                >
                  Done
                </Button>
              </HStack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RoomDetailsEditModal;
