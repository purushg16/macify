import CurrentHosting from "../entities/CurrentHosting";
import { AllBookingsInterface } from "./admin-client";
import APIClient from "./api-client";

const getAllProperty = new APIClient("/manager/getAllProperty");
const getAllManagerBookings = new APIClient<AllBookingsInterface>(
  "/manager/allBookings"
);

const getCurrentHostings = new APIClient<CurrentHosting>(
  "/manager/currentHostings"
).getRequest;
const getUpcomingCheckins = new APIClient<CurrentHosting>(
  "/manager/upcomingCheckins"
).getRequest;
const getUpcomingCheckOuts = new APIClient<CurrentHosting>(
  "/manager/upcomingCheckouts"
).getRequest;

export {
  getAllProperty,
  getAllManagerBookings,
  getCurrentHostings,
  getUpcomingCheckOuts,
  getUpcomingCheckins,
};
