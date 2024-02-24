import { Button, HStack, Image, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import img from "../../../../assets/app/checking-in.png";
import AnimateMove from "../../../motions/Move";
import AddTitle from "../../elements/AddTitle";

import CheckInTimePicker from "../../elements/AddProperty/CheckInTimePicker";
import CheckOutTimePicker from "../../elements/AddProperty/CheckOutTimePicker";
import useAddPropertyStore from "../../../store/AddProperty/addPropertyBasicStore";

const CheckingTimePage = () => {
  const checkInTime = useAddPropertyStore((s) => s.checkInTime);
  const checkOutTime = useAddPropertyStore((s) => s.checkOutTime);

  return (
    <>
      <AnimateMove delay={0.2}>
        <Image src={img} alt="checking" />
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <AddTitle
          heading="Checking Time Details"
          subtitle="Enter checking time details for this property"
        />
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <VStack gap={4}>
          <CheckInTimePicker />
          <CheckOutTimePicker />
        </VStack>
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <HStack>
          <Link to="/admin/properties/add/3">
            <Button id="extra">Back</Button>
          </Link>
          <Link to="/admin/properties/add/5">
            <Button
              id="extra"
              colorScheme="primary"
              isDisabled={!checkInTime || !checkOutTime}
            >
              Next
            </Button>
          </Link>
        </HStack>
      </AnimateMove>
    </>
  );
};

export default CheckingTimePage;
