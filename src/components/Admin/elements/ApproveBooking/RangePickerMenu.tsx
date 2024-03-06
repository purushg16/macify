import { Menu, MenuButton, MenuList, IconButton } from "@chakra-ui/react";
import { BsPencilFill } from "react-icons/bs";
import { useState } from "react";
import { DateRange } from "react-date-range";
import useApproveBookingStore from "../../../store/approveBookingStore";

interface Props {
  startDate: Date;
  endDate: Date;
  groupId: string;
}

const RangePickerMenu = ({ startDate, endDate, groupId }: Props) => {
  const set = useApproveBookingStore((s) => s.setSingleBooking);

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
            set(groupId, { checkIn: item.selection.startDate });
            set(groupId, { checkOut: item.selection.endDate });
          }}
          moveRangeOnFirstSelection={false}
          ranges={state}
        />
      </MenuList>
    </Menu>
  );
};

export default RangePickerMenu;
