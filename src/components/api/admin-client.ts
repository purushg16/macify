import APIClient from "./api-client";
import Manager from "../entities/manager";
import ApproveBooking from "../entities/approveBooking";
import EditBooking from "../entities/editBooking";
import GroupBooking from "../entities/GroupBooking";
import BookingDetails, { BookingGuest } from "../entities/booking";

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

export {
  createManager,
  bookingsToApprove,
  getSinglebookingToApprove,
  approveBooking,
  rejectBooking,
  getAllBookings,
  editBooking,
};
