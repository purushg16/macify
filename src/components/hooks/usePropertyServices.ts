import { useToast } from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { APIError } from "../entities/Error";
import {
  editProperty,
  getAllProperties,
  getAvailableBeds,
  getAvailableRooms,
  getSingleProperty,
  postNewProperty,
} from "../api/property-client";
import PropertyConverter from "../functions/propertyParameterConverter";
import { useNavigate } from "react-router-dom";
import ms from "ms";
const usePostProperty = () => {
  const toast = useToast();
  const property = PropertyConverter();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => postNewProperty.postRequest(property),

    onSuccess: () => {
      toast({
        title: "New property successfully created",
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

const useEditProperty = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: editProperty.postRequest,

    onSuccess: () =>
      toast({
        title: "New property successfully created",
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

const useGetAllProperties = () => {
  return useQuery({
    queryKey: ["property", "getAllProperty"],
    queryFn: getAllProperties.getRequest,
    retry: 2,
    refetchOnWindowFocus: false,
    staleTime: ms("5m"),
  });
};

const useGetAvailableRooms = (
  propertyId: string | undefined,
  checkIn: Date,
  checkOut: Date,
  enabled: boolean
) => {
  return useQuery({
    queryKey: ["property", "getAvaiablerooms", checkIn, checkOut],
    queryFn: () =>
      getAvailableRooms
        .getRequest({
          params: {
            propertyId: propertyId,
            checkIn: checkIn,
            checkOut: checkOut,
          },
        })
        .then((res) => res.data),
    enabled: enabled,
    retry: 2,
    refetchOnWindowFocus: false,
  });
};

const useGetAvailableBeds = (
  propertyId: string | undefined,
  checkIn: Date,
  checkOut: Date,
  enabled: boolean
) => {
  return useQuery({
    queryKey: ["property", "getAvaiablebeds"],
    queryFn: () =>
      getAvailableBeds
        .getRequest({
          params: {
            propertyId: propertyId,
            checkIn: checkIn,
            checkOut: checkOut,
          },
        })
        .then((res) => res.data),
    enabled: enabled,
    retry: 2,
    refetchOnWindowFocus: false,
  });
};

const useGetSingleProperty = (
  propertyId: string | undefined,
  enabled: boolean
) => {
  return useQuery({
    queryKey: ["property", "getProperty", propertyId],
    queryFn: () =>
      getSingleProperty
        .getSingleItem({
          params: {
            propertyId: propertyId,
          },
        })
        .then((res) => res),

    enabled: enabled,
    retry: 2,
    refetchOnWindowFocus: false,
    staleTime: ms("1hr"),
  });
};

export {
  usePostProperty,
  useGetAllProperties,
  useGetSingleProperty,
  useEditProperty,
  useGetAvailableRooms,
  useGetAvailableBeds,
};
