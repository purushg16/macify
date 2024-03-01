import { useMutation } from "@tanstack/react-query";
import { emailVerification, login, register } from "../api/auth-client";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: register.register,

    onSuccess: (_data, variables) => {
      localStorage.setItem("emailToBeVerified", variables.email);
      navigate("/auth/verifyEmail");
    },

    onError: (err) => {
      console.log(err);
    },
  });
};

const useVerifyEmail = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: emailVerification.verifyEmail,
    onSuccess: () => navigate("/admin"),
    onError: (err) => console.log(err),
  });
};

const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: login.login,
    onSuccess: () => navigate("/admin"),
    onError: (err) => console.log(err),
  });
};

export { useRegister, useLogin, useVerifyEmail };
