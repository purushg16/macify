import { Button } from "@chakra-ui/react";
import AnimateMove from "../../../motions/Move";
import DropZone from "./DropZone";
import useBookingStore from "../../../store/bookingStore";
import file from "../../../../assets/booking/doc1.png";
import { Link, Navigate } from "react-router-dom";
import BookingFooter from "./BookingFooter";

function CustomerFileUpload() {
  const count = useBookingStore((s) => s.numberOfGuests);

  if (!count) return <Navigate to="/booking" />;
  return (
    <>
      <BookingFooter
        w={200}
        title="Upload Proofs"
        subheading={`Upload files for ${count} people`}
        image={file}
        children={
          <AnimateMove delay={0.2}>
            <DropZone />
          </AnimateMove>
        }
        buttons={
          <Link to="/booking">
            <Button>Back</Button>
          </Link>
        }
      />
    </>
  );
}

export default CustomerFileUpload;
