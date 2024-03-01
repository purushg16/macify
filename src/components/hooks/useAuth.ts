import { useMutation } from "@tanstack/react-query";
import { emailVerification, login, register } from "../api/auth-client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { APIError } from "../entities/Error";

const useRegister = () => {
  const navigate = useNavigate();
  const toast = useToast();

  return useMutation({
    mutationFn: register.register,

    onSuccess: (_data, variables) => {
      localStorage.setItem("emailToBeVerified", variables.email);
      navigate("/auth/verifyEmail");
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

const useVerifyEmail = () => {
  const navigate = useNavigate();
  const toast = useToast();

  return useMutation({
    mutationFn: emailVerification.verifyEmail,
    onSuccess: () => navigate("/admin"),
    onError: (err: AxiosError<APIError>) =>
      toast({
        title: err.response?.data?.error,
        status: "error",
        position: "top",
        duration: 3000,
      }),
  });
};

const useLogin = () => {
  const navigate = useNavigate();
  const toast = useToast();

  return useMutation({
    mutationFn: login.login,
    onSuccess: () => navigate("/admin"),
    onError: (err: AxiosError<APIError>) =>
      toast({
        title: err.response?.data?.error,
        status: "error",
        position: "top",
        duration: 3000,
      }),
  });
};

export { useRegister, useLogin, useVerifyEmail };
