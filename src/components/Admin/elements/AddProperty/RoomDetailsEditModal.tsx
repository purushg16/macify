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
import { useState } from "react";
import useAddPropertyRoomStore from "../../../store/AddProperty/addPropertyRoomStore";

interface RoomDetailsEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  room: Room;
  hostel?: boolean;
}

const RoomDetailsEditModal = ({
  isOpen,
  onClose,
  room,
  hostel = false,
}: RoomDetailsEditModalProps) => {
  const [newRoom, editNewRoom] = useState<Room>(room);

  const editRoom = useAddPropertyRoomStore((s) => s.editRoom);

  const submit = () => {
    editRoom(newRoom);
    onClose();
  };

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
                <Input
                  bg="gray.100"
                  value={newRoom.roomName}
                  onChange={(e) =>
                    editNewRoom({ ...newRoom, roomName: e.target.value })
                  }
                />
              </Box>
              <Box>
                <Text> {hostel ? "Number Of Beds:" : "Guest Capacity"} </Text>
                <Input
                  type="number"
                  bg="gray.100"
                  value={newRoom.guestCapacity}
                  onChange={(e) =>
                    editNewRoom({
                      ...newRoom,
                      guestCapacity: parseInt(e.target.value),
                    })
                  }
                />
              </Box>

              <HStack textAlign="center" mt={6}>
                <Button mr={3} onClick={onClose} id="extra">
                  Cancel
                </Button>
                <Button
                  colorScheme="primary"
                  mr={3}
                  onClick={submit}
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
