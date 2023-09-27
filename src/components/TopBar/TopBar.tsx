import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
  return (
    <ThemeProvider theme={customTheme}> 
      <Stack>
        <AppBar position="static" color="primary" enableColorOnDark>
          {appBarLabel("Employee Manager")}
        </AppBar>
      </Stack>
    </ThemeProvider>
  );
};

export default TopBar;
