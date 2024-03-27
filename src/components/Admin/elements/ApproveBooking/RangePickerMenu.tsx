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
      <MenuButton as={IconButton} bg="none" _hover={{ bg: "none" }}>
        <IconButton
          colorScheme="primary"
          aria-label="Search database"
          icon={<BsPencilFill />}
          size="sm"
        />
      </MenuButton>
      <MenuList borderRadius={10}>
        <DateRange
          minDate={new Date()}
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
              setforEdit(groupId, "roomId", "");
              setforEdit(groupId, "bedId", "");
            } else {
              setforApproval(groupId, "checkIn", item.selection.startDate!);
              setforApproval(groupId, "checkOut", item.selection.endDate!);
              setforEdit(groupId, "roomId", "");
              setforEdit(groupId, "bedId", "");
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
