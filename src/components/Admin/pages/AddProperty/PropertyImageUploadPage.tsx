import {
  HStack,
  Button,
  VStack,
  FormLabel,
  SimpleGrid,
  Image,
  Box,
  Divider,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import AnimateMove from "../../../motions/Move";
import NavigatorWrapper from "../../elements/NavigatorWrapper";
import Title from "../../elements/Title";
import DropZone from "../../elements/Booking/DropZone";
import useAddPropertyStore from "../../../store/AddProperty/addPropertyBasicStore";
import { FileWithPath } from "react-dropzone";
import { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";

interface ImageData {
  file: FileWithPath;
  data: string;
}

const PropertyImageUploadPage = () => {
  const images = useAddPropertyStore((s) => s.images);
  const setImages = useAddPropertyStore((s) => s.appendImages);
  const removeImage = useAddPropertyStore((s) => s.removeImages);
  const [imageUrls, setImageUrls] = useState<ImageData[]>([]);

  const handleImages = (files: FileWithPath | FileWithPath[]) => {
    if (Array.isArray(files)) {
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          setImageUrls((prevUrls) => [
            ...prevUrls,
            {
              file: file,
              data: reader.result as string,
            },
          ]);
        };
        reader.readAsDataURL(file);
      });
    }
    setImages(files);
  };

  const handleRemove = (file: FileWithPath) => {
    setImageUrls(imageUrls.filter((img) => img.file !== file));
    removeImage(file);
  };

  return (
    <>
      <AnimateMove delay={0.2} noWidth>
        <VStack gap={0} align="start">
          <FormLabel fontSize="sm" m={0}>
            Upload Images
          </FormLabel>
          <DropZone
            callback={handleImages}
            limit={4}
            isDisabled={images.length === 4}
          />
        </VStack>
      </AnimateMove>

      <AnimateMove delay={0.4} noWidth>
        <VStack gap={4} align="start" borderRadius={10} p={4} bg="#f4f4f4">
          <FormLabel fontSize="sm" m={0}>
            Preview
          </FormLabel>
          <Divider />
          <SimpleGrid columns={1} spacing={4}>
            {imageUrls.map((img, i) => (
              <Box
                key={i}
                w="100%"
                borderRadius={10}
                overflow="hidden"
                pos="relative"
              >
                <IconButton
                  aria-label="remove"
                  size="sm"
                  icon={<Icon as={CiCircleRemove} />}
                  pos="absolute"
                  top={2}
                  right={2}
                  bg="red.300"
                  _hover={{ bg: "red.400" }}
                  onClick={() => handleRemove(img.file)}
                />
                <Image src={img.data} alt="" />
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </AnimateMove>

      <AnimateMove delay={0.6}>
        <Title
          heading="Upload Property Images"
          subtitle="Upload max. of 4 property images for showcasing"
          size="lg"
          substitleSize="xs"
        />
        <HStack mt={2}>
          <NavigatorWrapper to="/admin/properties/add/6">
            <Button id="extra">Back</Button>
          </NavigatorWrapper>
          <NavigatorWrapper to="/admin/properties/add/8">
            <Button
              id="extra"
              colorScheme="primary"
              //   isDisabled={!address || !city || !zipCode || !country}
            >
              Next
            </Button>
          </NavigatorWrapper>
        </HStack>
      </AnimateMove>
    </>
  );
};

export default PropertyImageUploadPage;
