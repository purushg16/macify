import { Flex, GridItem, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const BookingLayout = () => {
  const location = useLocation();

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      return "";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  return location.pathname.split("/").length === 3 ? (
    <Outlet />
  ) : (
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
  );
};

export default BookingLayout;
