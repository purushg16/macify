import { Box, SimpleGrid } from "@chakra-ui/react";
import { GiRun } from "react-icons/gi";
import { IoFlagOutline } from "react-icons/io5";
import { MdChecklistRtl } from "react-icons/md";
import DashboardOptButton from "./DashboardOptButton";

const OptionsGrid = ({
  currentTab = 0,
  handleTabChange,
}: {
  currentTab: number;
  handleTabChange: (t: number) => void;
}) => {
  return (
    <SimpleGrid columns={3} spacing={4}>
      <Box onClick={() => handleTabChange(0)}>
        <DashboardOptButton
          label="Current Hostings"
          icon={IoFlagOutline}
          active={currentTab === 0}
        />
      </Box>
      <Box onClick={() => handleTabChange(1)}>
        <DashboardOptButton
          label="Upcoming Check-In"
          icon={MdChecklistRtl}
          active={currentTab === 1}
        />
      </Box>
      <Box onClick={() => handleTabChange(2)}>
        <DashboardOptButton
          label="Upcoming Check-Out"
          icon={GiRun}
          active={currentTab === 2}
        />
      </Box>
    </SimpleGrid>
  );
};
export default OptionsGrid;
