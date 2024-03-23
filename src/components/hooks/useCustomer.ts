import { useMutation } from "@tanstack/react-query";
import { createBooking } from "../api/customer-client";
import { useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { APIError } from "../entities/Error";
import useBookingConverter from "./useBookingConverter";
import { useNavigate, useParams } from "react-router-dom";

const useCustomerBooking = () => {
  const propertyId = useParams().propertyId;
  const toast = useToast();
  const navigate = useNavigate();
  const postData = useBookingConverter(propertyId!);

  return useMutation({
    mutationFn: () => createBooking(postData),

    onSuccess: () => {
      toast({
        title: "Property booked successfully",
        status: "success",
        position: "top",
        duration: 3000,
      });
      navigate("/booking/" + propertyId + "/7");
    },

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
