import {
  Box,
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { PropertyType } from "../../../store/AddProperty/addPropertyBasicStore";
import { PropertyTypes } from "../AddProperty/PropertyTypes";
import { BiChevronDownCircle } from "react-icons/bi";

interface Props {
  label: string;
  type: PropertyType | undefined;
  setType: (type: PropertyType | undefined) => void;
  icon?: IconType;
}

const EditPropertyTypeSelector = ({ label, type, setType }: Props) => {
  return (
    <Box w="max-content">
      <Text fontSize="xs" color="gray" mb={2}>
        {label}
      </Text>
      <Menu>
        <MenuButton
          w="100%"
          as={Button}
          rightIcon={<Icon as={BiChevronDownCircle} p={0} />}
          textTransform="capitalize"
          bg="white"
          _hover={{ bg: "white" }}
          _active={{ bg: "white" }}
        >
          {type}
        </MenuButton>
        <MenuList p={1} borderRadius={20} zIndex={30}>
          {PropertyTypes.map((pType) => (
            <MenuItem
              textTransform="capitalize"
              key={pType}
              onClick={() => setType(pType as PropertyType)}
            >
              {pType}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default EditPropertyTypeSelector;
