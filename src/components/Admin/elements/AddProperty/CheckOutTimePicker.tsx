import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsClock } from "react-icons/bs";
import { timeList } from "../../../data/timeList";
import useAddPropertyStore from "../../../store/AddProperty/addPropertyBasicStore";

const CheckOutTimePicker = () => {
  const checkOutTime = useAddPropertyStore((s) => s.checkOut);
  const setCheckOutTime = useAddPropertyStore((s) => s.setCheckOutTime);
  return (
    <Menu placement="top">
      <MenuButton
        w="100%"
        textAlign="left"
        as={Button}
        rightIcon={<Icon as={BsClock} transform="rotate(-180deg)" />}
      >
        {checkOutTime}
      </MenuButton>
      <MenuList borderRadius={20} p={2} maxH={200} overflowY="scroll">
        {timeList.map((time, i) => (
          <MenuItem key={i} onClick={() => setCheckOutTime(time)}>
            {time}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CheckOutTimePicker;
