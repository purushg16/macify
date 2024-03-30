import { useToast } from "@chakra-ui/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  AllBookingsInterface,
  BedBookingInterface,
  approveBooking,
  bookingsToApprove,
  createManager,
  editBooking,
  getAllBookings,
  getAllManagers,
  getBedBookings,
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
import APIClient from "../api/api-client";
import formatDateToYYYYMMDD from "../functions/dateToString";

export const useGetNotificationCount = (enabled: boolean) => {
  const getNotificationCount = new APIClient<number>("/booking/toApproveCount");
  return useQuery({
    queryKey: ["booking", "toApproveCount"],
    queryFn: getNotificationCount.getSingleItem,
    retry: 2,
    enabled: enabled,
    refetchOnWindowFocus: false,
  });
};

const useGetProfile = () =>
  useQuery({
    queryKey: ["user", "profile"],
    queryFn: getProfile,
    retry: 2,
    refetchOnWindowFocus: false,
    staleTime: ms("1hr"),
  });

const useAddManager = (then: (status: "success" | "error") => void) => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createManager.postRequest,

    onSuccess: () => {
      then("success");

      toast({
        title: "Manager created successfully",
        status: "success",
        position: "top",
        duration: 3000,
      });
      queryClient.invalidateQueries({ queryKey: ["manager", "allManager"] });
    },

    onError: (err: AxiosError<APIError>) => {
      then("error");
      toast({
        title: err.response?.data?.error,
        status: "error",
        position: "top",
        duration: 3000,
      });
    },
  });
};

const useGetBookingsToApprove = () =>
  useQuery({
    queryKey: ["booking", "bookingToApprove"],
    queryFn: bookingsToApprove.getRequest,
    retry: 2,
    refetchOnWindowFocus: false,
    // staleTime: ms("5m"),
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
            bookings: !booking.property.rentWithin
              ? [{ bookingId: booking.bookings[0]._id }]
              : undefined,
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
    checkIn: formatDateToYYYYMMDD(store?.checkIn),
    checkOut: formatDateToYYYYMMDD(store?.checkOut),
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
      queryClient.invalidateQueries({
        queryKey: ["booking", "toApproveCount"],
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
      queryClient.invalidateQueries({
        queryKey: ["booking", "toApproveCount"],
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
        });
        return res;
      }),
    enabled: enabled,
    retry: 2,
    refetchOnWindowFocus: false,
  });
};

const useEditBooking = (
  bookingId: string | undefined,
  callback: () => void
) => {
  const toast = useToast();
  const queryClient = useQueryClient();
  const entry = useEditBookingStore((s) => s.editBookingEntries)?.find(
    (entry) => entry.bookingId === bookingId
  );

  const postDate = {
    bookingId: bookingId,
    propertyId: entry?.propertyId,
    checkIn: formatDateToYYYYMMDD(entry?.checkIn),
    checkOut: formatDateToYYYYMMDD(entry?.checkOut),
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
      queryClient.invalidateQueries({
        queryKey: ["admin", "upcomingCheckIns"],
      });
      queryClient.invalidateQueries({
        queryKey: ["admin", "upcomingCheckOuts"],
      });
      queryClient.invalidateQueries({
        queryKey: ["admin", "currentHosting"],
      });
      queryClient.invalidateQueries({
        queryKey: ["booking", "toApproveCount"],
      });
      callback();
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
    queryKey: ["booking", "allBookings", ids.ids],
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
  });
};

const useGetBedBooking = (
  { roomId, checkIn, shift, propertyId }: BedBookingInterface,
  enabled: boolean
) => {
  return useQuery({
    queryKey: ["booking", "allBookings", roomId, checkIn],
    queryFn: () =>
      getBedBookings
        .getRequest({
          params: {
            roomId: roomId,
            checkIn: checkIn,
            propertyId: propertyId,
            shift: shift,
          },
        })
        .then((res) => res.data),
    retry: 2,
    enabled: enabled,
    refetchOnWindowFocus: false,
  });
};

export {
  useGetProfile,
  useAddManager,
  useGetBookingsToApprove,
  useGetSingleBooking,
  useGetBedBooking,
  useGetSingleBookingToApprove,
  useApproveBooking,
  useGetAllManagers,
  useRejectBooking,
  useEditBooking,
  useGetAllBooking,
};
