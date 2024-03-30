import APIClient from "./api-client";
import Manager from "../entities/manager";
import ApproveBooking from "../entities/approveBooking";
import EditBooking from "../entities/editBooking";
import GroupBooking from "../entities/GroupBooking";
import BookingDetails from "../entities/booking";
import CurrentHosting from "../entities/CurrentHosting";
import Profile from "../entities/profile";
import SingleBooking from "../entities/singleBooking";
import Guest from "../entities/Guest";
import BedBooking from "../entities/BedBookings";

interface RejectBookingInterface {
  groupId: string;
}

export interface AllBookingsInterface {
  ids: string[] | undefined;
}

export interface TimelineBookingDetails {
  approve: boolean;
  checkIn: string;
  checkOut: string;
  guests: Guest[];
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

export interface BedBookingInterface {
  roomId: string | undefined;
  checkIn: Date | string | undefined;
  shift: "before" | "after" | undefined;
  propertyId: string | undefined;
}

const getProfile = new APIClient<Profile>("/user/profile").getSingleItem;
const createManager = new APIClient<Manager>("/manager/addManager");
const bookingsToApprove = new APIClient<GroupBooking>(
  "/booking/getAllGroupBooking"
);
const getSIngleBooking = new APIClient<SingleBooking>(
  "/booking/getSingleBooking"
).getRequest;
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

const getBedBookings = new APIClient<BedBooking>("/booking/bedBookings");
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
  getSIngleBooking,
  getBedBookings,
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
