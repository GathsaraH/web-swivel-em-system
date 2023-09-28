"use client";
import ButtonSection from "@/components/Employee/ButtonSection";
import EmployeeDataGrid from "@/components/Employee/EmployeeDataGrid";
import EmployeeTable from "@/components/Employee/EmployeeTable";
import { ListViewEnum } from "@/redux/employee/type";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
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
      </ListRoot>
    </RootBox>
  );
};
export default EmployeeList;
