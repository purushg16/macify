import { useToast } from "@chakra-ui/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  AllBookingsInterface,
  approveBooking,
  bookingsToApprove,
  createManager,
  editBooking,
  getAllBookings,
  getAllManagers,
  getProfile,
  getSIngleBooking,
  getSinglebookingToApprove,
  rejectBooking,
} from "../api/admin-client";
import { APIError } from "../entities/Error";
import ms from "ms";
import useApproveBookingStore, {
  ApproveBookingProperties,
} from "../store/approveBookingStore";
import ApproveBooking from "../entities/approveBooking";
import { useNavigate } from "react-router-dom";
import useEditBookingStore from "../store/editBookingStore";
import EditBooking from "../entities/editBooking";

const useGetProfile = () =>
  useQuery({
    queryKey: ["user", "profile"],
    queryFn: getProfile,
    retry: 2,
    refetchOnWindowFocus: false,
    staleTime: ms("1hr"),
  });

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

const useGetSingleBookingToApprove = (groupId: string) => {
  const store = useApproveBookingStore((s) => s.singlBooking);
  const append = useApproveBookingStore((s) => s.appendBookings);
  return useQuery({
    queryKey: ["booking", "getGroupBooking", groupId],
    queryFn: () =>
      getSinglebookingToApprove
        .getRequest({
          params: {
            groupId: groupId,
          },
        })
        .then((res) => {
          const booking = res.data[0];

          const singleBooking = {
            groupId: groupId,
            propertyId: booking.property._id,
            bookings: undefined,
            checkIn: new Date(booking.bookings[0].checkIn),
            checkOut: new Date(booking.bookings[0].checkOut),
            paid: undefined,
            balance: undefined,
          } as ApproveBookingProperties;
          if (!store || store?.findIndex((s) => s.groupId === groupId) === -1)
            append(singleBooking);
          return res.data[0];
        }),
    retry: 2,
    refetchOnWindowFocus: false,
    staleTime: ms("5m"),
  });
};

const useGetAllManagers = () =>
  useQuery({
    queryKey: ["manager", "allManager"],
    queryFn: getAllManagers,
    staleTime: ms("5m"),
    refetchOnWindowFocus: false,
  });

const useApproveBooking = (groupId: string) => {
  const toast = useToast();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const store = useApproveBookingStore((s) => s.singlBooking)?.find(
    (b) => b.groupId === groupId
  );

  const remove = useApproveBookingStore((s) => s.removeBooking);

  const postValue = {
    propertyId: store?.propertyId,
    groupId: store?.groupId,
    bookings: store?.bookings,
    checkIn: store?.checkIn,
    checkOut: store?.checkOut,
    paid: store?.paid,
    balance: store?.balance,
  } as ApproveBooking;
  return useMutation({
    mutationFn: () => approveBooking.postRequest(postValue),

    onSuccess: () => {
      toast({
        title: "Booking Approved Successfuly",
        status: "success",
        position: "top",
        duration: 3000,
      });
      remove(groupId);
      queryClient.invalidateQueries({
        queryKey: ["booking", "bookingToApprove"],
      });
      navigate("/admin/notifications");
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

const useRejectBooking = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const remove = useApproveBookingStore((s) => s.removeBooking);
  return useMutation({
    mutationFn: rejectBooking.postRequest,

    onSuccess: (_data, variables) => {
      toast({
        title: "Booking rejected successfully",
        status: "success",
        position: "top",
        duration: 3000,
      });

      remove(variables.groupId);
      queryClient.invalidateQueries({
        queryKey: ["booking", "bookingToApprove"],
      });
      navigate("/admin/notifications");
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

const useGetSingleBooking = (bookingId: string, enabled: boolean) => {
  const appendEditBooking = useEditBookingStore(
    (s) => s.setEditBookingsEntries
  );
  return useQuery({
    queryKey: ["booking", "getSingleBooking", bookingId],
    queryFn: () =>
      getSIngleBooking({
        params: {
          bookingId: bookingId,
        },
      }).then((res) => {
        const booking = res.data[0];
        appendEditBooking({
          bookingId: bookingId,
          checkIn: new Date(booking.checkIn),
          checkOut: new Date(booking.checkOut),
          propertyId: booking.property._id,
          roomId: booking.room,
          bedId: booking.bed,
        });
        return res;
      }),
    enabled: enabled,
    retry: 2,
    refetchOnWindowFocus: false,
  });
};

const useEditBooking = (bookingId: string | undefined) => {
  const toast = useToast();
  const queryClient = useQueryClient();
  const entry = useEditBookingStore((s) => s.editBookingEntries)?.find(
    (entry) => entry.bookingId === bookingId
  );

  const postDate = {
    bookingId: bookingId,
    propertyId: entry?.propertyId,
    checkIn: entry?.checkIn,
    checkOut: entry?.checkOut,
    bedId: entry?.bedId || null,
    roomId: entry?.roomId || null,
  } as EditBooking;

  return useMutation({
    mutationFn: () => editBooking.postRequest(postDate),

    onSuccess: () => {
      toast({
        title: "Booking updated successfully",
        status: "success",
        position: "top",
        duration: 3000,
      });
      queryClient.invalidateQueries({ queryKey: ["booking", "allBookings"] });
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

const useGetAllBooking = (ids: AllBookingsInterface, enabled?: boolean) => {
  return useQuery({
    queryKey: ["booking", "allBookings"],
    queryFn: () =>
      getAllBookings
        .getSingleItem({
          params: {
            ids: ids.ids,
          },
        })
        .then((res) => res),
    retry: 2,
    enabled: enabled,
    refetchOnWindowFocus: false,
    staleTime: ms("24hr"),
  });
};

export {
  useGetProfile,
  useAddManager,
  useGetBookingsToApprove,
  useGetSingleBooking,
  useGetSingleBookingToApprove,
  useApproveBooking,
  useGetAllManagers,
  useRejectBooking,
  useEditBooking,
  useGetAllBooking,
};
