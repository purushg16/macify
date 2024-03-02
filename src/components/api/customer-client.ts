import CreateBooking from "../entities/createBooking";
import APIClient from "./api-client";

const createBooking = new APIClient<CreateBooking>(
  "/inquiryBooking/customerBooking"
).postRequest;

export { createBooking };
