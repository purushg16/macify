import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AnimateMove from "../../../motions/Move";
import ImageHolder from "../../elements/Booking/ImageHolder";
import checkingimg from "../../../../assets/booking/checking.png";
import Title from "../../elements/Title";
import CheckingDatePicker from "./CheckingDatePicker";
import useBookingStore from "../../../store/bookingStore";
import DateFormatter from "../../../functions/dateFormatter";

const ReportTimePage = () => {
  const range = useBookingStore((s) => s.checkingRange);
  return (
    <>
      <AnimateMove delay={0.2}>
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
      </AnimateMove>
    </>
  );
};

export default ReportTimePage;
