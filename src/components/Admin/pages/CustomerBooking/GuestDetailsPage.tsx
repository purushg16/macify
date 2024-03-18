import { Flex } from "@chakra-ui/react";
import GuestDetailsHug from "../../elements/Booking/GuestDetailsHug";

const GuestDetailsPage = () => {
  return (
    <Flex
      gap={4}
      flexDir="column"
      h="80%"
      maxH="80%"
      bg="#E4FEE4"
      overflowY="auto"
      borderRadius={20}
      p={4}
    >
      <GuestDetailsHug />
      <GuestDetailsHug />
      <GuestDetailsHug />
    </Flex>
  );
};

export default GuestDetailsPage;
