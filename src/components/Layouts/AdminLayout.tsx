import { Grid, GridItem } from "@chakra-ui/react";
import AdminNavbar from "../Admin/elements/AdminNavbar";
import AdminLinkStack from "../Admin/elements/AdminLinkStack";
import DashBoardPage from "../Admin/pages/Admin/DashBoardPage";
// import { Outlet } from "react-router-dom";
// import AppBar from "../App/elements/AppBar";

const AdminPage = () => {
  //   const { colorMode, toggleColorMode } = useColorMode();
  //   if (colorMode === "light") toggleColorMode();
  //   if (colorMode === "dark") toggleColorMode();
  // bg="#eff1ef"
  return (
    <>
      <Grid
        templateAreas={`"header header"
                  "nav main"`}
        gridTemplateRows={"100px 1fr 30px"}
        gridTemplateColumns={"300px 1fr"}
        gap={1}
        rowGap={8}
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem area={"header"}>
          <AdminNavbar />
        </GridItem>
        <GridItem area={"nav"}>
          <AdminLinkStack />
        </GridItem>
        <GridItem area={"main"}>
          <DashBoardPage />
        </GridItem>
      </Grid>

      {/* <Box>
        <Show above="md">
          <Navbar />
        </Show>

        <Box py={4} px={{ base: 4, md: 4, lg: 6 }}>
          <Outlet />
        </Box>

        <Show below="md">
          <Box py={8} />
          <AppBar />
        </Show>
      </Box> */}
    </>
  );
};

export default AdminPage;
