import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { createManager } from "../api/admin-client";
import { APIError } from "../entities/Error";

const useAddManager = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: createManager.postRequest,

    onSuccess: () =>
      toast({
        title: "Manager created successfully",
        status: "error",
        position: "top",
        duration: 3000,
      }),

    onError: (err: AxiosError<APIError>) =>
      toast({
        title: err.response?.data?.error,
        status: "error",
        position: "top",
        duration: 3000,
      }),
  });
};

export { useAddManager as useAdminFunctions };
