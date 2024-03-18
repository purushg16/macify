import { Button } from "@chakra-ui/react";
import NavigatorWrapper from "../../elements/NavigatorWrapper";
import success from "../../../../assets/app/bookingSuccess.png";
import BookingFooter from "../../elements/Booking/BookingFooter";

const FinalPage = () => {
  return (
    <>
      <BookingFooter
        title="Successfully Booked 🎉"
        subheading="Your booking has been confirmed"
        buttons={
          <>
            <NavigatorWrapper to="/booking">
              <Button id="extra" colorScheme="primary">
                Book Another!
              </Button>
            </NavigatorWrapper>
          </>
        }
        image={success}
      />
    </>
  );
};

export default FinalPage;
