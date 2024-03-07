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
import singleProperty from "../../../data/singleProperty";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  bookingId: string;
  propertyId: string;
}

const EditBedAssign = ({ bookingId }: Props) => {
  const roomId = useEditBookingStore((s) => s.editBookingEntries)?.find(
    (entry) => entry.bookingId === bookingId
  )?.roomId;

  const beds = singleProperty.rooms.find((r) => r._id === roomId)?.beds;

  return (
    <Menu>
      <MenuButton
        as={Button}
        size="sm"
        rightIcon={<Icon as={BsChevronDown} />}
        colorScheme="primary"
      >
        {"Select Room"}
      </MenuButton>
      <MenuList>
        {beds?.length === 0 ? (
          <Text> No Beds available </Text>
        ) : (
          beds?.map((b) => <MenuItem key={b._id}> {b.bedNo} </MenuItem>)
        )}
      </MenuList>
    </Menu>
  );
};

export default EditBedAssign;
