import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsClock } from "react-icons/bs";
import { timeList } from "../../../data/timeList";
import useAddPropertyStore from "../../../store/AddProperty/addPropertyBasicStore";

const CheckInTimePicker = () => {
  const checkInTime = useAddPropertyStore((s) => s.checkIn);
  const setCheckInTime = useAddPropertyStore((s) => s.setCheckInTime);
  return (
    <Menu placement="top">
      <MenuButton textAlign="left" w="100%" as={Button} rightIcon={<BsClock />}>
        {checkInTime}
      </MenuButton>
      <MenuList borderRadius={20} p={2} maxH={200} overflowY="scroll">
        {timeList.map((time, i) => (
          <MenuItem key={i} onClick={() => setCheckInTime(time)}>
            {time}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CheckInTimePicker;
