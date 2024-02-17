import { Box, Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  acceptStyle,
  baseStyle,
  focusedStyle,
  rejectStyle,
  selStyle,
} from "./DropZoneStyles";
import UploadedFiles from "./UploadedFiles";

interface Props {
  active: boolean;
  fileSelected: (selected: boolean) => void;
  handleFile: (files: File[]) => void;
}

function CustomerFileUpload(props: Props) {
  const [selected, isSelected] = useState(false);

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({ accept: { "application/pdf": [], "image/png": [".png"] } });

  const style = useMemo(
    () => ({
      ...(!selected ? baseStyle : selStyle),
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject, selected]
  );

  useEffect(() => {
    if (acceptedFiles.length >= 1) {
      isSelected(true);
      props.fileSelected(true);
      props.handleFile(acceptedFiles);
    } else {
      isSelected(false);
      props.fileSelected(false);
    }
  }, [selected, acceptedFiles, props]);

  return (
    <Box textAlign="center">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <Box
          className="container"
          minW="100%"
          pointerEvents={props.active ? "all" : "none"}
        >
          <Box textAlign="left" width="100%" marginBottom="5%">
            <Heading fontSize="xl">Upload Your Proofs here</Heading>
          </Box>

          <Box
            boxShadow="rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;"
            borderRadius={20}
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            minH={150}
            bg={selected ? "gray.100" : "green.50"}
            {...getRootProps({ style: style as React.CSSProperties })}
          >
            <input {...getInputProps()} name="pdfFile" />

            {!selected ? (
              <Text
                textAlign="center"
                fontSize="lg"
                fontWeight={500}
                color="gray"
              >
                Drag 'n' drop some files here,
                <br /> or
                <br />
                <Button
                  colorScheme="orange"
                  mt={2}
                  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                >
                  Browse Files
                </Button>
              </Text>
            ) : (
              <Text textAlign="center">"Wrong File? Reselect File!"</Text>
            )}
          </Box>
        </Box>

        <Box>
          {acceptedFiles.length > 0 ? (
            <UploadedFiles files={acceptedFiles} />
          ) : (
            <Heading fontSize="lg" textAlign="center">
              No files Selected!
            </Heading>
          )}
        </Box>
      </SimpleGrid>

      <Button mt={8}> Continue </Button>
    </Box>
  );
}

export default CustomerFileUpload;
