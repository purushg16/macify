import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import man from "../../../../assets/avatars/men.png";
import woman from "../../../../assets/avatars/woman.png";

interface Props {
  guestName: string;
  age: number;
  gender: "male" | "female";
}

const BookingGuestCard = ({ guestName, age, gender }: Props) => {
  return (
    <Flex
      p={4}
      boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;"
      borderRadius={15}
      bg="gray.100"
      gap={6}
    >
      <Box w="max-content" textAlign="center">
        <Image
          w={70}
          borderRadius={15}
          m="auto"
          src={gender === "male" ? man : woman}
          alt="boy"
        />
      </Box>
      <Flex flex={1} flexDir="column" gap={2}>
        <Heading fontSize="xl" textTransform="capitalize">
          {guestName}
        </Heading>
        <Text fontSize="sm">Age: {age}</Text>
      </Flex>
    </Flex>
  );
};

export default BookingGuestCard;
