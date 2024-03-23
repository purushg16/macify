import { Button } from "@chakra-ui/react";
import NavigatorWrapper from "../../elements/NavigatorWrapper";
import success from "../../../../assets/app/bookingSuccess.png";
import BookingFooter from "../../elements/Booking/BookingFooter";
import { useParams } from "react-router-dom";

const FinalPage = () => {
  const propertyId = useParams().propertyId;
  return (
    <>
      <BookingFooter
        title="Successfully Booked 🎉"
        subheading="Your booking has been confirmed"
        buttons={
          <>
            <NavigatorWrapper to={"/booking/" + propertyId}>
              <Button colorScheme="primary">New Booking!</Button>
            </NavigatorWrapper>
          </>
        }
        image={success}
        w={240}
      />
    </>
  );
};

export default FinalPage;
