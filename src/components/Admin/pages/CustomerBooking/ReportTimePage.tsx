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

const ReportTimePage = () => {
  return (
    <>
      <AnimateMove delay={0.2}>
        <ImageHolder image={checkingimg} />
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <InputGroup mb={8}>
          <Input bg="gray.50" placeholder="Pick A Range" />
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
            <Link to="/booking/4">
              <Button> Back </Button>
            </Link>
            <Link to="/booking/6">
              <Button colorScheme="primary"> Continue </Button>
            </Link>
          </HStack>
        </Box>
      </AnimateMove>
    </>
  );
};

export default ReportTimePage;
