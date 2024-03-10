import { Box, SimpleGrid } from "@chakra-ui/react";
import DashboardOptButton from "./DashboardOptButton";
import { GiRun } from "react-icons/gi";
import { IoFlagOutline } from "react-icons/io5";
import { MdChecklistRtl } from "react-icons/md";
const OptionsGrid = ({
  handleTabChange,
}: {
  handleTabChange: (t: number) => void;
}) => {
  return (
    <SimpleGrid columns={3} spacing={4}>
      <Box onClick={() => handleTabChange(0)}>
        <DashboardOptButton label="Current Hosting" icon={IoFlagOutline} />
      </Box>
      <Box onClick={() => handleTabChange(1)}>
        <DashboardOptButton label="Upcoming Checkin" icon={MdChecklistRtl} />
      </Box>
      <Box onClick={() => handleTabChange(2)}>
        <DashboardOptButton label="Upcoming CheckOut" icon={GiRun} />
      </Box>
    </SimpleGrid>
  );
};
export default OptionsGrid;
