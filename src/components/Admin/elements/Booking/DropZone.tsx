import { Box, Text, Button } from "@chakra-ui/react";
import { useMemo } from "react";
import { useDropzone, FileWithPath } from "react-dropzone";
import { acceptStyle, focusedStyle, rejectStyle } from "./DropZoneStyles";
import useBookingStore from "../../../store/bookingStore";
import { MdUploadFile } from "react-icons/md";
import { Navigate } from "react-router-dom";
const DropZone = () => {
  const count = useBookingStore((s) => s.numberOfGuests);
  const addFiles = useBookingStore((s) => s.addFiles);
  const filesUploaded = useBookingStore((s) => s.filesUploaded);

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      accept: { "application/pdf": [], "image/png": [".png"] },
      maxFiles: count,
      onDrop(acceptedFiles: FileWithPath[]) {
        console.log(acceptedFiles);
        console.log(acceptedFiles.length);
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

  if (count === filesUploaded?.length) return <Navigate to="/booking/3" />;
  return (
    <Box
      p={2}
      borderRadius={20}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mx="auto"
      bg="gray.50"
      border="1px solid"
      borderColor="gray.100"
      {...getRootProps({ style: style as React.CSSProperties })}
    >
      <input {...getInputProps()} name="pdfFile" />

      <Text color="gray" px={4}>
        Pick Files
      </Text>

      <Button
        size="sm"
        colorScheme="primary"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
      >
        <MdUploadFile />
      </Button>
    </Box>
  );
};

export default DropZone;
