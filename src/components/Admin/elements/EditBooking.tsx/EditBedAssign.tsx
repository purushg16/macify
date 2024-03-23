import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import useEditBookingStore from "../../../store/editBookingStore";
import { BsChevronDown } from "react-icons/bs";
import { PropertyBed } from "../../../entities/property";
import { AvailableResponse } from "../../../entities/AvailableResponse";

interface Props {
  defualtBed: PropertyBed | undefined;
  data: AvailableResponse[];
  bookingId: string;
  isLoading: boolean;
  isError: boolean;
}

const EditBedAssign = ({
  bookingId,
  isLoading,
  isError,
  data,
  defualtBed,
}: Props) => {
  const bedId = useEditBookingStore((s) => s.editBookingEntries)?.find(
    (entry) => entry.bookingId === bookingId
  )?.bedId;

  const roomId = useEditBookingStore((s) => s.editBookingEntries)?.find(
    (entry) => entry.bookingId === bookingId
  )?.roomId;

  const beds = data?.find((r) => r.roomId === roomId)?.beds;
  const setEditRoom = useEditBookingStore((s) => s.setSingleBooking);

  return (
    <Menu>
      <MenuButton
        isDisabled={isError}
        isLoading={isLoading}
        as={Button}
        size="sm"
        rightIcon={<Icon as={BsChevronDown} />}
        colorScheme="primary"
      >
        {beds?.find((b) => b._id === bedId)?.bedNo ||
          (bedId === defualtBed?._id && defualtBed?.bedNo) ||
          "Select Bed"}
      </MenuButton>
      <MenuList>
        {beds?.length === 0 || !beds ? (
          <Text textAlign="center"> No Beds available </Text>
        ) : (
          beds?.map((b) => (
            <MenuItem
              key={b._id}
              onClick={() => setEditRoom(bookingId, "bedId", b._id)}
            >
              {b.bedNo}
            </MenuItem>
          ))
        )}
      </MenuList>
    </Menu>
  );
};

export default EditBedAssign;
