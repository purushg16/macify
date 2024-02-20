import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import AdminNavbar from "../Admin/elements/AdminNavbar";
import AdminLinkStack from "../Admin/elements/AdminLinkStack";
import AppBar from "../Admin/elements/AppBar";
import { Outlet } from "react-router-dom";

const AdminPage = () => {
  //   const { colorMode, toggleColorMode } = useColorMode();
  //   if (colorMode === "light") toggleColorMode();
  //   if (colorMode === "dark") toggleColorMode();
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
        rowGap={{ base: 2, md: 4, lg: 8 }}
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

        <GridItem area={"main"} w="100%" maxW="100%" overflowX="auto">
          <Box px={{ base: 4, md: 8 }}>
            <Outlet />
          </Box>
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
