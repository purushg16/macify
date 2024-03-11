import {
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { PropertyRoom } from "../../entities/property";

interface Props {
  onSelect: (propertyId: string) => void;
  rooms: PropertyRoom[];
}

const RoomSelector = ({ onSelect, rooms }: Props) => {
  return (
    <Menu>
      <MenuButton as={IconButton} colorScheme="primary">
        <Icon as={BsChevronDown} />
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
