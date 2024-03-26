import {
  Box,
  Button,
  FormLabel,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import useAddPropertyStore, {
  PropertyType,
} from "../../../store/AddProperty/addPropertyBasicStore";
import { PropertyTypes } from "./PropertyTypes";

const PropertyTypeSelector = () => {
  const type = useAddPropertyStore((s) => s.propertyType);
  const setType = useAddPropertyStore((s) => s.setPropertyType);
  const setRentWithin = useAddPropertyStore((s) => s.setRentWithin);

  return (
    <Box w="100%">
      <FormLabel fontSize="xs" m={0} ml={2}>
        Property Type
      </FormLabel>
      <Menu placement="top">
        <MenuButton
          bg="gray.50"
          _hover={{ bg: "gray.50" }}
          textAlign="left"
          textTransform="capitalize"
          w="100%"
          as={Button}
          rightIcon={<Icon as={IoChevronDownCircleOutline} />}
        >
          {type}
        </MenuButton>
        <MenuList p={1} borderRadius={20}>
          {PropertyTypes.map((pType) => (
            <MenuItem
              textTransform="capitalize"
              key={pType}
              onClick={() => {
                if (pType === "hotel" || pType === "hostel")
                  setRentWithin(true);
                setType(pType as PropertyType);
              }}
            >
              {pType}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PropertyTypeSelector;
