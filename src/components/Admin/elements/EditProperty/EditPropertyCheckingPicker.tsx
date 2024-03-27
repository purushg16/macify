import {
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
import railwayTimeConverter from "../../../functions/railwayTimeConverter";

interface Props {
  zindex: number;
  title: string;
  time: string;
  onSelect: (time: string) => void;
}

const CheckingTimePicker = ({ title, time, onSelect }: Props) => {
  return (
    <Box w="100%">
      <Text mb={2} fontSize="xs" color="gray">
        {title}
      </Text>
      <Menu placement="bottom">
        <MenuButton
          textAlign="left"
          w="100%"
          as={Button}
          bg="white"
          _hover={{ bg: "white" }}
          _active={{ bg: "white" }}
          rightIcon={<Icon as={BsClockFill} />}
        >
          {time}
        </MenuButton>
        <MenuList borderRadius={20} p={2} maxH={200} overflowY="scroll">
          {timeList.map((time, i) => (
            <MenuItem
              key={i}
              onClick={() => onSelect(railwayTimeConverter(time))}
            >
              {time}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default CheckingTimePicker;
