import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { APIError } from "../entities/Error";
import { postNewProperty } from "../api/property-client";
import PropertyConverter from "../functions/propertyParameterConverter";
import { useNavigate } from "react-router-dom";

const usePostProperty = () => {
  const toast = useToast();
  const property = PropertyConverter();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => postNewProperty.postRequest(property),

    onSuccess: (data) => {
      toast({
        title: data.msg,
        status: "error",
        position: "top",
        duration: 3000,
      });
      navigate("/admin/properties/add/success");
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
