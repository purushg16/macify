import APIClient from "./api-client";
import Manager from "../entities/manager";
import BookingDetails from "../entities/booking";

const createManager = new APIClient<Manager>("/manager/addManager");
const bookingsToApprove = new APIClient<BookingDetails>(
  "/booking/bookingToApprove"
);

export { createManager, bookingsToApprove };
