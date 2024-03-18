import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { IoChevronDownOutline } from "react-icons/io5";

const GuestGenderSelector = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<IoChevronDownOutline />}
        bg="#f4f4f4"
        _hover={{ bg: "#f4f4f4" }}
      >
        Gender
      </MenuButton>
      <MenuList borderRadius={10} p={2}>
        <MenuItem> Male </MenuItem>
        <MenuItem> Female </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default GuestGenderSelector;
