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
import Property from "../../../entities/property";
import useApproveBookingStore from "../../../store/approveBookingStore";

interface Props {
  groupId: string;
  property: Property;
  bookingId: string;
  isLoading: boolean;
  isError: boolean;
}

const RoomAssignBlock = ({
  groupId,
  property,
  bookingId,
  isLoading,
  isError,
}: Props) => {
  const assignedRooms = useApproveBookingStore((s) => s.singlBooking)?.find(
    (b) => b.groupId === groupId
  )?.bookings;

  const assignRoom = useApproveBookingStore((s) => s.setBookings);

  const currentRoom = assignedRooms?.find(
    (r) => r.bookingId === bookingId
  )?.roomId;

  if (!property) return <Spinner />;
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
        {property.rooms.find((r) => r._id === currentRoom)?.roomName ||
          "Select Room"}
      </MenuButton>
      <MenuList borderRadius={10}>
        {property.rooms.length > 0 ? (
          property.rooms.map((room, i) => (
            <MenuItem
              textTransform="capitalize"
              key={i}
              onClick={() => {
                assignRoom(groupId, {
                  bookingId: bookingId,
                  roomId: room._id,
                });
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
