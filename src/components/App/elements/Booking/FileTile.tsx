import {
  Text,
  Image,
  HStack,
  Box,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { FileWithPath } from "react-dropzone";
import useBookingStore from "../../../store/bookingStore";

interface SelectedFilesProps {
  file: FileWithPath;
}

const IconMap: { [key: string]: string } = {
  "application/pdf": "https://img.icons8.com/plasticine/100/pdf-2.png",
  "image/png": "https://img.icons8.com/plasticine/100/image-file.png",
};

const FileTile = ({ file }: SelectedFilesProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);

  const [fileToRemove, setFileToRemove] = useState<FileWithPath>();
  const remove = useBookingStore((s) => s.removeFiles);

  return (
    <>
      <Box
        cursor="pointer"
        onClick={() => {
          onOpen();
          setFileToRemove(file);
        }}
        pos="relative"
        justifyContent="space-between"
        p={2}
        boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;"
        borderRadius={15}
        bg="gray.100"
      >
        <HStack minW="95%">
          <Image boxSize={45} src={IconMap[file.type]} />
          <Text fontSize="sm" fontWeight={600} maxW="100%" overflowY="clip">
            {file.path}
            {/* <Text color="gray" mt={1}>
            Size: {(file.size / 1000000).toFixed(2)} MB
          </Text> */}
          </Text>
        </HStack>
      </Box>

      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading fontSize="xl">{fileToRemove?.name}</Heading>
          </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to remove this file from the uploads?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button
              colorScheme="orange"
              ml={3}
              onClick={() => {
                if (fileToRemove) remove(fileToRemove);
              }}
            >
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default FileTile;
