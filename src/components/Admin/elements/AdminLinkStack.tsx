import { Box, VStack } from "@chakra-ui/react";
import { LiteNavigationButton } from "./Button";
import { useLocation } from "react-router-dom";

const AdminLinkStack = () => {
  const location = useLocation().pathname.split("/")[2];
  const role = localStorage.getItem("manager") === "true" ? "Manager" : "Admin";

  return (
    <Box>
      <VStack align="start" gap={4}>
        <LiteNavigationButton
          text="Dashboard"
          link={role === "Admin" ? "/admin" : "/manager"}
          isActive={!location}
        />
        <LiteNavigationButton
          text="Calendar"
          link={role === "Admin" ? "/admin/calendar" : "/manager/calendar"}
          isActive={location === "calendar"}
        />

        {role === "Admin" && (
          <>
            <LiteNavigationButton
              text="Manager"
              link="/admin/manager"
              isActive={location === "manager"}
            />
            <LiteNavigationButton
              text="Properties"
              link="/admin/properties"
              isActive={location === "properties"}
            />
          </>
        )}

        {role === "Manager" && (
          <LiteNavigationButton
            text="Account"
            link="/manager/account"
            isActive={location === "properties"}
          />
        )}
      </VStack>
    </Box>
  );
};

export default AdminLinkStack;
