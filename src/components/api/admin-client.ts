import APIClient from "./api-client";
import Manager from "../entities/manager";
import ApproveBooking from "../entities/approveBooking";
import EditBooking from "../entities/editBooking";
import GroupBooking from "../entities/GroupBooking";
import BookingDetails, { BookingGuest } from "../entities/booking";
import CurrentHosting from "../entities/CurrentHosting";
import Profile from "../entities/profile";

interface RejectBookingInterface {
  groupId: string;
}

export interface AllBookingsInterface {
  ids: string[];
}

export interface TimelineBookingDetails {
  approve: boolean;
  checkIn: string;
  checkOut: string;
  guests: BookingGuest[];
  property: string;
  room?: string;
  bed?: string;
  _id: string;
}

export interface TimelineBookings {
  [key: string]: TimelineBookingDetails;
}

export interface BookingTimelineInterface {
  [key: string]: TimelineBookings;
}

const getProfile = new APIClient<Profile>("/user/profile").getSingleItem;
const createManager = new APIClient<Manager>("/manager/addManager");
const bookingsToApprove = new APIClient<GroupBooking>(
  "/booking/getAllGroupBooking"
);

const getSinglebookingToApprove = new APIClient<BookingDetails>(
  "/booking/getGroupBooking"
);
const approveBooking = new APIClient<ApproveBooking>("/booking/approveBooking");
const rejectBooking = new APIClient<RejectBookingInterface>(
  "/booking/rejectBooking"
);
const getAllBookings = new APIClient<BookingTimelineInterface>(
  "/booking/allBookings"
);
const editBooking = new APIClient<EditBooking>("/booking/editBooking");

const getAllManagers = new APIClient<Manager>("/manager/allManager").getRequest;

const getCurrentHostings = new APIClient<CurrentHosting>(
  "/dashboard/currentHostings"
).getRequest;
const getUpcomingCheckins = new APIClient<CurrentHosting>(
  "/dashboard/upcomingCheckins"
).getRequest;
const getUpcomingCheckOuts = new APIClient<CurrentHosting>(
  "dashboard/upcomingCheckouts"
).getRequest;

export {
  getProfile,
  createManager,
  bookingsToApprove,
  getSinglebookingToApprove,
  approveBooking,
  rejectBooking,
  getAllBookings,
  editBooking,
  getAllManagers,
  getCurrentHostings,
  getUpcomingCheckins,
  getUpcomingCheckOuts,
};
