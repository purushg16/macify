import { Text, Image, Button, HStack, Box } from "@chakra-ui/react";
import { FileWithPath } from "react-dropzone";

interface SelectedFilesProps {
  file: FileWithPath;
}

const IconMap: { [key: string]: string } = {
  "application/pdf": "https://img.icons8.com/plasticine/100/pdf-2.png",
  "image/png": "https://img.icons8.com/plasticine/100/image-file.png",
};

const FileTile = ({ file }: SelectedFilesProps) => {
  return (
    <Box
      pos="relative"
      justifyContent="space-between"
      p={2}
      boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;"
      borderRadius={15}
      border="1px solid"
      bg="gray.50"
      borderColor="gray.200"
      boxSizing="border-box"
    >
      <HStack maxW="95%">
        <Image boxSize={45} src={IconMap[file.type]} />
        <Text fontSize="sm" fontWeight={600} maxW="100%" overflowY="clip">
          {file.path}
          <Text color="gray" mt={1}>
            Size: {(file.size / 1000000).toFixed(2)} MB
          </Text>
        </Text>
      </HStack>

      <Button maxW="5%" pos="absolute" right={1} top={2} variant="text">
        x
      </Button>
    </Box>
  );
};

export default FileTile;
