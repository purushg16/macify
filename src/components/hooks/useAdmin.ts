import { useToast } from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  AllBookingsInterface,
  approveBooking,
  bookingsToApprove,
  createManager,
  editBooking,
  getAllBookings,
  getSinglebookingToApprove,
  rejectBooking,
} from "../api/admin-client";
import { APIError } from "../entities/Error";
import ms from "ms";

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
    retry: 2,
    refetchOnWindowFocus: false,
    staleTime: ms("5m"),
  });

const useGetSingleBookingToApprove = (groupId: string) =>
  useQuery({
    queryKey: ["booking", "getGroupBooking", groupId],
    queryFn: () =>
      getSinglebookingToApprove
        .getRequest({
          params: {
            groupId: groupId,
          },
        })
        .then((res) => res.data[0]),
    retry: 2,
    refetchOnWindowFocus: false,
    staleTime: ms("5m"),
  });

const useApproveBooking = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: approveBooking.postRequest,

    onSuccess: () =>
      toast({
        title: "Booking Approved Successfuly",
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

const useEditBooking = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: editBooking.postRequest,

    onSuccess: () =>
      toast({
        title: "Booking updated successfully",
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

const useGetAllBooking = (ids: AllBookingsInterface) => {
  return useQuery({
    queryKey: [],
    queryFn: () =>
      getAllBookings.getRequest({
        params: {
          ids: ids,
        },
      }),
    retry: 2,
    refetchOnWindowFocus: false,
  });
};

export {
  useAddManager,
  useGetBookingsToApprove,
  useGetSingleBookingToApprove,
  useApproveBooking,
  useRejectBooking,
  useEditBooking,
  useGetAllBooking,
};
