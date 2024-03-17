import { Box, Image } from "@chakra-ui/react";

const ImageHolder = ({ image }: { image: string }) => {
  return (
    <Box
      w="80%"
      maxW="80%"
      overflow="hidden"
      m="auto"
      bg="primary.100"
      maxH={300}
      borderRadius={20}
      p={8}
    >
      <Image
        src={image}
        maxW="100%"
        objectFit="cover" // Add objectFit property
        height="100%" // Ensure the image takes full height of parent
        width="100%"
      />
    </Box>
  );
};

export default ImageHolder;
