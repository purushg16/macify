import { useMutation } from "@tanstack/react-query";
import { emailVerification, adminLogin, register } from "../api/auth-client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { APIError } from "../entities/Error";

const useAdminRegister = () => {
  const navigate = useNavigate();
  const toast = useToast();

  return useMutation({
    mutationFn: register.postRequest,

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

const useAdminVerifyEmail = () => {
  const navigate = useNavigate();
  const toast = useToast();

  return useMutation({
    mutationFn: emailVerification.authorizationPost,
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

const useAdminLogin = () => {
  const navigate = useNavigate();
  const toast = useToast();

  return useMutation({
    mutationFn: adminLogin.authorizationPost,
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

export {
  useAdminRegister as useRegister,
  useAdminLogin as useLogin,
  useAdminVerifyEmail as useVerifyEmail,
};
