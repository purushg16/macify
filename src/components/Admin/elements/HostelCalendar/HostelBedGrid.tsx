import { Box, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import HotelBedCard from "./HotelBedCard";
import { PropertyBed } from "../../../entities/property";
import Title from "../Title";
import { useState } from "react";
import BedBooking from "../../../entities/BedBookings";
import maleBed from "../../../../assets/Bed/hostel-male-bed.png";
import femaleBed from "../../../../assets/Bed/hostel-female-bed.png";
import availableBed from "../../../../assets/Bed/hostel-available-bed.png";
import Guest from "../../../entities/Guest";
import GuestDetailsModal from "../ApproveBooking/GuestDetailsModal";

const HostelBedGrid = ({
  beds,
  bookedBeds,
}: {
  beds: PropertyBed[];
  bookedBeds: BedBooking[];
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedGroupId, selectGroupId] = useState<string | undefined>(
    undefined
  );
  const occupiedBedIds = new Set(bookedBeds?.map((b) => b.bed));
  const [guest, setGuest] = useState<Guest | undefined>();

  const handleClick = (groupId: string, guest: Guest) => {
    selectGroupId(groupId);
    setGuest(guest);
  };

  const handleClose = () => {
    onClose();
    setGuest(undefined);
  };

  return (
    <Box p={4} bg="#f4f4f4" borderRadius={20}>
      <Title
        heading="Beds"
        subtitle="avaiable in Room"
        size="md"
        substitleSize="xs"
        align="left"
      />

      <SimpleGrid
        spacing={4}
        columns={3}
        mt={2}
        pt={8}
        borderTop="1px solid"
        borderColor="gray.100"
      >
        {beds.map((bed) => {
          const isOccupied = occupiedBedIds?.has(bed._id);
          const bookedBed = bookedBeds?.find((b) => b.bed === bed._id);
          const isSelectedGroup = bookedBed
            ? selectedGroupId === bookedBed.group
            : undefined;

          return (
            <HotelBedCard
              guest={bookedBed?.guests[0]}
              image={
                isOccupied
                  ? bookedBed?.guests[0].gender !== null &&
                    bookedBed?.guests[0].gender === "male"
                    ? maleBed
                    : bookedBed?.guests[0].gender !== null &&
                      bookedBed?.guests[0].gender === "female"
                    ? femaleBed
                    : ""
                  : availableBed
              }
              isOccupied={isOccupied}
              key={bed._id}
              bed={bed}
              groupId={bookedBed?.group}
              group={isSelectedGroup}
              defualt={!selectedGroupId}
              onClick={(groupId, guest) => handleClick(groupId!, guest)}
              gender={
                bookedBed?.guests[0].gender !== null
                  ? bookedBed?.guests[0].gender
                  : undefined
              }
              openModal={onOpen}
            />
          );
        })}
      </SimpleGrid>
      {guest && (
        <GuestDetailsModal
          guest={guest!}
          isOpen={isOpen}
          onClose={handleClose}
        />
      )}
    </Box>
  );
};

export default HostelBedGrid;
