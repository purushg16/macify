import { Flex, Icon } from "@chakra-ui/react";
import { IoMdCloseCircle } from "react-icons/io";
import useBookingRoomStore from "../../../store/bookingRoomStore";
import Guest from "../../../entities/Guest";

const RoomGuestTag = ({ guest, roomId }: { roomId: string; guest: Guest }) => {
  const removeGuest = useBookingRoomStore((s) => s.removeGuests);

  return (
    <Flex
      fontSize="sm"
      w="max-content"
      p={2}
      bg="#e4e2e2"
      borderRadius={10}
      align="center"
      gap={2}
    >
      {guest.guestName}
      <Icon
        as={IoMdCloseCircle}
        onClick={() => {
          removeGuest(roomId, guest);
        }}
      />
    </Flex>
  );
};

export default RoomGuestTag;
