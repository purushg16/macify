import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import PropertyRespone from "../../entities/PropertyResponse";
import { IoChevronDownCircleOutline } from "react-icons/io5";

interface Props {
  selectedProperty?: PropertyRespone | undefined;
  onSelect: (propertyId: string) => void;
  properties: PropertyRespone[] | undefined;
}

const PropertySelector = ({
  selectedProperty,
  onSelect,
  properties,
}: Props) => {
  return (
    <Menu>
      <MenuButton
        w="max-content"
        as={Button}
        rightIcon={<Icon as={IoChevronDownCircleOutline} />}
      >
        {selectedProperty?.propertyName || "Select Property"}
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
