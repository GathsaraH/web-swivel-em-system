"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { usePathname } from "next/navigation";
import { RootRoutes } from "@/util/routes";

function appBarLabel(label: string) {
  return (
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
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
              : pathname === RootRoutes.EDIT_EMPLOYEE
              ? "EDIT EMPLOYEE"
              : "EMPLOYEE LIST"
          )}
        </AppBar>
      </Stack>
    </ThemeProvider>
  );
};

export default TopBar;
