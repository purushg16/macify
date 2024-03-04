import { BsChevronDown } from "react-icons/bs";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import singleProperty from "../../../data/singleProperty";
import { useState } from "react";
import useApproveBookingStore, {
  ApproveBookingProperty,
} from "../../../store/approveBooking";
// import { useGetSingleProperty } from "../../../hooks/usePropertyServices";

interface Props {
  propertyId: string;
  bookingId: string;
  guestId: string;
}

interface RoomAssignmentAction {
  [guestId: string]: ApproveBookingProperty;
}

const RoomAssignBlock = ({ propertyId, guestId, bookingId }: Props) => {
  // const { data, isLoading } = useGetSingleProperty(propertyId);

  const setCurrentRoomId = useApproveBookingStore((s) => s.setCurrentRoomId);
  const [assignedRoom, setAssignedRoom] = useState<RoomAssignmentAction>({
    [guestId]: { bookingId: bookingId },
  });

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        size="sm"
        colorScheme="primary"
        id={propertyId}
      >
        {singleProperty.rooms.find(
          (r) => r._id === assignedRoom[guestId].roomId!
        )?.roomName || "Select Room"}
      </MenuButton>
      <MenuList>
        {singleProperty.rooms.map((room, i) => (
          <MenuItem
            textTransform="capitalize"
            key={i}
            onClick={() => {
              setCurrentRoomId(room._id);
              setAssignedRoom({
                [guestId]: { ...assignedRoom[guestId], roomId: room._id },
              });
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
