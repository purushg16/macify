import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import CurrentHosting from "../../../entities/CurrentHosting";
import DateFormatter from "../../../functions/dateFormatter";
import { useNavigate } from "react-router-dom";
import { IoArrowForwardCircle } from "react-icons/io5";

const HostingCard = ({ data }: { data: CurrentHosting; color: string }) => {
  const navigate = useNavigate();

  return (
    <Flex
      borderRadius={10}
      p="20px"
      gap={4}
      bg={"white"}
      justifyContent="space-between"
      h="max-content"
      align="start"
    >
      <Flex gap={4} flexDir="column">
        <Box>
          <Heading fontSize="lg"> {data.property.propertyName} </Heading>
          <Text fontSize="sm">Guests: {data.guests.length}</Text>
        </Box>

        <HStack gap={2} align="baseline">
          <Flex
            align="center"
            bg="#E4FEE4"
            p={2}
            px={4}
            borderRadius={99}
            fontSize="xs"
            color="#01c801"
          >
            <Flex gap={2} bg="#01c801" borderRadius="100%" p={1} mr={2} />
            {DateFormatter(new Date(data.checkIn))}
          </Flex>
          <Flex
            align="center"
            bg="#fddfdf"
            p={2}
            px={4}
            borderRadius={99}
            fontSize="xs"
            color="#DF1E1E"
          >
            <Flex gap={2} bg="#DF1E1E" borderRadius="100%" p={1} mr={2} />
            {DateFormatter(new Date(data.checkOut))}
          </Flex>
        </HStack>
      </Flex>
      <Button
        px={{ base: 2, md: 8 }}
        py={{ base: 2, md: 4 }}
        h="100%"
        aspectRatio="1/1"
        bg="secondary.300"
        transition="all 0.7s"
        _hover={{ bg: "secondary.400" }}
        onClick={() => navigate("editBooking/" + data._id)}
      >
        <Icon
          as={IoArrowForwardCircle}
          transform="rotate(320deg)"
          color="white"
        />
      </Button>
    </Flex>
  );
};

export default HostingCard;
