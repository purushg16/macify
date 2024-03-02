import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { APIError } from "../entities/Error";
import { postNewProperty } from "../api/property-client";

const usePostProperty = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: postNewProperty.postRequest,

    onSuccess: (data) => {
      toast({
        title: data.msg,
        status: "error",
        position: "top",
        duration: 3000,
      });
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

export { usePostProperty };
