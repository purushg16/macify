import {
  Button,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from "@chakra-ui/react";
import { BsClockFill } from "react-icons/bs";
import img from "../../../../assets/app/checking-in.png";
import AddTitle from "../../elements/AddTitle";
import { useState } from "react";

const timeList = [
  "00:00",
  "00:30",
  "01:00",
  "01:30",
  "02:00",
  "02:30",
  "03:00",
  "03:30",
  "04:00",
  "04:30",
  "05:00",
  "05:30",
  "06:00",
  "06:30",
  "07:00",
  "07:30",
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
  "23:30",
];

const CheckingTimePage = () => {
  const [checkIn, setCheckIn] = useState<string | undefined>(undefined);
  const [checkOut, setCheckOut] = useState<string | undefined>(undefined);

  return (
    <>
      <Image src={img} alt="checking" />

      <AddTitle
        heading="Reporting Time Details"
        subtitle="Enter reporting time details for this property"
      />

      <VStack gap={4}>
        <InputGroup>
          <Input
            bg="gray.50"
            placeholder="CheckIn Time"
            size="md"
            value={checkIn}
          />
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
                  <MenuItem key={i} onClick={() => setCheckIn(time)}>
                    {" "}
                    {time}{" "}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </InputRightElement>
        </InputGroup>

        <InputGroup>
          <Input
            bg="gray.50"
            placeholder="CheckOut Time"
            size="md"
            value={checkOut}
          />
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
                  <MenuItem key={i} onClick={() => setCheckOut(time)}>
                    {" "}
                    {time}{" "}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </InputRightElement>
        </InputGroup>
      </VStack>
    </>
  );
};

export default CheckingTimePage;
