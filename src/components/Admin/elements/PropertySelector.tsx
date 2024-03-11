import {
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import PropertyRespone from "../../entities/PropertyResponse";

interface Props {
  onSelect: (propertyId: string) => void;
  properties: PropertyRespone[] | undefined;
}

const PropertySelector = ({ onSelect, properties }: Props) => {
  return (
    <Menu>
      <MenuButton as={IconButton} colorScheme="primary">
        <Icon as={BsChevronDown} />
      </MenuButton>
      <MenuList>
        {properties?.map((property) => (
          <MenuItem
            onClick={() => onSelect(property._id)}
            textTransform="capitalize"
          >
            {property.propertyName}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PropertySelector;
