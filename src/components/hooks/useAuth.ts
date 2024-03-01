import { useMutation } from "@tanstack/react-query";
import { emailVerification, login, register } from "../api/auth-client";

const useRegister = () => {
  return useMutation({
    mutationFn: register.register,
  });
};

const useLogin = () => {
  return useMutation({
    mutationFn: login.login,
  });
};

const useVerifyEmail = () => {
  return useMutation({
    mutationFn: emailVerification.verifyEmail,
  });
};

export { useRegister, useLogin, useVerifyEmail };
