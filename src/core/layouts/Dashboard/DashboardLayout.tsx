import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import { Header } from "./Header/Header";
import { useEffect, useState } from "react";
import { Flex } from "@src/lib/layout/Flex/Flex";
import { Grid } from "@src/lib/layout/Grid/Grid";
import { NavbarProvider } from "@src/lib/providers/NavbarProvider/NavbarProvider";
import { Box } from "@src/lib/layout/Box/Box";
import { useMediaQuery } from "usehooks-ts";
import { useTheme } from "styled-components";
export default function DashboardLayout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(
    `screen and (max-width: ${theme.breakpoints.md})`
  );
  const [navbarOpen, setNavbarOpen] = useState(!isMobile);
  useEffect(() => {
    const matches = window.matchMedia(
      `screen and (max-width: ${theme.breakpoints.md})`
    );
    setNavbarOpen(!matches);
  }, []);

  const toggle = () => setNavbarOpen(!navbarOpen);
  return (
    <NavbarProvider isOpen={navbarOpen} setOpen={setNavbarOpen} toggle={toggle}>
      <Flex w={"100%"}>
        <Navbar />

        <Grid as="main" flex={1} gridTemplateRows={"auto 1fr"}>
          <Header />
          <Box px={"1.5rem"} backgroundColor={theme.tokens.bodyBg}>
            <Outlet />
          </Box>
        </Grid>
      </Flex>
    </NavbarProvider>
  );
}
