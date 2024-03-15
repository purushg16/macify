import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { PropertyRoom } from "../../entities/property";
import { IoChevronDownCircleOutline } from "react-icons/io5";

interface Props {
  onSelect: (propertyId: string) => void;
  rooms: PropertyRoom[];
  selectedRoom?: PropertyRoom | undefined;
}

const RoomSelector = ({ onSelect, rooms, selectedRoom }: Props) => {
  return (
    <Menu>
      <MenuButton
        w="max-content"
        as={Button}
        rightIcon={<Icon as={IoChevronDownCircleOutline} />}
      >
        {selectedRoom?.roomName || "Select Room"}
      </MenuButton>
      <MenuList>
        {rooms.map((room) => (
          <MenuItem onClick={() => onSelect(room._id)}>
            {room.roomName}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default RoomSelector;
