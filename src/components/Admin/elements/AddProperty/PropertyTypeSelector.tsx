import {
  InputGroup,
  Input,
  InputRightElement,
  Menu,
  MenuButton,
  Button,
  Icon,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { TbChevronsDown } from "react-icons/tb";
import useAddPropertyStore, {
  PropertyType,
} from "../../../store/AddProperty/addPropertyBasicStore";
import { PropertyTypes } from "./PropertyTypes";

const PropertyTypeSelector = () => {
  const type = useAddPropertyStore((s) => s.propertyType);
  const setType = useAddPropertyStore((s) => s.setPropertyType);
  const setRentWithin = useAddPropertyStore((s) => s.setRentWithin);

  return (
    <InputGroup size="md" bg="gray.50" borderRadius={99} zIndex={2}>
      <Input
        placeholder="Property Type"
        value={type || ""}
        pointerEvents="none"
      />
      <InputRightElement width="4.5rem">
        <Menu>
          <MenuButton
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
                onClick={() => {
                  if (pType === "Flat" || pType === "Hostel")
                    setRentWithin(true);
                  setType(pType as PropertyType);
                }}
              >
                {pType}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </InputRightElement>
    </InputGroup>
  );
};

export default PropertyTypeSelector;
