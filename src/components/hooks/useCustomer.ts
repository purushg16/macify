import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBooking } from "../api/customer-client";
import { useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { APIError } from "../entities/Error";
import useBookingConverter from "./useBookingConverter";
import { useNavigate, useParams } from "react-router-dom";
import { PropertyType } from "../store/AddProperty/addPropertyBasicStore";
import useBookingGuestStore from "../store/bookingGuestStore";

const useCustomerBooking = (
  propertyType: PropertyType,
  rentWithin: boolean
) => {
  const propertyId = useParams().propertyId;
  const toast = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const guests = useBookingGuestStore((s) => s.guests);
  const postData = useBookingConverter(
    propertyId!,
    propertyType,
    rentWithin,
    guests
  );

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

      queryClient.invalidateQueries({
        queryKey: ["booking", "bookingToApprove"],
      });
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
