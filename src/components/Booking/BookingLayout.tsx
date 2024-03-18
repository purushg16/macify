import { Flex, GridItem, Heading } from "@chakra-ui/react";
// import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const BookingLayout = () => {
  // useEffect(() => {
  //   const handleBeforeUnload = (event: BeforeUnloadEvent) => {
  //     event.preventDefault();
  //     return "";
  //   };
  //   window.addEventListener("beforeunload", handleBeforeUnload);
  //   return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  // }, []);

  return (
    <Flex gap={8} p={4} flexDir="column">
      <GridItem h="max-content">
        <Heading fontSize="2xl" children="Macify" />
      </GridItem>
      <GridItem mb={48}>
        <Flex
          align="end"
          justify="center"
          h="100%"
          maxH="100%"
          overflowY="scroll"
        >
          <Outlet />
        </Flex>
      </GridItem>
    </Flex>
    // <Box
    //   px={10}
    //   h="100vh"
    //   maxH="100vh"
    //   display="flex"
    //   alignItems="center"
    //   justifyContent="center"
    // >
    //   <Flex
    //     pos="relative"
    //     w="100%"
    //     alignItems="center"
    //     justifyContent="center"
    //     m="auto"
    //     maxW={600}
    //     minH={700}
    //     maxH={700}
    //     my={{ base: 8, md: 16 }}
    //     p={8}
    //     borderRadius={20}
    //     border="1px solid"
    //     borderColor="gray.100"
    //   >
    //     <Flex
    //       w="100%"
    //       flexDir="column"
    //       gap={12}
    //       textAlign="center"
    //       alignItems="center"
    //       justifyContent="space-between"
    //     >
    //       <Outlet />
    //     </Flex>

    //     <Heading
    //       p={{ base: 4, md: 6 }}
    //       fontSize="lg"
    //       pos="absolute"
    //       bottom={0}
    //       right={0}
    //     >
    //       Macify
    //     </Heading>
    //   </Flex>
    // </Box>
  );
};

export default BookingLayout;
