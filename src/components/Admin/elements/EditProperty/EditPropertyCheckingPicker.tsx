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
  Text,
  Box,
} from "@chakra-ui/react";
import { BsClockFill } from "react-icons/bs";
import { timeList } from "../../../data/timeList";

interface Props {
  zindex: number;
  title: string;
  time: string;
  onSelect: (time: string) => void;
}

const CheckingTimePicker = ({ title, time, onSelect, zindex }: Props) => {
  return (
    <Box>
      <Text mb={2} fontSize="sm" color="gray">
        {title}
      </Text>
      <InputGroup w="max-content" zIndex={zindex}>
        <Input bg="white" placeholder="CheckIn Time" value={time} />
        <InputRightElement cursor="pointer" bg="gray.50" borderRadius={10}>
          <Menu placement="bottom">
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
                <MenuItem key={i} onClick={() => onSelect(time)}>
                  {time}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default CheckingTimePicker;
