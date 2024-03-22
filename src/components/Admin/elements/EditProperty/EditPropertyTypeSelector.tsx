import {
  Box,
  Button,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { TbChevronsDown } from "react-icons/tb";
import { PropertyType } from "../../../store/AddProperty/addPropertyBasicStore";
import { PropertyTypes } from "../AddProperty/PropertyTypes";

interface Props {
  label: string;
  type: PropertyType | undefined;
  setType: (type: PropertyType | undefined) => void;
  icon?: IconType;
}

const EditPropertyTypeSelector = ({ label, type, setType }: Props) => {
  return (
    <Box w="max-content">
      <Text fontSize="sm" color="gray" mb={2}>
        {label}
      </Text>
      <InputGroup size="md" bg="white" borderRadius={99} zIndex={3}>
        <Input placeholder={type} value={type || ""} pointerEvents="none" />
        <InputRightElement width="4.5rem">
          <Menu>
            <MenuButton
              borderRadius={20}
              _hover={{ bg: "gray.700" }}
              as={Button}
              pos="absolute"
              right={2}
              top={1}
              p={0}
              bg="black"
              color="white"
              size="sm"
            >
              <Icon as={TbChevronsDown} p={0} />
            </MenuButton>
            <MenuList p={1} borderRadius={20}>
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
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default EditPropertyTypeSelector;
