"use client";
import ButtonSection from "@/components/Employee/ButtonSection";
import EmployeeDataGrid from "@/components/Employee/EmployeeDataGrid";
import EmployeeTable from "@/components/Employee/EmployeeTable";
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
  marginTop: theme.spacing(4),
}));
const EmployeeList = (): JSX.Element => {
  return (
    <RootBox>
      <ButtonRoot>
        <ButtonSection />
      </ButtonRoot>
      <ListRoot>
        <EmployeeDataGrid />
        {/* <EmployeeTable /> */}
      </ListRoot>
    </RootBox>
  );
};
export default EmployeeList;
