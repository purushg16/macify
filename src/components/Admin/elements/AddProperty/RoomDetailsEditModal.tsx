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
import Room from "../../../entities/room";

interface RoomDetailsEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  room: Room;
}

const RoomDetailsEditModal = ({
  isOpen,
  onClose,
  room,
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
                <Input bg="gray.100" defaultValue={room.roomName} />
              </Box>
              <Box>
                <Text> Number Of Beds: </Text>
                <Input bg="gray.100" defaultValue={room.capacity} />
              </Box>

              <Box>
                <Text> Capacity: </Text>
                <Input bg="gray.100" defaultValue={room.capacity} />
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
