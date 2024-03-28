import { BsChevronDown } from "react-icons/bs";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useApproveBookingStore from "../../../store/approveBookingStore";
import useEditBookingStore from "../../../store/editBookingStore";
import { AvailableResponse } from "../../../entities/AvailableResponse";

interface Props {
  groupId: string;
  rooms: AvailableResponse[];
  bookingId: string;
  isLoading: boolean;
  isError: boolean;
  editBooking?: boolean;
}

const RoomAssignBlock = ({
  groupId,
  rooms,
  bookingId,
  isLoading,
  isError,
  editBooking = false,
}: Props) => {
  const assignedRooms = useApproveBookingStore((s) => s.singlBooking)?.find(
    (b) => b.groupId === groupId
  )?.bookings;
  const currentRoom = assignedRooms?.find((r) => r.bookingId === bookingId);

  const assignRoom = useApproveBookingStore((s) => s.setBookings);

  const editEntry = useEditBookingStore((s) => s.editBookingEntries)?.find(
    (entry) => entry.bookingId === groupId
  );

  const setEditRoom = useEditBookingStore((s) => s.setSingleBooking);

  if (!rooms) return <Spinner />;
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        size="sm"
        colorScheme="primary"
        isLoading={isLoading}
        isDisabled={isError}
      >
        {editBooking
          ? rooms.find((r) => r.roomId === editEntry?.roomId)?.roomName ||
            "Select Room"
          : rooms.find((r) => r.roomId === currentRoom?.roomId)?.roomName ||
            "Select Room"}
      </MenuButton>
      <MenuList borderRadius={10}>
        {rooms.length > 0 ? (
          rooms.map((room, i) => (
            <MenuItem
              textTransform="capitalize"
              key={i}
              onClick={() => {
                editBooking
                  ? setEditRoom(groupId, "roomId", room.roomId)
                  : assignRoom(groupId, {
                      bookingId: bookingId,
                      roomId: room.roomId,
                      bedId: "",
                    });
                setEditRoom(groupId, "bedId", "");
              }}
            >
              {room.roomName}
            </MenuItem>
          ))
        ) : (
          <Text textAlign="center"> No rooms Available </Text>
        )}
      </MenuList>
    </Menu>
  );
};

export default RoomAssignBlock;

// MenuList: {
//   baseStyle: {
//     borderRadius: 20,
//     p: 2,
//     maxH: 200,
//     overflowY: "scroll",
//   },
// },
// MenuButton: {
//   baseStyle: {
//     bg: "none",
//     p: 0,
//     _hover: { bg: "none" },
//     _active: { bg: "none", outline: "none", border: "none" },
//   },
// },
