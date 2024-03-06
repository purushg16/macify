import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import singleProperty from "../../../data/singleProperty";
import useApproveBookingStore from "../../../store/approveBookingStore";

interface Props {
  bookingId: string;
  groupId: string;
}

const BedAssignBlock = ({ bookingId: guestId, groupId }: Props) => {
  const assignedRooms = useApproveBookingStore((s) => s.singlBooking)?.find(
    (b) => b.groupId === groupId
  )?.bookings;

  const assignRoom = useApproveBookingStore((s) => s.setBookings);

  const respectiveRoomId = assignedRooms?.find(
    (ar) => ar.bookingId === guestId
  )?.roomId;

  const beds = singleProperty.rooms.find(
    (r) => r._id === respectiveRoomId
  )?.beds;

  const selectedBedId = assignedRooms?.find(
    (ar) => ar.bookingId === guestId && ar.roomId === respectiveRoomId
  )?.bedId;

  const selectedBed = beds?.find((b) => b._id === selectedBedId);

  if (!beds) return null;
  return (
    <Menu>
      <MenuButton
        as={Button}
        size="sm"
        colorScheme="primary"
        rightIcon={<BsChevronDown />}
        isDisabled={!beds}
      >
        {selectedBed?.bedNo || "Select Bed"}
      </MenuButton>
      <MenuList>
        {beds.map((bed, i) => (
          <MenuItem
            textTransform="capitalize"
            key={i}
            onClick={() => {
              assignRoom(groupId, { bookingId: guestId, bedId: bed._id });
            }}
          >
            {bed.bedNo}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default BedAssignBlock;
