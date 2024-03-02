import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { managerLogin } from "../api/auth-client";
import { AxiosError } from "axios";
import { APIError } from "../entities/Error";
import { useToast } from "@chakra-ui/react";

const useManagerLogin = () => {
  const navigate = useNavigate();
  const toast = useToast();

  return useMutation({
    mutationFn: managerLogin.authorizationPost,
    onSuccess: (data) => {
      localStorage.setItem("manager", "true");
      if (data.data.firstLogin) navigate("/manager/changePassword");
      else navigate("/manager");
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

export { useManagerLogin, useManagerChangePassword };
