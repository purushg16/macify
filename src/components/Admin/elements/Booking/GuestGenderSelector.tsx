import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Box,
  FormLabel,
} from "@chakra-ui/react";
import { IoChevronDownOutline } from "react-icons/io5";
import useBookingGuestStore from "../../../store/bookingGuestStore";

const GuestGenderSelector = ({
  gender,
  id,
}: {
  gender: string;
  id: string;
}) => {
  const editGuest = useBookingGuestStore((s) => s.editGuests);
  return (
    <Box>
      <FormLabel fontSize="xs" color="gray" m={0}>
        Gender
      </FormLabel>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<IoChevronDownOutline />}
          bg="#f4f4f4"
          _hover={{ bg: "#f4f4f4" }}
          textTransform="capitalize"
        >
          {gender &&
            gender.toLowerCase().charAt(0).toUpperCase() +
              gender.slice(1).toLowerCase()}
          {!gender && "Select"}
        </MenuButton>
        <MenuList borderRadius={10} p={2}>
          <MenuItem
            onClick={() => {
              editGuest(id, "gender", "male");
            }}
          >
            Male
          </MenuItem>
          <MenuItem
            onClick={() => {
              editGuest(id, "gender", "female");
            }}
          >
            Female
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default GuestGenderSelector;
