import { useMutation } from "@tanstack/react-query";
import { createBooking } from "../api/customer-client";
import { useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { APIError } from "../entities/Error";

const useCustomerBooking = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: createBooking,

    onSuccess: () =>
      toast({
        title: "Property booked successfully",
        status: "error",
        position: "top",
        duration: 3000,
      }),

    onError: (err: AxiosError<APIError>) =>
      toast({
        title: err.response?.data?.error,
        status: "error",
        position: "top",
        duration: 3000,
      }),
  });
};
export { useCustomerBooking };
