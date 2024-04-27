import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { IoChevronDownOutline } from "react-icons/io5";
import useBookingGuestStore from "../../../store/bookingGuestStore";

const GuestIdProofTypeSelector = ({
  type,
  id,
}: {
  type: string;
  id: string;
}) => {
  const editGuest = useBookingGuestStore((s) => s.editGuests);

  return (
    <Menu>
      <MenuButton
        size="sm"
        as={Button}
        rightIcon={<IoChevronDownOutline />}
        bg="#f4f4f4"
        _hover={{ bg: "#f4f4f4" }}
        textTransform="capitalize"
      >
        {type &&
          type.toLowerCase().charAt(0).toUpperCase() +
            type.slice(1).toLowerCase()}
        {!type && "Select"}
      </MenuButton>
      <MenuList borderRadius={10} p={2}>
        <MenuItem
          onClick={() => {
            editGuest(id, "idProofType", "aadhar");
          }}
        >
          Aadhar
        </MenuItem>
        <MenuItem
          onClick={() => {
            editGuest(id, "idProofType", "passport");
          }}
        >
          Passport
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default GuestIdProofTypeSelector;
