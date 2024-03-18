import { Box, Image } from "@chakra-ui/react";

const ImageHolder = ({ image }: { image: string }) => {
  return (
    <Box overflow="hidden" m="auto" maxH={200} borderRadius={20}>
      <Image
        src={image}
        maxW="100%"
        height="100%" // Ensure the image takes full height of parent
        width="100%"
      />
    </Box>
  );
};

export default ImageHolder;
