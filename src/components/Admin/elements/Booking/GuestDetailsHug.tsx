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
import GuestIdProofTypeSelector from "./GuestIdProofTypeSelector";

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
          <FormLabel m={0} fontSize="xs" color="gray">
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
          <FormLabel m={0} fontSize="xs" color="gray">
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
            <FormLabel m={0} fontSize="xs" color="gray">
              Age
            </FormLabel>
            <Input
              type="number"
              placeholder="Age"
              bg="#f4f4f4"
              value={guest.age || parseInt("")}
              onChange={(e) => editGuest(guest.id!, "age", e.target.value)}
            />
          </FormControl>

          <GuestGenderSelector gender={guest.gender!} id={guest.id!} />
        </SimpleGrid>

        <FormControl>
          <FormLabel m={0} fontSize="xs" color="gray">
            Phone
          </FormLabel>
          <Input
            type="number"
            placeholder="Phone"
            bg="#f4f4f4"
            value={guest.phone || ""}
            onChange={(e) => editGuest(guest.id!, "phone", e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel m={0} fontSize="xs" color="gray">
            Id Proof Type
          </FormLabel>
          <GuestIdProofTypeSelector id={guest.id!} type={guest.idProofType!} />
        </FormControl>
      </Flex>
    </Box>
  );
};

export default GuestDetailsHug;
