import { useMutation } from "@tanstack/react-query";
import { emailVerification, login, register } from "../api/auth-client";

const useRegister = (callback: () => void) => {
  return useMutation({
    mutationFn: register.register,
    onSettled: () => callback(),
  });
};

const useVerifyEmail = (callback: () => void) => {
  return useMutation({
    mutationFn: emailVerification.verifyEmail,
    onSettled: () => callback(),
  });
};

const useLogin = (callback: () => void) => {
  return useMutation({
    mutationFn: login.login,
    onSettled: () => callback(),
  });
};

export { useRegister, useLogin, useVerifyEmail };
