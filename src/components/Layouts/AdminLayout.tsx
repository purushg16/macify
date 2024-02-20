import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import AdminNavbar from "../Admin/elements/AdminNavbar";
import AdminLinkStack from "../Admin/elements/AdminLinkStack";
import DashBoardPage from "../Admin/pages/Admin/DashBoardPage";
import AppBar from "../Admin/elements/AppBar";
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
        templateAreas={{
          base: `"header"
                "main"`,
          lg: `"header header"
          "nav main"`,
        }}
        gridTemplateRows={"100px 1fr"}
        gridTemplateColumns={{
          base: "1fr",
          lg: "300px 1fr",
        }}
        gap={1}
        rowGap={8}
        color="blackAlpha.700"
      >
        <GridItem area={"header"}>
          <AdminNavbar />
        </GridItem>

        <Show above="lg">
          <GridItem area={"nav"}>
            <AdminLinkStack />
          </GridItem>
        </Show>

        <GridItem area={"main"}>
          <DashBoardPage />
        </GridItem>
      </Grid>
      <Show below="lg">
        <Box py={8} />
        <AppBar />
      </Show>
    </>
  );
};

export default AdminPage;
