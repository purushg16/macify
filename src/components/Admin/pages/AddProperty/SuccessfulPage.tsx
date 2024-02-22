import { Box, Image } from "@chakra-ui/react";
import AddTitle from "../../elements/AddTitle";
import success from "../../../../assets/app/success.png";

const SuccessfulPage = () => {
  return (
    <>
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
      <AddTitle
        heading="Successfully Created"
        subtitle="A new Property has been now added to dashboard"
      />
    </>
  );
};

export default SuccessfulPage;
