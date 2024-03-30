import { useToast } from "@chakra-ui/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { APIError } from "../entities/Error";
import {
  addBeds,
  addRooms,
  deleteBed,
  deleteRoom,
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
import useAddRoomsStore from "../store/addRoomStore";
import useAddBedsStore from "../store/addBedStore";
import useAddPropertyRoomStore from "../store/AddProperty/addPropertyRoomStore";
import useAddPropertyStore from "../store/AddProperty/addPropertyBasicStore";
const usePostProperty = () => {
  const toast = useToast();
  const property = PropertyConverter();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const clearRoomStore = useAddPropertyRoomStore((s) => s.clearStore);
  const clearStore = useAddPropertyStore((s) => s.clearStore);

  return useMutation({
    mutationFn: () => postNewProperty.postRequest(property),

    onSuccess: () => {
      toast({
        title: "New property successfully created",
        status: "success",
        position: "top",
        duration: 3000,
      });
      queryClient.invalidateQueries({
        queryKey: ["property", "getAllProperty"],
      });
      clearRoomStore();
      clearStore();
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

const useAddBeds = () => {
  const toast = useToast();
  const queryClient = useQueryClient();
  const clearBed = useAddBedsStore((s) => s.clearBed);

  return useMutation({
    mutationFn: addBeds.postRequest,

    onSuccess: (_data, variables) => {
      toast({
        title: "Beds Added Successfully",
        status: "success",
        position: "top",
        duration: 3000,
      });
      queryClient.invalidateQueries({ queryKey: ["property", "getProperty"] });
      clearBed(variables.propertyId, variables.roomId);
    },
    onError: () =>
      toast({
        title: "Error Adding the Rooms",
        status: "error",
        position: "top",
        duration: 3000,
      }),
  });
};

const useAddRooms = () => {
  const toast = useToast();
  const queryClient = useQueryClient();
  const clearSinglePropertyRooms = useAddRoomsStore(
    (s) => s.clearSinglePropertyRooms
  );

  return useMutation({
    mutationFn: addRooms.postRequest,

    onSuccess: (_data, variables) => {
      toast({
        title: "Rooms Added Successfully",
        status: "success",
        position: "top",
        duration: 3000,
      });
      queryClient.invalidateQueries({ queryKey: ["property", "getProperty"] });

      clearSinglePropertyRooms(variables.propertyId);
    },
    onError: () =>
      toast({
        title: "Error Adding the Rooms",
        status: "error",
        position: "top",
        duration: 3000,
      }),
  });
};

const useEditProperty = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editProperty.postRequest,

    onSuccess: () => {
      toast({
        title: "Property edited successfully",
        status: "success",
        position: "top",
        duration: 3000,
      });
      queryClient.invalidateQueries({
        queryKey: ["property", "getAllProperty"],
      });
      queryClient.invalidateQueries({ queryKey: ["property", "getProperty"] });
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

const useGetAllProperties = (enabled: boolean) => {
  return useQuery({
    queryKey: ["property", "getAllProperty"],
    queryFn: getAllProperties.getRequest,
    retry: 2,
    enabled: enabled,
    refetchOnWindowFocus: false,
    staleTime: ms("5m"),
  });
};

const useGetAvailableRooms = (
  propertyId: string | undefined,
  checkIn: Date | string,
  checkOut: Date | string,
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
  checkIn: Date | string,
  checkOut: Date | string,
  enabled: boolean
) => {
  return useQuery({
    queryKey: ["property", "getAvaiablebeds", checkIn, checkOut],
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

const useDeleteRoom = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteRoom.postRequest,
    onSuccess: () => {
      toast({
        title: "Room Deleted Successfully",
        status: "success",
        position: "top",
        duration: 3000,
      });
      queryClient.invalidateQueries({
        queryKey: ["property", "getAllProperty"],
      });
      queryClient.invalidateQueries({ queryKey: ["property", "getProperty"] });
    },
    onError: (err: AxiosError<APIError>) =>
      toast({
        title: err.response?.data.error,
        status: "error",
        position: "top",
        duration: 3000,
      }),
  });
};

const useDeleteBed = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBed.postRequest,
    onSuccess: () => {
      toast({
        title: "Bed Deleted Successfully",
        status: "success",
        position: "top",
        duration: 3000,
      });
      queryClient.invalidateQueries({
        queryKey: ["property", "getAllProperty"],
      });
      queryClient.invalidateQueries({ queryKey: ["property", "getProperty"] });
    },
    onError: () =>
      toast({
        title: "Error Deleting Bed",
        status: "error",
        position: "top",
        duration: 3000,
      }),
  });
};

export {
  usePostProperty,
  useGetAllProperties,
  useGetSingleProperty,
  useEditProperty,
  useGetAvailableRooms,
  useGetAvailableBeds,
  useAddRooms,
  useAddBeds,
  useDeleteRoom,
  useDeleteBed,
};
