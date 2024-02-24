import {
  Button,
  HStack,
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
import { Link } from "react-router-dom";
import AnimateMove from "../../../motions/Move";
import useAddPropertyStore from "../../../store/AddProperty/addPropertyBasicStore";

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
  const checkInTime = useAddPropertyStore((s) => s.checkInTime);
  const setCheckInTime = useAddPropertyStore((s) => s.setCheckInTime);
  const checkOutTime = useAddPropertyStore((s) => s.checkOutTime);
  const setCheckOutTime = useAddPropertyStore((s) => s.setCheckOutTime);

  return (
    <>
      <AnimateMove delay={0.2}>
        <Image src={img} alt="checking" />
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <AddTitle
          heading="Reporting Time Details"
          subtitle="Enter reporting time details for this property"
        />
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <VStack gap={4}>
          <InputGroup>
            <Input
              bg="gray.50"
              placeholder="CheckIn Time"
              size="md"
              value={checkInTime || ""}
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
                    <MenuItem key={i} onClick={() => setCheckInTime(time)}>
                      {time}
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
              value={checkOutTime || ""}
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
                    <MenuItem key={i} onClick={() => setCheckOutTime(time)}>
                      {time}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </InputRightElement>
          </InputGroup>
        </VStack>
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <HStack>
          <Link to="/admin/add/property/3">
            <Button id="extra">Back</Button>
          </Link>
          <Link to="/admin/add/property/5">
            <Button id="extra" colorScheme="primary">
              Next
            </Button>
          </Link>
        </HStack>
      </AnimateMove>
    </>
  );
};

export default CheckingTimePage;
