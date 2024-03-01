import { useMutation } from "@tanstack/react-query";
import { emailVerification, login, register } from "../api/auth-client";

const useRegister = (done: (state: boolean) => void) => {
  return useMutation({
    mutationFn: register.register,
    onSuccess: (data) => {
      console.log(data.data);
    },
    onError: (error) => {
      console.error(error);
    },
    onSettled: () => {
      done(true);
    },
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
