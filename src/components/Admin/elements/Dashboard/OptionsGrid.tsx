import { Box, SimpleGrid } from "@chakra-ui/react";
import { GiRun } from "react-icons/gi";
import { IoFlagOutline } from "react-icons/io5";
import { MdChecklistRtl } from "react-icons/md";
import DashboardOptButton from "./DashboardOptButton";
import { CgMoreO } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const OptionsGrid = ({
  currentTab = 0,
  handleTabChange,
}: {
  currentTab: number;
  handleTabChange: (t: number) => void;
}) => {
  const navigate = useNavigate();
  return (
    <SimpleGrid columns={2} spacing={4}>
      <Box onClick={() => handleTabChange(0)}>
        <DashboardOptButton
          label="Current Hostings"
          color="green"
          icon={IoFlagOutline}
          active={currentTab === 0}
        />
      </Box>
      <Box onClick={() => handleTabChange(1)}>
        <DashboardOptButton
          label="Upcoming Check-In"
          icon={MdChecklistRtl}
          color="green"
          active={currentTab === 1}
        />
      </Box>
      <Box onClick={() => handleTabChange(2)}>
        <DashboardOptButton
          label="Upcoming Check-Out"
          icon={GiRun}
          color="green"
          active={currentTab === 2}
        />
      </Box>
      <Box onClick={() => navigate("calendar")}>
        <DashboardOptButton label="View More" icon={CgMoreO} color="blue" />
      </Box>
    </SimpleGrid>
  );
};
export default OptionsGrid;
