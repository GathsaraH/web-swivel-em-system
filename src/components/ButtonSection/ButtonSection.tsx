"use client";
import { styled } from "@mui/material/styles";
import ViewListIcon from "@mui/icons-material/ViewList";
import AppsIcon from "@mui/icons-material/Apps";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { employeeActions } from "@/redux/employee/slice";
import { ListViewEnum } from "@/redux/employee/type";
import { usePathname, useRouter } from "next/navigation";
import { RootRoutes } from "@/util/routes";

const ButtonRootBox = styled(Box)(({ theme }) => ({}));
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#5100c5",
  color: "white",
  borderRadius: "18px",
  "&:hover": {
    backgroundColor: "#5100c5",
  },
}));
const StyledListButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#5100c5",
  color: "white",
  borderRadius: "18px",
  "&:hover": {
    backgroundColor: "#5100c5",
  },
  width:'150px'
}));
const ButtonSection = (): JSX.Element => {
  const pathname = usePathname();
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const listView = useAppSelector(
    (state) => state.employeeReducer.listViewAction
  );
  function handleGrideViewChange(): void {
    dispatch(
      employeeActions.changeListView({
        listViewAction: ListViewEnum.GRID_VIEW,
      })
    );
  }

  function handleTableViewChange(): void {
    dispatch(
      employeeActions.changeListView({
        listViewAction: ListViewEnum.TABLE_VIEW,
      })
    );
  }

  function handleListView(): void {
    dispatch(
      employeeActions.changeListView({
        listViewAction: ListViewEnum.TABLE_VIEW,
      })
    );
    router.push(RootRoutes.EMPLOYEE_LIST);
  }
  function handleAddEmployee(): void {
    dispatch(employeeActions.resetSelectedEmployee());
    router.push(RootRoutes.ADD_EMPLOYEE);
  }
  function handleSearchEmployee(): void {
    dispatch(employeeActions.triggerSearchBar());
  }
  return (
    <ButtonRootBox>
      {pathname === RootRoutes.EMPLOYEE_LIST && (
        <IconButton
          aria-label="Grid View"
          style={{ backgroundColor: "#5100c5", marginRight: "6px" }}
          onClick={handleSearchEmployee}
        >
          <SearchIcon style={{ color: "white" }} />
        </IconButton>
      )}
      {pathname !== RootRoutes.EMPLOYEE_LIST && (
        <StyledListButton onClick={handleListView} variant="contained">
          LIST VIEW
        </StyledListButton>
      )}
      {pathname === RootRoutes.EMPLOYEE_LIST && (
        <StyledButton onClick={handleAddEmployee} variant="contained">
          ADD EMPLOYEE
        </StyledButton>
      )}
      {pathname === RootRoutes.EMPLOYEE_LIST &&
        (listView === ListViewEnum.GRID_VIEW ? (
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
        ))}
    </ButtonRootBox>
  );
};
export default ButtonSection;
