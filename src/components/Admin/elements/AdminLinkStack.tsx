import { Box, VStack } from "@chakra-ui/react";
import { LiteNavigationButton } from "./Button";
import { useLocation } from "react-router-dom";
import useRoleStore from "../../store/roleStore";

const AdminLinkStack = () => {
  const location = useLocation().pathname.split("/")[2];
  const role = useRoleStore((s) => s.role);

  return (
    <Box px={{ base: 4, md: 8, lg: 16 }}>
      <VStack align="start" gap={4}>
        <LiteNavigationButton
          text="Dashboard"
          link="/admin"
          isActive={!location}
        />
        <LiteNavigationButton
          text="Calendar"
          link="/admin/calendar"
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
