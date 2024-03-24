import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import { BiPlusCircle } from "react-icons/bi";
import useAddRoomsStore, { AddRoomData } from "../../../store/addRoomStore";
import { useState } from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineGroup } from "react-icons/md";

const AddRoomDetailsModal = ({ propertyId }: { propertyId: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const addRoom = useAddRoomsStore((s) => s.addRoom);

  const [roomData, setRoomData] = useState<AddRoomData>({
    id: "",
    roomName: "",
    guestCapacity: parseInt(""),
  });

  return (
    <>
      <Button
        onClick={() => onOpen()}
        colorScheme="primary"
        leftIcon={<BiPlusCircle />}
        w="max-content"
      >
        Add
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent borderRadius={20}>
          <ModalHeader>Add Room</ModalHeader>
          <ModalBody>
            <VStack gap={4}>
              <FormControl>
                <FormLabel> Room Name </FormLabel>
                <InputGroup>
                  <Input
                    autoComplete="off"
                    bg="gray.50"
                    placeholder="Room Name"
                    value={roomData.roomName}
                    onChange={(e) =>
                      setRoomData({ ...roomData, roomName: e.target.value })
                    }
                  />
                  <InputRightElement>
                    <Icon as={MdDriveFileRenameOutline} />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel> Guest Capacity </FormLabel>
                <InputGroup>
                  <Input
                    autoComplete="off"
                    type="number"
                    bg="gray.50"
                    placeholder="Guest Capacity"
                    value={roomData.guestCapacity}
                    onChange={(e) =>
                      setRoomData({
                        ...roomData,
                        guestCapacity: parseInt(e.target.value),
                      })
                    }
                  />
                  <InputRightElement>
                    <Icon as={MdOutlineGroup} />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>

            <Button
              colorScheme="primary"
              ml={4}
              onClick={() => {
                addRoom(propertyId, roomData);
                onClose();
              }}
              isDisabled={
                !roomData.roomName ||
                !roomData.guestCapacity ||
                roomData.roomName === "" ||
                roomData.guestCapacity === parseInt("") ||
                roomData.guestCapacity === 0
              }
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddRoomDetailsModal;
