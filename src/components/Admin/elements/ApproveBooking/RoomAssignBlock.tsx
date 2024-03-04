import { BsChevronDown } from "react-icons/bs";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import useApproveBookingStore from "../../../store/approveBooking";
import Property from "../../../entities/property";

interface Props {
  property: Property;
  propertyId: string;
  bookingId: string;
  isLoading: boolean;
  isError: boolean;
}

const RoomAssignBlock = ({
  property,
  propertyId,
  bookingId,
  isLoading,
  isError,
}: Props) => {
  const assignedRooms = useApproveBookingStore((s) => s.bookings);
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
        id={propertyId}
        isLoading={isLoading}
        isDisabled={isError}
      >
        {property.rooms.find((r) => r._id === currentRoom)?.roomName ||
          "Select Room"}
      </MenuButton>
      <MenuList>
        {property.rooms.map((room, i) => (
          <MenuItem
            textTransform="capitalize"
            key={i}
            onClick={() => {
              assignRoom({ bookingId: bookingId, roomId: room._id });
            }}
          >
            {room.roomName}
          </MenuItem>
        ))}
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
