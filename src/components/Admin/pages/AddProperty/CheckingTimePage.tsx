import { Button, HStack, Image, VStack } from "@chakra-ui/react";
import img from "../../../../assets/app/checking-in.png";
import AnimateMove from "../../../motions/Move";
import Title from "../../elements/Title";

import useAddPropertyStore from "../../../store/AddProperty/addPropertyBasicStore";
import CheckInTimePicker from "../../elements/AddProperty/CheckInTimePicker";
import CheckOutTimePicker from "../../elements/AddProperty/CheckOutTimePicker";
import NavigatorWrapper from "../../elements/NavigatorWrapper";

const CheckingTimePage = () => {
  const checkInTime = useAddPropertyStore((s) => s.checkIn);
  const checkOutTime = useAddPropertyStore((s) => s.checkOut);
  const rentWithin = useAddPropertyStore((s) => s.rentWithin);

  return (
    <>
      <AnimateMove delay={0.2}>
        <Image src={img} alt="checking" />
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <Title
          heading="Checking Time Details"
          subtitle="Enter checking time details for this property"
          size="lg"
          substitleSize="xs"
        />
      </AnimateMove>

      <AnimateMove delay={0.4} noWidth>
        <VStack gap={4} w="100%" px={10}>
          <CheckInTimePicker />
          <CheckOutTimePicker />
        </VStack>
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <HStack>
          <NavigatorWrapper
            to={"/admin/properties/add/" + (rentWithin ? "3" : "2")}
          >
            <Button id="extra">Back</Button>
          </NavigatorWrapper>
          <NavigatorWrapper to="/admin/properties/add/5">
            <Button
              id="extra"
              colorScheme="primary"
              isDisabled={!checkInTime || !checkOutTime}
            >
              Next
            </Button>
          </NavigatorWrapper>
        </HStack>
      </AnimateMove>
    </>
  );
};

export default CheckingTimePage;
