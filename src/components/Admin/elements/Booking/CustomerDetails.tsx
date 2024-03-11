import CustomerFileUpload from "./CustomerFileUpload";
import useBookingStore from "../../../store/bookingStore";
import UploadedFiles from "./UploadedFiles";
import { Navigate } from "react-router-dom";

const CustomerDetails = () => {
  const uploadefFiles = useBookingStore((s) => s.filesUploaded)!;
  const numberOfGuests = useBookingStore((s) => s.numberOfGuests)!;

  if (!numberOfGuests) return <Navigate to="/booking" />;
  if (uploadefFiles?.length > 0) return <UploadedFiles />;
  else return <CustomerFileUpload />;
};

export default CustomerDetails;
