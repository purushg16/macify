import { Box, Button, HStack, List, ListItem, VStack } from "@chakra-ui/react";
import AnimateMove from "../../../motions/Move";
import BookingGuestCard from "../../elements/Booking/BookingGuestCard";
import Title from "../../elements/Title";
import { Link } from "react-router-dom";

const GuestPreviewPage = () => {
  return (
    <>
      <Box textAlign="left" bg="gray.50" borderRadius={20} w="100%">
        <List
          py={4}
          mx={6}
          spacing={4}
          my={4}
          minH={350}
          maxH={350}
          overflowY="auto"
          overflowX="hidden"
          borderRadius={10}
          css={{
            "&::-webkit-scrollbar": {
              width: "1px", // Set the width of the scrollbar
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "1px", // Set the border radius of the thumb
            },
            "&::-webkit-scrollbar-track": {
              borderRadius: "1px", // Set the border radius of the track
            },
          }}
        >
          <ListItem>
            <AnimateMove delay={0.2} direction="x">
              <BookingGuestCard guestName="Suki" gender="female" age={20} />
            </AnimateMove>
          </ListItem>
          <ListItem>
            <AnimateMove delay={0.4} direction="x">
              <BookingGuestCard guestName="Aabha" gender="male" age={20} />
            </AnimateMove>
          </ListItem>
          <ListItem>
            <AnimateMove delay={0.6} direction="x">
              <BookingGuestCard guestName="Aang" gender="male" age={16} />
            </AnimateMove>
          </ListItem>
        </List>
      </Box>
      <VStack gap={4}>
        <Title heading="Guest Details" subtitle="Preview your homies" />
        <HStack>
          <Link to="/booking/2">
            <Button> Manage </Button>
          </Link>
          <Link to="/booking/4">
            <Button colorScheme="primary"> Continue </Button>
          </Link>
        </HStack>
      </VStack>
    </>
  );
};

export default GuestPreviewPage;
