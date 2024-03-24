import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Flex,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { IoCloseCircleOutline, IoBedOutline } from "react-icons/io5";
import { useDeleteBed } from "../../../hooks/usePropertyServices";
import useAddBedsStore from "../../../store/addBedStore";

const BedTile = ({
  bedNo,
  color,
  action,
  bedId,
  roomId,
  propertyId,
}: {
  bedNo: number;
  color: string;
  action: "api" | "store";
  bedId: string;
  roomId: string;
  propertyId: string;
}) => {
  const { mutate, isPending } = useDeleteBed();
  const removeBed = useAddBedsStore((s) => s.removeBed);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef(null);

  return (
    <>
      <Flex
        bg={color}
        p={4}
        gap={2}
        borderRadius={20}
        flexDir="column"
        align="center"
        pos="relative"
      >
        <Icon
          pos="absolute"
          right={2}
          top={2}
          as={IoCloseCircleOutline}
          color="red.500"
          onClick={onOpen}
        />
        <Icon as={IoBedOutline} boxSize={8} />
        Bed {bedNo}
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
              Delete Bed
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
                  action === "api" && mutate({ propertyId, bedId, roomId });
                  action === "store" && removeBed(propertyId, roomId);
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

export default BedTile;
