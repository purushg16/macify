import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import AnimateMove from "../../../motions/Move";
import checkingimg from "../../../../assets/booking/checking.png";
import CheckingDatePicker from "./CheckingDatePicker";
import useBookingStore from "../../../store/bookingStore";
import DateFormatter from "../../../functions/dateFormatter";
import BookingFooter from "../../elements/Booking/BookingFooter";

const ReportTimePage = () => {
  const propertyId = useParams().propertyId;
  const range = useBookingStore((s) => s.checkingRange);
  const navigate = useNavigate();
  const count = useBookingStore((s) => s.numberOfGuests);

  if (!count) return <Navigate to={"/booking/" + propertyId} />;
  return (
    <>
      {/* <AnimateMove delay={0.2}>
        <ImageHolder image={checkingimg} />
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <InputGroup mb={8}>
          <Input
            bg="gray.50"
            placeholder={
              range.startDate && range.endDate
                ? `${DateFormatter(range.startDate)} - ${DateFormatter(
                    range.endDate
                  )}`
                : "Pick A Range"
            }
          />
          <InputRightElement>
            <CheckingDatePicker />
          </InputRightElement>
        </InputGroup>

        <Box>
          <Title
            size="lg"
            heading="Checking Date"
            subtitle="Pick checkin & checkout dates of staying"
          />

          <HStack justify="center" mt={4}>
            <Link to="/booking/2">
              <Button> Back </Button>
            </Link>
            <Link to="/booking/4">
              <Button colorScheme="primary"> Continue </Button>
            </Link>
          </HStack>
        </Box>
      </AnimateMove> */}
      <BookingFooter
        title="Checking Date"
        subheading="Pick checkin & checkout dates of staying"
        image={checkingimg}
        w={150}
        children={
          <AnimateMove delay={0.4}>
            <InputGroup mb={8}>
              <Input
                bg="gray.50"
                placeholder={
                  range.startDate && range.endDate
                    ? `${DateFormatter(range.startDate)} - ${DateFormatter(
                        range.endDate
                      )}`
                    : "Pick A Range"
                }
              />
              <InputRightElement>
                <CheckingDatePicker />
              </InputRightElement>
            </InputGroup>
          </AnimateMove>
        }
        buttons={
          <>
            <Link to={"/booking/" + propertyId + "/2"}>
              <Button> Back </Button>
            </Link>
            <Button
              isDisabled={!range.startDate || !range.endDate}
              colorScheme="primary"
              onClick={() => navigate("/booking/" + propertyId + "/4")}
            >
              Next
            </Button>
          </>
        }
      />
    </>
  );
};

export default ReportTimePage;
