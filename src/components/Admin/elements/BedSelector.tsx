import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { PropertyBed } from "../../entities/property";
import { IoChevronDownCircleOutline } from "react-icons/io5";

interface Props {
  onSelect: (propertyId: string) => void;
  beds: PropertyBed[] | undefined;
  selectedBed: PropertyBed | undefined;
}

const BedSelector = ({ onSelect, beds, selectedBed }: Props) => {
  return (
    <Menu>
      <MenuButton
        w="max-content"
        as={Button}
        rightIcon={<Icon as={IoChevronDownCircleOutline} />}
      >
        {selectedBed?.bedNo || "Select Bed"}
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
