import { Box, Button } from "@chakra-ui/react";
import { useGetAllBooking } from "../../../hooks/useAdmin";

interface Props {
  ids: string[];
  disabled: boolean;
}

const FetchDetailsButton = ({ ids, disabled }: Props) => {
  const { refetch, isRefetching } = useGetAllBooking({ ids: ids }, false);

  return (
    <Box textAlign="right" my={4}>
      <Button
        colorScheme="primary"
        isDisabled={disabled}
        isLoading={isRefetching}
        onClick={() => refetch()}
      >
        View
      </Button>
    </Box>
  );
};

export default FetchDetailsButton;
