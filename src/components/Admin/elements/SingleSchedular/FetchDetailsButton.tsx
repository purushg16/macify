import { Button, Icon } from "@chakra-ui/react";
import { useGetAllBooking } from "../../../hooks/useAdmin";
import { BookingTimelineInterface } from "../../../api/admin-client";
import { IoEyeOutline } from "react-icons/io5";

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
    <Button
      colorScheme="primary"
      rightIcon={<Icon as={IoEyeOutline} />}
      isDisabled={disabled}
      isLoading={isRefetching || isLoading}
      onClick={() => refetch().then((res) => callback(res.data))}
    >
      View
    </Button>
  );
};

export default FetchDetailsButton;
