import { useQuery } from "@tanstack/react-query";
import {
  getCurrentHostings,
  getUpcomingCheckOuts,
  getUpcomingCheckins,
} from "../api/admin-client";
import ms from "ms";

const useAdminCurrentHosting = (enabled: boolean) =>
  useQuery({
    queryKey: ["admin", "currentHosting"],
    queryFn: getCurrentHostings,

    enabled: enabled,
    staleTime: ms("5m"),
    retry: 2,
    refetchOnWindowFocus: false,
  });

const useAdminUpcomingCheckIns = (enabled: boolean) =>
  useQuery({
    queryKey: ["admin", "upcomingCheckIns"],
    queryFn: getUpcomingCheckins,

    enabled: enabled,
    staleTime: ms("5m"),
    retry: 2,
    refetchOnWindowFocus: false,
  });

const useAdminUpcomingCheckOuts = (enabled: boolean) =>
  useQuery({
    queryKey: ["admin", "upcomingCheckOuts"],
    queryFn: getUpcomingCheckOuts,

    enabled: enabled,
    staleTime: ms("5m"),
    retry: 2,
    refetchOnWindowFocus: false,
  });

export {
  useAdminCurrentHosting,
  useAdminUpcomingCheckIns,
  useAdminUpcomingCheckOuts,
};
