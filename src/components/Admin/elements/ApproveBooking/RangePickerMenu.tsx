import { Menu, MenuButton, MenuList, IconButton } from "@chakra-ui/react";
import { BsPencilFill } from "react-icons/bs";
import { useState } from "react";
import { DateRange } from "react-date-range";

const RangePickerMenu = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
      //   color: "black",
    },
  ]);

  return (
    <Menu>
      <MenuButton as={IconButton}>
        <IconButton
          colorScheme="primary"
          //   bg="gray.50"
          //   _hover={{ bg: "gray.100" }}
          aria-label="Search database"
          icon={<BsPencilFill />}
        />
      </MenuButton>
      <MenuList borderRadius={10}>
        <DateRange
          editableDateInputs={true}
          onChange={(item) =>
            setState([
              {
                startDate: item.selection.startDate ?? new Date(),
                endDate: item.selection.endDate ?? new Date(),
                key: "selection",
              },
            ])
          }
          moveRangeOnFirstSelection={false}
          ranges={state}
        />
      </MenuList>
    </Menu>
  );
};

export default RangePickerMenu;
