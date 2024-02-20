import CustomerFileUpload from "./CustomerFileUpload";
import useBookingStore from "../../../store/bookingStore";
import NumberOfGuestsForm from "./NumberOfGuestsForm";
import UploadedFiles from "./UploadedFiles";

const CustomerDetails = () => {
  const numberOfGuestsSelected = useBookingStore(
    (s) => s.numberOfGuestsSelected
  );

  const uploadefFiles = useBookingStore((s) => s.filesUploaded)!;

  if (!numberOfGuestsSelected) return <NumberOfGuestsForm />;
  if (numberOfGuestsSelected) {
    if (uploadefFiles?.length > 0) return <UploadedFiles />;
    else return <CustomerFileUpload />;
  }
};

export default CustomerDetails;
