import { Box, Text, Button } from "@chakra-ui/react";
import { useMemo } from "react";
import { useDropzone, FileWithPath } from "react-dropzone";
import { acceptStyle, focusedStyle, rejectStyle } from "./DropZoneStyles";
import useBookingStore from "../../../store/bookingStore";

const DropZone = () => {
  const count = useBookingStore((s) => s.numberOfGuests);
  const addFiles = useBookingStore((s) => s.addFiles);

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      accept: { "application/pdf": [], "image/png": [".png"] },
      maxFiles: count,
      onDrop(acceptedFiles: FileWithPath[]) {
        if (acceptedFiles.length > 0) {
          addFiles(acceptedFiles);
        }
      },
    });

  const style = useMemo(
    () => ({
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <Box
      borderRadius={20}
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      mx="auto"
      w="90%"
      minH={300}
      bg="gray.50"
      border="1px solid"
      borderColor="gray.100"
      {...getRootProps({ style: style as React.CSSProperties })}
    >
      <input {...getInputProps()} name="pdfFile" />

      <Text textAlign="center" fontSize="lg" fontWeight={500} color="gray">
        Drag & drop some files here
        <br /> or
        <br />
        <Button
          colorScheme="primary"
          mt={2}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
        >
          Browse Files
        </Button>
      </Text>
    </Box>
  );
};

export default DropZone;
