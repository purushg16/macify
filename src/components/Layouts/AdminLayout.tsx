import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import AdminNavbar from "../Admin/elements/AdminNavbar";
import AdminLinkStack from "../Admin/elements/AdminLinkStack";
import AppBar from "../Admin/elements/AppBar";
import { Navigate, Outlet } from "react-router-dom";

const AdminLayout = () => {
  if (!localStorage.getItem("token")) return <Navigate to="/auth/login" />;
  if (localStorage.getItem("manager") === "true")
    return <Navigate to="/unauthorized" />;

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
          lg: "235px 1fr",
        }}
        gap={1}
        rowGap={{ base: 2, md: 4, lg: 8 }}
        color="blackAlpha.700"
        h="100vh" // Set the height of the grid to the viewport height
        overflowY="hidden"
        px={{ base: 4, md: 8, lg: 16 }}
        pos="relative"
      >
        <GridItem area={"header"}>
          <AdminNavbar />
        </GridItem>

        <Show above="lg">
          <GridItem area={"nav"}>
            <AdminLinkStack />
          </GridItem>
        </Show>

        <GridItem
          area={"main"}
          w="100%"
          maxW="100%"
          overflowX="auto"
          maxH="100%"
          overflowY="auto"
          pb={8}
        >
          <Box>
            <Outlet />
          </Box>

          <Show below="lg">
            <Box py={8} />
            <AppBar />
            <Box
              w="100%"
              pos="fixed"
              bottom={-5}
              h={2}
              bg="none"
              borderRadius="100%"
              boxShadow="-11px -12px 20px 20px #b8d4c0d4"
            />
          </Show>
        </GridItem>
      </Grid>
    </>
  );
};

export default AdminLayout;
