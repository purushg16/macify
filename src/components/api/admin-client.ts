import APIClient from "./api-client";
import Manager from "../entities/manager";
import BookingDetails from "../entities/booking";
import ApproveBooking from "../entities/editBooking";

interface RejectBookingInterface {
  groupId: string;
}

export interface AllBookingsInterface {
  ids: string[];
}

const createManager = new APIClient<Manager>("/manager/addManager");
const bookingsToApprove = new APIClient<BookingDetails>(
  "/booking/bookingToApprove"
);
const approveBooking = new APIClient<ApproveBooking>("/booking/approveBooking");
const rejectBooking = new APIClient<RejectBookingInterface>(
  "/booking/rejectBooking"
);
const getAllBookings = new APIClient<AllBookingsInterface>(
  "/booking/allBookings"
);

export {
  createManager,
  bookingsToApprove,
  approveBooking,
  rejectBooking,
  getAllBookings,
};
