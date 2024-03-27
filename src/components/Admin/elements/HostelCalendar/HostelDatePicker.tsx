import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Calendar } from "react-date-range";
import { BiChevronDownCircle } from "react-icons/bi";
import DateFormatter from "../../../functions/dateFormatter";

const SingleDatePicker = ({
  date,
  setDate,
  isDisabled,
  lite = false,
}: {
  date: Date | undefined;
  setDate: (date: Date) => void;
  isDisabled: boolean;
  lite?: boolean;
}) => {
  return (
    <Menu closeOnBlur={false} closeOnSelect={false}>
      <MenuButton
        isDisabled={isDisabled}
        w="max-content"
        as={Button}
        colorScheme={!lite ? "primary" : "gray"}
        bg={lite ? "#f4f4f4" : "primary.500"}
        _hover={{ bg: lite ? "#f5f5f5" : "primary.600" }}
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
