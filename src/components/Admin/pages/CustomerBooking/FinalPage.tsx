import { Button, Box, Image } from "@chakra-ui/react";
import AnimateMove from "../../../motions/Move";
import NavigatorWrapper from "../../elements/NavigatorWrapper";
import Title from "../../elements/Title";
import success from "../../../../assets/app/bookingSuccess.png";

const FinalPage = () => {
  return (
    <>
      <AnimateMove delay={0.4}>
        <Box pos="relative" mb={12}>
          <Image src={success} alt="" w={250} pos="relative" zIndex={1} />
          <Box
            bg="white"
            borderRadius="100%"
            w={250}
            aspectRatio="1/1"
            pos="absolute"
            top={25}
            left={-2}
          />
        </Box>
      </AnimateMove>

      <AnimateMove delay={0.6}>
        <Title
          heading="Successfully Booked 🎉"
          subtitle="Your booking has been confirmed"
        />
      </AnimateMove>

      <AnimateMove delay={0.8}>
        <NavigatorWrapper to="/booking">
          <Button id="extra" colorScheme="primary">
            Book Another!
          </Button>
        </NavigatorWrapper>
      </AnimateMove>
    </>
  );
};

export default FinalPage;
