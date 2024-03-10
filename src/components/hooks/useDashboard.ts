import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { APIError } from "../entities/Error";
import {
  getCurrentHostings,
  getUpcomingCheckOuts,
  getUpcomingCheckins,
} from "../api/admin-client";

const useAdminCurrentHosting = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: getCurrentHostings,

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

const useAdminUpcomingCheckIns = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: getUpcomingCheckins,

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

const useAdminUpcomingCheckOuts = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: getUpcomingCheckOuts,

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

export {
  useAdminCurrentHosting,
  useAdminUpcomingCheckIns,
  useAdminUpcomingCheckOuts,
};
