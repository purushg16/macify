import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { managerChangePassword, managerLogin } from "../api/auth-client";
import { AxiosError } from "axios";
import { APIError } from "../entities/Error";
import { useToast } from "@chakra-ui/react";
import {
  getAllManagerBookings,
  getAllProperty,
  getCurrentHostings,
  getUpcomingCheckOuts,
  getUpcomingCheckins,
} from "../api/manager-client";
import { AllBookingsInterface } from "../api/admin-client";
import ms from "ms";

const useManagerLogin = () => {
  const navigate = useNavigate();
  const toast = useToast();

  return useMutation({
    mutationFn: managerLogin.authorizationPost,
    onSuccess: (data) => {
      localStorage.setItem("manager", "true");
      if (data.data.firstLogin === false) navigate("/manager");
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

const useManagerChangePassword = () => {
  const navigate = useNavigate();
  const toast = useToast();

  return useMutation({
    mutationFn: managerChangePassword.postRequest,
    onSuccess: () => navigate("/manager"),
    onError: (err: AxiosError<APIError>) =>
      toast({
        title: err.response?.data?.error,
        status: "error",
        position: "top",
        duration: 3000,
      }),
  });
};

const useGetManagerCurrentHostings = (enabled: boolean) =>
  useQuery({
    queryKey: ["manager", "currentHostings"],
    queryFn: getCurrentHostings,

    enabled: enabled,
    staleTime: ms("5m"),
    retry: 2,
    refetchOnWindowFocus: false,
  });

const useGetManagerUpcomingCheckIns = (enabled: boolean) =>
  useQuery({
    queryKey: ["manager", "upcomingCheckIns"],
    queryFn: getUpcomingCheckins,

    enabled: enabled,
    staleTime: ms("5m"),
    retry: 2,
    refetchOnWindowFocus: false,
  });

const useGetManagerUpcomingCheckOuts = (enabled: boolean) =>
  useQuery({
    queryKey: ["manager", "upcomingCheckOuts"],
    queryFn: getUpcomingCheckOuts,

    enabled: enabled,
    staleTime: ms("5m"),
    retry: 2,
    refetchOnWindowFocus: false,
  });

const useGetManagerProperties = (enabled: boolean) =>
  useQuery({
    queryKey: ["manager", "properties"],
    queryFn: getAllProperty.getRequest,
    enabled: enabled,
    staleTime: ms("5m"),
    retry: 2,
    refetchOnWindowFocus: false,
  });

const useGetManagerBookings = (ids: AllBookingsInterface, enabled: boolean) =>
  useQuery({
    queryKey: ["manager", "bookings", ids.ids],
    queryFn: () =>
      getAllManagerBookings
        .getSingleItem({
          params: {
            ids: ids,
          },
        })
        .then((res) => res),
    enabled: enabled,
    retry: 2,
    refetchOnWindowFocus: false,
  });

export {
  useManagerLogin,
  useManagerChangePassword,
  useGetManagerProperties,
  useGetManagerBookings,
  useGetManagerCurrentHostings,
  useGetManagerUpcomingCheckOuts,
  useGetManagerUpcomingCheckIns,
};
