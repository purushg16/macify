import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import GuestGenderSelector from "./GuestGenderSelector";
import Guest from "../../../entities/Guest";
import useBookingGuestStore from "../../../store/bookingGuestStore";
import DatePicker from "react-datepicker";

const GuestDetailsHug = ({ guest, i }: { guest: Guest; i: number }) => {
  const editGuest = useBookingGuestStore((s) => s.editGuests);

  return (
    <Box textAlign="left" padding={2}>
      <Text size="sm">Guest {i}</Text>
      <Flex
        flexDir="column"
        gap={4}
        p={4}
        borderRadius={10}
        border="1px dashed"
        borderColor="primary.200"
      >
        <FormControl>
          <FormLabel fontSize="sm" color="gray">
            Guest Name
          </FormLabel>
          <Input
            name="Guest Name"
            placeholder="Guest Name"
            bg="#f4f4f4"
            value={guest.guestName}
            onChange={(e) => editGuest(guest._id!, "guestName", e.target.value)}
          />
        </FormControl>

        <SimpleGrid columns={2} maxW="100%" gap={4}>
          <FormControl>
            <FormLabel fontSize="sm" color="gray">
              Age
            </FormLabel>
            <Input
              placeholder="Age"
              bg="#f4f4f4"
              value={guest.age}
              onChange={(e) => editGuest(guest._id!, "age", e.target.value)}
            />
          </FormControl>

          <GuestGenderSelector gender={guest.gender!} id={guest._id!} />
        </SimpleGrid>

        <FormControl>
          <FormLabel fontSize="sm" color="gray">
            Date Of Birth
          </FormLabel>

          <DatePicker
            selected={guest.dob}
            onChange={(date) => editGuest(guest._id!, "dob", date!)}
            className="dob-picker"
          />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="sm" color="gray">
            Phone
          </FormLabel>
          <Input
            placeholder="Phone"
            bg="#f4f4f4"
            value={guest.phone || ""}
            onChange={(e) => editGuest(guest._id!, "phone", e.target.value)}
          />
        </FormControl>
      </Flex>
    </Box>
  );
};

export default GuestDetailsHug;
