import { AllBookingsInterface } from "./admin-client";
import APIClient from "./api-client";

const getAllProperty = new APIClient("/manager/getAllProperty");
const getAllManagerBookings = new APIClient<AllBookingsInterface>(
  "/manager/allBookings"
);

export { getAllProperty, getAllManagerBookings };
