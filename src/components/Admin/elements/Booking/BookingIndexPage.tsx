import {
  Box,
  Button,
  HStack,
  Heading,
  Highlight,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import IndexImageCarousel from "./IndexImageCarousel";
import { useNavigate } from "react-router-dom";

const BookingIndexPage = () => {
  const imagesLen = 3;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <VStack
      align="start"
      pos="relative"
      h="100vh"
      maxH="100vh"
      justify="space-between"
    >
      <IndexImageCarousel
        callback={setCurrentImageIndex}
        imagesLen={imagesLen}
      />

      <HStack p={4} w="100%" justify="space-between">
        <VStack gap={0} align="start" color="white">
          <Heading fontSize="2xl"> Hotel Name </Heading>
          <Heading fontSize="sm">
            <Highlight
              query="powered by"
              styles={{
                fontWeight: "normal",
                fontsize: "xs",
                color: "primary.50",
              }}
              children="powered by Macdasy"
            />
          </Heading>
        </VStack>

        <HStack>
          <Box
            w={currentImageIndex === 0 ? 3 : 2}
            aspectRatio={currentImageIndex === 0 ? "3/2" : "1/1"}
            borderRadius={100}
            bg={currentImageIndex === 0 ? "secondary.200" : "primary.200"}
            transition="all 0.7s"
          />
          <Box
            w={currentImageIndex === 1 ? 3 : 2}
            aspectRatio={currentImageIndex === 1 ? "3/2" : "1/1"}
            borderRadius={100}
            bg={currentImageIndex === 1 ? "secondary.200" : "primary.200"}
            transition="all 0.7s"
          />
          <Box
            w={currentImageIndex === 2 ? 3 : 2}
            aspectRatio={currentImageIndex === 2 ? "3/2" : "1/1"}
            borderRadius={100}
            bg={currentImageIndex === 2 ? "secondary.200" : "primary.200"}
            transition="all 0.7s"
          />
        </HStack>
      </HStack>

      <VStack
        align="start"
        p={4}
        py={8}
        bg="#E4FEE4"
        borderTopRadius={20}
        w="100%"
        gap={12}
      >
        <VStack gap={0} align="start">
          <Heading fontSize="xl"> Welcome to Macify </Heading>
          <Text fontSize="sm">
            We are so blessed to help you with hotel booking.
          </Text>
        </VStack>

        <VStack w="100%">
          <HStack gap={1} borderRadius={10} bg="primary.100" p={2}>
            <Icon as={IoInformationCircleOutline} />
            <Text fontSize="xs">
              Make sure you have id proof (Aadhar or Driving Id) to reduce
              process.
            </Text>
          </HStack>
          <Button w="100%" bg="white" onClick={() => navigate("1")}>
            Start Booking
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default BookingIndexPage;
