import {
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useApproveBookingStore from "../../../store/approveBookingStore";
import { AvailableResponse } from "../../../entities/AvailableResponse";

interface Props {
  bookingId: string;
  groupId: string;
  data: AvailableResponse[];
}

const BedAssignBlock = ({ bookingId: guestId, groupId, data }: Props) => {
  const assignedRooms = useApproveBookingStore((s) => s.singlBooking)?.find(
    (b) => b.groupId === groupId
  )?.bookings;

  const assignRoom = useApproveBookingStore((s) => s.setBookings);

  const respectiveRoomId = assignedRooms?.find(
    (ar) => ar.bookingId === guestId
  )?.roomId;

  const beds = data.find((r) => r.roomId === respectiveRoomId)?.beds;
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
      <MenuList maxH={250} overflowY="auto" borderRadius={20}>
        {beds.map((bed, i) => (
          <MenuItem
            _hover={{ bg: "none" }}
            _active={{ bg: "none" }}
            _focus={{ bg: "none" }}
            textTransform="capitalize"
            key={i}
            onClick={() => {
              assignRoom(groupId, { bookingId: guestId, bedId: bed._id });
            }}
          >
            <Heading
              fontSize="md"
              _hover={{ bg: "gray.50" }}
              bg="#f4f4f4"
              w="100%"
              borderRadius={20}
              p={2}
              px={4}
            >
              Bed {bed.bedNo}
            </Heading>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default BedAssignBlock;
