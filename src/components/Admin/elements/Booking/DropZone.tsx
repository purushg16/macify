import { Box, Text, Button, useToast } from "@chakra-ui/react";
import { useMemo } from "react";
import { useDropzone, FileWithPath } from "react-dropzone";
import { acceptStyle, focusedStyle, rejectStyle } from "./DropZoneStyles";
import { MdUploadFile } from "react-icons/md";

interface Props {
  limit: number | undefined;
  callback: (file: FileWithPath | FileWithPath[]) => void;
  isDisabled: boolean;
}

const DropZone = ({ limit, callback, isDisabled }: Props) => {
  const toast = useToast();

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      accept: {
        "application/pdf": [],
        "image/png": [".png", ".img", ".jpg", ".jpeg"],
      },
      maxFiles: limit,

      onDropRejected: (rej) => {
        toast({
          title: rej[0].errors[0].message,
          status: "error",
          duration: 3000,
          position: "top",
        });
      },

      onDrop: async (acceptedFiles: FileWithPath[]) => {
        if (acceptedFiles.length > 0 && !isDisabled) callback(acceptedFiles);
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
    <>
      <Box
        w="100%"
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
    </>
  );
};

export default DropZone;
