import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import singleProperty from "../../../data/singleProperty";
import useApproveBookingStore from "../../../store/approveBooking";

interface Props {
  bookingId: string;
}

const BedAssignBlock = ({ bookingId: guestId }: Props) => {
  const assignedRooms = useApproveBookingStore((s) => s.bookings);
  const assignRoom = useApproveBookingStore((s) => s.setBookings);

  const respectiveRoomId = assignedRooms?.find(
    (ar) => ar.bookingId === guestId
  )?.roomId;

  // =====  if property is other than hostel return null ====== \\
  return (
    <Menu>
      <MenuButton
        as={Button}
        size="sm"
        colorScheme="primary"
        rightIcon={<BsChevronDown />}
      >
        Select Bed
      </MenuButton>
      <MenuList>
        {singleProperty.rooms
          .find((r) => r._id === respectiveRoomId)
          ?.beds.map((bed, i) => (
            <MenuItem
              textTransform="capitalize"
              key={i}
              onClick={() => {
                assignRoom({ bookingId: guestId, bedId: bed._id });
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
