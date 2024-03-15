import {
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import GroupBooking from "../../entities/GroupBooking";
import Title from "./Title";
import DateFormatter from "../../functions/dateFormatter";
import { CiCircleRemove } from "react-icons/ci";
import { TiTickOutline } from "react-icons/ti";
import { useRejectBooking } from "../../hooks/useAdmin";

const NotificationCard = ({ booking }: { booking: GroupBooking }) => {
  const navigate = useNavigate();
  const { mutate, isPending } = useRejectBooking();

  return (
    <Flex
      gap={4}
      flexDir="column"
      p={4}
      borderRadius={20}
      border="1px solid"
      borderColor="gray.100"
    >
      <Flex pb={8} borderBottom="1px solid" borderColor="gray.100">
        <Title
          heading={booking.property.propertyName}
          subtitle="25 mins ago"
          align="left"
          size="lg"
          substitleSize="xs"
        />
        <Spacer />
        <HStack>
          <IconButton
            bg="red.100"
            _hover={{ bg: "red.200" }}
            aria-label="del"
            icon={<Icon as={CiCircleRemove} />}
            isLoading={isPending}
            onClick={() => mutate({ groupId: booking._id })}
          />
          <IconButton
            bg="primary.100"
            _hover={{ bg: "primary.200" }}
            aria-label="del"
            icon={<Icon as={TiTickOutline} />}
            onClick={() => navigate(`/admin/approveBooking/${booking._id}`)}
          />
        </HStack>
      </Flex>

      <SimpleGrid columns={2} gap={4}>
        <Box p={4} bg="#f4f4f4" borderRadius={10}>
          <Heading fontSize="lg">
            {DateFormatter(new Date(booking.bookings[0].checkIn))}
          </Heading>
          <Text color="gray" fontSize="xs">
            Check-In
          </Text>
        </Box>
        <Box p={4} bg="#f4f4f4" borderRadius={10}>
          <Heading fontSize="lg"> {booking.guestCount} </Heading>
          <Text color="gray" fontSize="xs">
            Guest
          </Text>
        </Box>
      </SimpleGrid>
    </Flex>
  );
};

export default NotificationCard;
