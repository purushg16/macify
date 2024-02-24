import { Box, Button, HStack, Image } from "@chakra-ui/react";
import AddTitle from "../../elements/AddTitle";
import success from "../../../../assets/app/success.png";
import { Link } from "react-router-dom";
import AnimateMove from "../../../motions/Move";

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
        <AddTitle
          heading="Successfully Created 🎉"
          subtitle="A new Property has been now added to dashboard"
        />
      </AnimateMove>

      <AnimateMove delay={0.4}>
        <HStack>
          <Link to="/admin/properties/add">
            <Button id="extra"> Add Another</Button>
          </Link>
          <Link to="/admin">
            <Button id="extra" colorScheme="primary">
              Dashboard
            </Button>
          </Link>
        </HStack>
      </AnimateMove>
    </>
  );
};

export default SuccessfulPage;
