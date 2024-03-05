import { Menu, MenuButton, MenuList, IconButton } from "@chakra-ui/react";
import { BsPencilFill } from "react-icons/bs";
import { useState } from "react";
import { DateRange } from "react-date-range";
import useApproveBookingStore from "../../../store/approveBooking";

interface Props {
  startDate: Date;
  endDate: Date;
}

const RangePickerMenu = ({ startDate, endDate }: Props) => {
  const setCheckIn = useApproveBookingStore((s) => s.setCheckIn);
  const setCheckOut = useApproveBookingStore((s) => s.setCheckOut);
  const [state, setState] = useState([
    {
      startDate: startDate,
      endDate: endDate,
      key: "selection",
    },
  ]);

  return (
    <Menu>
      <MenuButton as={IconButton}>
        <IconButton
          colorScheme="primary"
          aria-label="Search database"
          icon={<BsPencilFill />}
        />
      </MenuButton>
      <MenuList borderRadius={10}>
        <DateRange
          editableDateInputs={true}
          onChange={(item) => {
            setState([
              {
                startDate: item.selection.startDate ?? new Date(),
                endDate: item.selection.endDate ?? new Date(),
                key: "selection",
              },
            ]);
            setCheckIn(item.selection.startDate);
            setCheckOut(item.selection.endDate);
          }}
          moveRangeOnFirstSelection={false}
          ranges={state}
        />
      </MenuList>
    </Menu>
  );
};

export default RangePickerMenu;
