import { useQuery } from "@tanstack/react-query";
import {
  getCurrentHostings,
  getUpcomingCheckOuts,
  getUpcomingCheckins,
} from "../api/admin-client";
import ms from "ms";

const useAdminCurrentHosting = () =>
  useQuery({
    queryKey: ["admin", "currentHosting"],
    queryFn: getCurrentHostings,

    staleTime: ms("5m"),
    retry: 2,
    refetchOnWindowFocus: false,
  });

const useAdminUpcomingCheckIns = () =>
  useQuery({
    queryKey: ["admin", "upcomingCheckIns"],
    queryFn: getUpcomingCheckins,

    staleTime: ms("5m"),
    retry: 2,
    refetchOnWindowFocus: false,
  });

const useAdminUpcomingCheckOuts = () =>
  useQuery({
    queryKey: ["admin", "upcomingCheckOuts"],
    queryFn: getUpcomingCheckOuts,

    staleTime: ms("5m"),
    retry: 2,
    refetchOnWindowFocus: false,
  });

export {
  useAdminCurrentHosting,
  useAdminUpcomingCheckIns,
  useAdminUpcomingCheckOuts,
};
