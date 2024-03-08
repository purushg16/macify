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

const BedSelector = ({ onSelect }: Props) => {
  return (
    <Menu>
      <MenuButton as={IconButton} colorScheme="primary">
        <Icon as={BsChevronDown} />
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={() => onSelect("65d958be2a773c387290a00e")}
        ></MenuItem>
      </MenuList>
    </Menu>
  );
};

export default BedSelector;
