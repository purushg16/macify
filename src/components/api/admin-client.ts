import APIClient from "./api-client";
import Manager from "../entities/manager";
import BookingDetails from "../entities/booking";
import ApproveBooking from "../entities/editBooking";

const createManager = new APIClient<Manager>("/manager/addManager");
const bookingsToApprove = new APIClient<BookingDetails>(
  "/booking/bookingToApprove"
);
const approveBooking = new APIClient<ApproveBooking>("/booking/approveBooking");

export { createManager, bookingsToApprove, approveBooking };
