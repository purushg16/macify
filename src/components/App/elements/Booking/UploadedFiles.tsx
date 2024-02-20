import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import FileTile from "./FileTile";
import useBookingStore from "../../../store/bookingStore";
import { FileWithPath, useDropzone } from "react-dropzone";
import AnimateMove from "../../../motions/Move";
import fetchFileDetails from "../../../generator/fetchFileDetails";

const UploadedFiles = () => {
  const guestsCount = useBookingStore((s) => s.numberOfGuests)!;
  const files = useBookingStore((s) => s.filesUploaded)!;
  const addFiles = useBookingStore((s) => s.addFiles);
  const uploadedFiles = useBookingStore((s) => s.filesUploaded);

  const { getRootProps } = useDropzone({
    accept: { "application/pdf": [], "image/png": [".png"] },
    maxFiles: guestsCount,
    onDrop: (files: FileWithPath[]) => {
      if (files.length > 0) addFiles(files);
    },
  });

  const extractDetails = () => {
    fetchFileDetails(uploadedFiles!).then((res) => console.log(res));
  };

  return (
    <>
      <AnimateMove delay={0.2}>
        <Box textAlign="left" bg="gray.50" borderRadius={20} w="100%">
          <List
            py={4}
            mx={6}
            spacing={4}
            my={4}
            minH={350}
            maxH={350}
            overflowY="auto"
            overflowX="hidden"
            borderRadius={10}
            css={{
              "&::-webkit-scrollbar": {
                width: "1px", // Set the width of the scrollbar
              },
              "&::-webkit-scrollbar-thumb": {
                borderRadius: "1px", // Set the border radius of the thumb
              },
              "&::-webkit-scrollbar-track": {
                borderRadius: "1px", // Set the border radius of the track
              },
            }}
          >
            {files.map((file, index) => (
              <ListItem key={file.path}>
                <AnimateMove delay={0.2 * (index + 1)} direction="x">
                  <FileTile file={file} />
                </AnimateMove>
              </ListItem>
            ))}
          </List>
        </Box>
      </AnimateMove>

      <Flex flexDir="column" w="100%" gap={4}>
        <AnimateMove delay={0.4}>
          <Box>
            <Heading fontSize="xl">Uploaded Files</Heading>
            <Text color="gray" my={2}>
              Preview & manage your documents here <br />
              <span style={{ fontStyle: "italic" }}>
                Click a file to remove
              </span>
            </Text>
          </Box>
        </AnimateMove>

        <AnimateMove delay={0.6}>
          <HStack justify="center">
            {files.length === guestsCount && (
              <Button onClick={() => extractDetails()}>Continue</Button>
            )}
            {files.length !== guestsCount && (
              <Button {...getRootProps()} colorScheme="primary">
                Add
              </Button>
            )}
          </HStack>
        </AnimateMove>
      </Flex>
    </>
  );
};

export default UploadedFiles;
