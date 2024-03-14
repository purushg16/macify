import { Box, Image } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  image: string;
  bottom: number;
}

const AddSlide = ({ children, image, bottom }: Props) => {
  return (
    <Box bg="white" p={4} borderRadius={20} pos="relative" overflow="hidden">
      {children}
      <Box h={100} />
      <Image
        w={250}
        src={image}
        alt=""
        pos="absolute"
        zIndex={2}
        right={-70}
        bottom={bottom}
      />
    </Box>
  );
};

export default AddSlide;
