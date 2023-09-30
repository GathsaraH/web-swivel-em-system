"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { usePathname, useRouter } from "next/navigation";
import { RootRoutes } from "@/util/routes";
import { Box } from "@mui/material";

function appBarLabel(label: string, pathName: string) {
  const router = useRouter();
  return (
    <Toolbar>
      {pathName === RootRoutes.EMPLOYEE_LIST ? (
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
      ) : (
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => router.push(RootRoutes.EMPLOYEE_LIST)}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
      )}

      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
    </Toolbar>
  );
}

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#6200ee",
    },
  },
});

const TopBar = (): JSX.Element => {
  const pathname = usePathname();
  return (
    <ThemeProvider theme={customTheme}>
      <Stack>
        <AppBar position="static" color="primary" enableColorOnDark>
          {appBarLabel(
            pathname === RootRoutes.ADD_EMPLOYEE
              ? "ADD EMPLOYEE"
              : pathname === RootRoutes.EMPLOYEE_LIST
              ? "LIST EMPLOYEE"
              : "EDIT EMPLOYEE",
            pathname
          )}
        </AppBar>
      </Stack>
    </ThemeProvider>
  );
};

export default TopBar;
