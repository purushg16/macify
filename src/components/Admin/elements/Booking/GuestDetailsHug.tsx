import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Guest from "../../../entities/Guest";
import useBookingGuestStore from "../../../store/bookingGuestStore";
import SingleDatePicker from "../HostelCalendar/HostelDatePicker";
import GuestGenderSelector from "./GuestGenderSelector";

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
            onChange={(e) => editGuest(guest.id!, "guestName", e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="sm" color="gray">
            Date Of Birth
          </FormLabel>
          <SingleDatePicker
            date={guest.dob}
            setDate={(date) => editGuest(guest.id!, "dob", date!)}
            isDisabled={false}
            lite
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
              onChange={(e) => editGuest(guest.id!, "age", e.target.value)}
            />
          </FormControl>

          <GuestGenderSelector gender={guest.gender!} id={guest.id!} />
        </SimpleGrid>

        <FormControl>
          <FormLabel fontSize="sm" color="gray">
            Phone
          </FormLabel>
          <Input
            placeholder="Phone"
            bg="#f4f4f4"
            value={guest.phone || ""}
            onChange={(e) => editGuest(guest.id!, "phone", e.target.value)}
          />
        </FormControl>
      </Flex>
    </Box>
  );
};

export default GuestDetailsHug;
