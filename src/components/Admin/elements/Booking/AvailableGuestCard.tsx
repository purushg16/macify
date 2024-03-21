import men from "../../../../assets/avatars/men.png";
import wmen from "../../../../assets/avatars/woman.png";
import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import useBookingRoomStore from "../../../store/bookingRoomStore";

const AvailableGuestCard = ({ roomId }: { roomId: string }) => {
  const guests = useBookingRoomStore((s) => s.unassignedGuests);
  const appendguests = useBookingRoomStore((s) => s.addGuests);

  return (
    <VStack gap={4} w="100%">
      {guests.map((guest) => (
        <Flex
          key={guest.id!}
          gap={4}
          p={2}
          bg="#f4f4f4"
          borderRadius={10}
          w="100%"
          onClick={() => appendguests(roomId, guest)}
        >
          <Image
            src={
              guest.gender?.charAt(0) === "m" || guest.gender?.charAt(0) === "M"
                ? men
                : wmen
            }
            alt=""
            w={20}
            borderRadius={20}
          />
          <Box>
            <Text children={guest.guestName} />
            <Text children={`Age: ${guest.age}`} />
          </Box>
        </Flex>
      ))}
    </VStack>
  );
};

export default AvailableGuestCard;
