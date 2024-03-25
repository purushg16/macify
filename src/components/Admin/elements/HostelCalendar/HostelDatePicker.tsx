import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Calendar } from "react-date-range";
import { BiChevronDownCircle } from "react-icons/bi";
import DateFormatter from "../../../functions/dateFormatter";

const SingleDatePicker = ({
  date,
  setDate,
  isDisabled,
}: {
  date: Date | undefined;
  setDate: (date: Date) => void;
  isDisabled: boolean;
}) => {
  return (
    <Menu>
      <MenuButton
        isDisabled={isDisabled}
        w="max-content"
        as={Button}
        colorScheme="primary"
        rightIcon={<BiChevronDownCircle />}
        size="sm"
      >
        {date ? DateFormatter(date) : "Pick a Date"}
      </MenuButton>
      <MenuList>
        <MenuItem bg="none" p={0} w="fit-content">
          <Calendar onChange={(item) => setDate(item)} date={date} />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SingleDatePicker;
