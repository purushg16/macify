import {
  Flex,
  Heading,
  Icon,
  Box,
  Text,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { PropertyRoom } from "../../../entities/property";
import useAddRoomsStore, { AddRoomData } from "../../../store/addRoomStore";
import React from "react";
import { useDeleteRoom } from "../../../hooks/usePropertyServices";

const RoomTile = ({
  color,
  room,
  action,
  propertyId,
  roomId,
}: {
  color: string;
  room: AddRoomData | PropertyRoom;
  action: "api" | "store";
  roomId: string;
  propertyId: string;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef(null);
  const { mutate, isPending } = useDeleteRoom();
  const removeRoom = useAddRoomsStore((s) => s.removeRoom);

  return (
    <>
      <Flex
        p={4}
        gap={2}
        bg={color}
        borderRadius={20}
        align="center"
        justify="space-between"
      >
        <Box textAlign="left">
          <Heading size="xs">{room.roomName}</Heading>
          <Text fontSize="xs">Capacity: {room.guestCapacity}</Text>
        </Box>
        <Icon
          as={IoCloseCircleOutline}
          color="red.500"
          cursor="pointer"
          onClick={onOpen}
        />
      </Flex>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Room
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                isLoading={isPending}
                colorScheme="red"
                onClick={() => {
                  action === "api" && mutate({ propertyId, roomId });
                  action === "store" && removeRoom(propertyId, roomId);
                }}
                ml={4}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default RoomTile;
