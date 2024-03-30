import {
  Button,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Calendar } from "react-date-range";
import { BiChevronDownCircle } from "react-icons/bi";
import DateFormatter from "../../../functions/dateFormatter";

const SingleDatePicker = ({
  time,
  shift,
  date,
  isDisabled,
  lite = false,
  setDate,
  setShift,
}: {
  time?: string | undefined;
  shift?: string | undefined;
  date: Date | undefined;
  setDate: (date: Date) => void;
  isDisabled: boolean;
  lite?: boolean;
  setShift?: (shift: "before" | "after") => void;
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
        <MenuItem bg="none" w="fit-content">
          <ButtonGroup size="sm">
            <Button
              colorScheme={
                shift ? (shift === "before" ? "primary" : "gray") : "gray"
              }
              onClick={() => setShift && setShift("before")}
            >
              Before {time}
            </Button>
            <Button
              colorScheme={
                shift ? (shift === "after" ? "primary" : "gray") : "gray"
              }
              onClick={() => setShift && setShift("after")}
            >
              After {time}
            </Button>
          </ButtonGroup>
        </MenuItem>
        <MenuItem bg="none" p={0} w="fit-content">
          <Calendar onChange={(item) => setDate(item)} date={date} />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SingleDatePicker;
