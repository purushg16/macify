import { Box, Button, HStack, Image } from "@chakra-ui/react";
import success from "../../../../assets/app/success.png";
import AnimateMove from "../../../motions/Move";
import NavigatorWrapper from "../../elements/NavigatorWrapper";
import Title from "../../elements/Title";

const SuccessfulPage = () => {
  return (
    <>
      <AnimateMove delay={0.4}>
        <Box pos="relative" mb={4}>
          <Image src={success} alt="" w={250} />
          <Box
            zIndex={-1}
            bg="#f5f5f5"
            borderRadius="100%"
            w={300}
            h={300}
            pos="absolute"
            top={50}
            left={-5}
          />
        </Box>
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <Title
          heading="Successfully Created 🎉"
          subtitle="A new Property has been now added to dashboard"
          size="lg"
          substitleSize="xs"
        />
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <HStack>
          <NavigatorWrapper to="/admin/properties/add">
            <Button id="extra"> Add Another</Button>
          </NavigatorWrapper>
          <NavigatorWrapper to="/admin">
            <Button id="extra" colorScheme="primary">
              Dashboard
            </Button>
          </NavigatorWrapper>
        </HStack>
      </AnimateMove>
    </>
  );
};

export default SuccessfulPage;
