import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { managerLogin } from "../api/auth-client";
import { AxiosError } from "axios";
import { APIError } from "../entities/Error";
import { useToast } from "@chakra-ui/react";
import { getAllManagerBookings, getAllProperty } from "../api/manager-client";
import { AllBookingsInterface } from "../api/admin-client";

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
    mutationFn: managerLogin.authorizationPost,
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

const useGetManagerProperties = () =>
  useQuery({
    queryKey: [],
    queryFn: getAllProperty.getRequest,
  });

const useGetManagerBookings = (ids: AllBookingsInterface) =>
  useQuery({
    queryKey: [],
    queryFn: () =>
      getAllManagerBookings.getRequest({
        params: {
          ids: ids,
        },
      }),
  });

export {
  useManagerLogin,
  useManagerChangePassword,
  useGetManagerProperties,
  useGetManagerBookings,
};
