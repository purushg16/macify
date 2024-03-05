import APIClient from "./api-client";
import Manager from "../entities/manager";
import ApproveBooking from "../entities/approveBooking";
import EditBooking from "../entities/editBooking";
import GroupBooking from "../entities/GroupBooking";

interface RejectBookingInterface {
  groupId: string;
}

export interface AllBookingsInterface {
  ids: string[];
}

const createManager = new APIClient<Manager>("/manager/addManager");
const bookingsToApprove = new APIClient<GroupBooking>(
  "/booking/getAllGroupBooking"
);
const approveBooking = new APIClient<ApproveBooking>("/booking/approveBooking");
const rejectBooking = new APIClient<RejectBookingInterface>(
  "/booking/rejectBooking"
);
const getAllBookings = new APIClient<AllBookingsInterface>(
  "/booking/allBookings"
);
const editBooking = new APIClient<EditBooking>("/booking/allBookings");

export {
  createManager,
  bookingsToApprove,
  approveBooking,
  rejectBooking,
  getAllBookings,
  editBooking,
};
