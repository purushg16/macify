import {
  Box,
  Heading,
  Icon,
  IconButton,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FileWithPath } from "react-dropzone";
import FileTile from "./FileTile";
import { TbClearAll } from "react-icons/tb";

interface UploadedFilesProps {
  files: FileWithPath[];
}

const UploadedFiles = ({ files }: UploadedFilesProps) => {
  const clearSelection = () => {
    files.length = 0;
  };

  return (
    <Box textAlign="left">
      <Heading
        fontSize="lg"
        color="gray"
        mx={0}
        mb={4}
        display="flex"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        Uploaded Files
        {files.length !== 0 && (
          <IconButton
            aria-label="Clear"
            icon={<Icon as={TbClearAll} />}
            onClick={clearSelection}
          />
        )}
      </Heading>
      <List spacing={4} my={4}>
        {files.map((file: FileWithPath) => (
          <ListItem key={file.path}>
            <FileTile file={file} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default UploadedFiles;
