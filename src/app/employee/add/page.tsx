"use client";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import AddEmployeeForm from "@/components/Employee/Add/EmployeeForm";
const RootBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: theme.spacing(1),
  width: "100%",
}));

const AddEmployee = (): JSX.Element => {
  return (
    <RootBox>
      <AddEmployeeForm />
    </RootBox>
  );
};
export default AddEmployee;
