"use client";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddEmployeeForm from "@/components/Employee/Add/EmployeeForm";

const RootBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: theme.spacing(1),
  width: "100%",
}));

const EditEmployee = (): JSX.Element => {
  return (
    <RootBox>
      <AddEmployeeForm />
    </RootBox>
  );
};
export default EditEmployee;
