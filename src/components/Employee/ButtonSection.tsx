"use client";
import { styled } from "@mui/material/styles";
import ViewListIcon from "@mui/icons-material/ViewList";
import AppsIcon from "@mui/icons-material/Apps";
import { Box, Button, IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

const ButtonRootBox = styled(Box)(({ theme }) => ({}));
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#5100c5",
  color: "white",
  borderRadius: "18px",
  "&:hover": {
    backgroundColor: "#5100c5",
  },
}));
const ButtonSection = (): JSX.Element => {
  return (
    <ButtonRootBox>
      <StyledButton variant="contained">ADD EMPLOYEE</StyledButton>
      <Tooltip
        title="Grid"
        placement="top-start"
        arrow
        enterDelay={500}
        leaveDelay={200}
      >
        <IconButton
          aria-label="Grid View"
          style={{ backgroundColor: "#5100c5", marginLeft: "6px" }}
        >
          <ViewListIcon style={{ color: "white" }} />
        </IconButton>
      </Tooltip>
    </ButtonRootBox>
  );
};
export default ButtonSection;
