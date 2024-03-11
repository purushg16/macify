import {
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { PropertyBed } from "../../entities/property";

interface Props {
  onSelect: (propertyId: string) => void;
  beds: PropertyBed[] | undefined;
}

const BedSelector = ({ onSelect, beds }: Props) => {
  return (
    <Menu>
      <MenuButton as={IconButton} colorScheme="primary">
        <Icon as={BsChevronDown} />
      </MenuButton>
      <MenuList>
        {beds?.map((bed) => (
          <MenuItem onClick={() => onSelect(bed._id)}>{bed.bedNo}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default BedSelector;
