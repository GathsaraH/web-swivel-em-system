"use client";
import ButtonSection from "@/components/ButtonSection/ButtonSection";
import ConformationPopUp from "@/components/ConformationPopUp/ConformationPopUp";
import EmployeeDataGrid from "@/components/Employee/List/EmployeeDataGrid";
import EmployeeTable from "@/components/Employee/List/EmployeeTable";
import Loader from "@/components/Loader/Loader";
import SearchBar from "@/components/SearchBar/SearchBar";
import { employeeActions } from "@/redux/employee/slice";
import { ListViewEnum, SearchTypeEnum } from "@/redux/employee/type";
import { useAppSelector } from "@/redux/store";
import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
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
  const dispatch = useDispatch();
  const { listViewAction, isLoading } = useAppSelector(
    (state) => state.employeeReducer
  );
  useEffect(() => {
    dispatch(
      employeeActions.getAllEmployee({ searchTerm: SearchTypeEnum.NO_QUERY })
    );
  }, []);

  return (
    <RootBox>
      <ButtonRoot>
        <ButtonSection />
      </ButtonRoot>
      <ListRoot>
        {listViewAction === ListViewEnum.GRID_VIEW ? (
          <EmployeeDataGrid />
        ) : (
          <EmployeeTable />
        )}
      </ListRoot>
      <Loader />
      <SearchBar />
      <ConformationPopUp />
    </RootBox>
  );
};
export default EmployeeList;
