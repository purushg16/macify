import {
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelect: (propertyId: string) => void;
}

const RoomSelector = ({ onSelect }: Props) => {
  return (
    <Menu>
      <MenuButton as={IconButton} colorScheme="primary">
        <Icon as={BsChevronDown} />
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={() => onSelect("65d77f3f441ad240998b4b7b")}
        ></MenuItem>
      </MenuList>
    </Menu>
  );
};

export default RoomSelector;
