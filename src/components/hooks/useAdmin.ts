import { useToast } from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  approveBooking,
  bookingsToApprove,
  createManager,
  rejectBooking,
} from "../api/admin-client";
import { APIError } from "../entities/Error";

const useAddManager = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: createManager.postRequest,

    onSuccess: () =>
      toast({
        title: "Manager created successfully",
        status: "success",
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

const useGetBookingsToApprove = () =>
  useQuery({
    queryKey: ["booking", "bookingToApprove"],
    queryFn: bookingsToApprove.getRequest,
  });

const useApproveBooking = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: approveBooking.postRequest,

    onSuccess: () =>
      toast({
        title: "Property booked successfully",
        status: "success",
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

const useRejectBooking = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: rejectBooking.postRequest,

    onSuccess: () =>
      toast({
        title: "Booking rejected successfully",
        status: "success",
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

export {
  useAddManager,
  useGetBookingsToApprove,
  useApproveBooking,
  useRejectBooking,
};
