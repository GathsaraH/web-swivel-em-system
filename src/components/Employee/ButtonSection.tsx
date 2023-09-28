"use client";
import { styled } from "@mui/material/styles";
import ViewListIcon from "@mui/icons-material/ViewList";
import AppsIcon from "@mui/icons-material/Apps";
import { Box, Button, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { employeeActions } from "@/redux/employee/slice";
import { ListViewEnum } from "@/redux/employee/type";

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
  const dispatch = useDispatch<AppDispatch>();
  const listView = useAppSelector(
    (state) => state.employeeReducer.listViewAction
  );

  function handleGrideViewChange():void {
    console.log("Switching to Grid View");
    dispatch(
      employeeActions.changeListView({
        listViewAction: ListViewEnum.GRID_VIEW,
      })
    );
  }

  function handleTableViewChange():void {
    console.log("Switching to Table View");
    dispatch(
      employeeActions.changeListView({
        listViewAction: ListViewEnum.TABLE_VIEW,
      })
    );
  }

  return (
    <ButtonRootBox>
      <StyledButton onClick={() => console.log("Hi")} variant="contained">
        ADD EMPLOYEE
      </StyledButton>
      {listView === ListViewEnum.GRID_VIEW ? (
        <IconButton
          aria-label="Grid View"
          style={{ backgroundColor: "#5100c5", marginLeft: "6px" }}
          onClick={handleTableViewChange}
        >
          <AppsIcon style={{ color: "white" }} />
        </IconButton>
      ) : (
        <IconButton
          aria-label="Table View"
          style={{ backgroundColor: "#5100c5", marginLeft: "6px" }}
          onClick={handleGrideViewChange}
        >
          <ViewListIcon style={{ color: "white" }} />
        </IconButton>
      )}
    </ButtonRootBox>
  );
};
export default ButtonSection;
