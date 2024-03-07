import { Menu, MenuButton, MenuList, IconButton } from "@chakra-ui/react";
import { BsPencilFill } from "react-icons/bs";
import { useState } from "react";
import { DateRange } from "react-date-range";
import useApproveBookingStore from "../../../store/approveBookingStore";
import useEditBookingStore from "../../../store/editBookingStore";

interface Props {
  startDate: Date;
  endDate: Date;
  groupId: string;
  editBooking?: boolean;
}

const RangePickerMenu = ({
  startDate,
  endDate,
  groupId,
  editBooking = false,
}: Props) => {
  const setforApproval = useApproveBookingStore((s) => s.setSingleBooking);
  const setforEdit = useEditBookingStore((s) => s.setSingleBooking);

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
            if (editBooking) {
              setforEdit(groupId, "checkIn", item.selection.startDate!);
              setforEdit(groupId, "checkOut", item.selection.endDate!);
            } else {
              setforApproval(groupId, "checkIn", item.selection.startDate!);
              setforApproval(groupId, "checkOut", item.selection.endDate!);
            }
          }}
          moveRangeOnFirstSelection={false}
          ranges={state}
        />
      </MenuList>
    </Menu>
  );
};

export default RangePickerMenu;
