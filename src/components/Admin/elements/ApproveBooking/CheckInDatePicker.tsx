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
import { BsClockFill } from "react-icons/bs";
import { timeList } from "../../../data/timeList";

const CheckInDatePicker = () => {
  return (
    <InputGroup maxW="70%" zIndex={4}>
      <Input bg="gray.50" placeholder="CheckIn Time" size="md" />
      <InputRightElement cursor="pointer">
        <Menu placement="top">
          <MenuButton
            as={Button}
            bg="none"
            p={0}
            _hover={{ bg: "none" }}
            _active={{ bg: "none", outline: "none", border: "none" }}
          >
            <Icon as={BsClockFill} />
          </MenuButton>
          <MenuList borderRadius={20} p={2} maxH={200} overflowY="scroll">
            {timeList.map((time, i) => (
              <MenuItem key={i}>{time}</MenuItem>
            ))}
          </MenuList>
        </Menu>
      </InputRightElement>
    </InputGroup>
  );
};

export default CheckInDatePicker;
