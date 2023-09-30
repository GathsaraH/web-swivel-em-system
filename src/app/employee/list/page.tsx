"use client";
import ConformationPopUp from "@/components/ConformationPopUp/ConformationPopUp";
import ButtonSection from "@/components/Employee/List/ButtonSection";
import EmployeeDataGrid from "@/components/Employee/List/EmployeeDataGrid";
import EmployeeTable from "@/components/Employee/List/EmployeeTable";
import { ListViewEnum } from "@/redux/employee/type";
import { useAppSelector } from "@/redux/store";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
const RootBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: theme.spacing(1),
  width: "100%",
}));
const ButtonRoot = styled(Box)(({ theme }) => ({
  display: "flex",
  marginRight: theme.spacing(1),
  justifyContent: "flex-end",
}));
const ListRoot = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: theme.spacing(2),
}));
const EmployeeList = (): JSX.Element => {
  const listView = useAppSelector(
    (state) => state.employeeReducer.listViewAction
  );
  return (
    <RootBox>
      <ButtonRoot>
        <ButtonSection />
      </ButtonRoot>
      <ListRoot>
        {listView === ListViewEnum.GRID_VIEW ? (
          <EmployeeDataGrid />
        ) : (
          <EmployeeTable />
        )}
        <ConformationPopUp />
      </ListRoot>
    </RootBox>
  );
};
export default EmployeeList;
