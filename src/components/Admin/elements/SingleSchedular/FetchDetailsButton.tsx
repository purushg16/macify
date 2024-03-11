import { Box, Button } from "@chakra-ui/react";
import { useGetAllBooking } from "../../../hooks/useAdmin";
import { BookingTimelineInterface } from "../../../api/admin-client";

interface Props {
  ids: string[];
  disabled: boolean;
  callback: (b: BookingTimelineInterface | undefined) => void;
}

const FetchDetailsButton = ({ ids, disabled, callback }: Props) => {
  const { refetch, isLoading, isRefetching } = useGetAllBooking(
    { ids: ids },
    false
  );

  return (
    <Box textAlign="right" my={4}>
      <Button
        colorScheme="primary"
        isDisabled={disabled}
        isLoading={isRefetching || isLoading}
        onClick={() => refetch().then((res) => callback(res.data))}
      >
        View
      </Button>
    </Box>
  );
};

export default FetchDetailsButton;
