"use client";
import { addEmployeeSchema } from "@/util/schema/validationSchema";
import {
  Box,
  Button,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { employeeActions } from "@/redux/employee/slice";
import { useAppSelector } from "@/redux/store";
import { usePathname, useRouter } from "next/navigation";
import { RootRoutes } from "@/util/routes";
import ConformationPopUp from "@/components/ConformationPopUp/ConformationPopUp";
import ButtonSection from "@/components/ButtonSection/ButtonSection";

const RootBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  minHeight: "510px",
  marginTop: theme.spacing(3),
}));
const StyledFormBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "420px",
  justifyContent: "space-between",
  alignItems: "center",
  margin: theme.spacing(2.4),
}));
const StyledRootFormBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "fit-content",
}));
const StyledLabel = styled(InputLabel)(({ theme }) => ({
  fontWeight: "400",
  color: "black",
  whiteSpace: "nowrap",
  width: "150px",
  fontSize: "16px",
  fontStyle: "normal",
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
}));
const StyledTextInput = styled(TextField)(({ theme }) => ({
  color: "black",
  height: "40px",
}));
const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: "18px",
  width: "520px",
  minHeight: "530px",
  marginTop: theme.spacing(-2),
}));
const StyledTypo = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: "black",
  fontSize: "24px",
}));
const StyledButtonBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  borderRadius: "8px",
  width: "100%",
  height: "60px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "8px",
  width: "150px",
  height: "45px",
  border: "2px solid #5100c5",
  color: "#5100c5",
  fontWeight: "bold",
  marginRight: theme.spacing(6.5),
  marginBottom: theme.spacing(0),
}));

const StyledFormHelper = styled(FormHelperText)(({ theme }) => ({
  marginLeft: theme.spacing(16.5),
  marginTop: theme.spacing(9),
  position: "absolute",
}));
const ButtonRoot = styled(Box)(({ theme }) => ({
  display: "flex",
  marginLeft: theme.spacing(50),
  justifyContent: "flex-end",
  marginBottom: theme.spacing(4),
}));
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
}

const EmployeeForm = (): JSX.Element => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const selectedEmployee = useAppSelector(
    (state) => state.employeeReducer.selectedEmployee
  );
  const initialValues: FormValues = {
    firstName: selectedEmployee.firstName,
    lastName: selectedEmployee.lastName,
    email: selectedEmployee.email,
    phoneNumber: selectedEmployee.phoneNumber,
    gender: selectedEmployee.gender.toLowerCase(),
  };
  const onSubmit = (values: FormValues) => {
    if (pathname === RootRoutes.ADD_EMPLOYEE) {
      dispatch(
        employeeActions.addEmployee({
          router: router.push(RootRoutes.EMPLOYEE_LIST),
          email: values.email,
          firstName: values.firstName,
          gender: values.gender,
          lastName: values.lastName,
          phoneNumber: values.phoneNumber,
        })
      );
    } else {
      dispatch(
        employeeActions.editEmployee({
          employeeId: selectedEmployee.employeeId,
          data: values,
          router: router.push(RootRoutes.EMPLOYEE_LIST),
        })
      );
    }
  };
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: addEmployeeSchema,
      enableReinitialize: true,
      onSubmit,
    });
  return (
    <RootBox>
      <ButtonRoot>
        <ButtonSection />
      </ButtonRoot>
      <StyledPaper elevation={3}>
        <Grid container spacing={2} component="form" onSubmit={handleSubmit}>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            sx={{ marginLeft: "30px", marginTop: "30px" }}
          >
            <StyledRootFormBox>
              <StyledFormBox>
                <StyledLabel>First Name</StyledLabel>
                <StyledTextInput
                  name="firstName"
                  value={values.firstName}
                  fullWidth
                  type="string"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </StyledFormBox>
              <StyledFormHelper error={Boolean(errors.firstName)}>
                {Boolean(touched.firstName && errors.firstName) &&
                  errors.firstName}
              </StyledFormHelper>
            </StyledRootFormBox>
            <StyledRootFormBox>
              <StyledFormBox>
                <StyledLabel>Last Name</StyledLabel>
                <StyledTextInput
                  name="lastName"
                  value={values.lastName}
                  fullWidth
                  type="string"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </StyledFormBox>
              <StyledFormHelper error={Boolean(errors.lastName)}>
                {Boolean(touched.lastName && errors.lastName) &&
                  errors.lastName}
              </StyledFormHelper>
            </StyledRootFormBox>
            <StyledRootFormBox>
              <StyledFormBox>
                <StyledLabel>Email</StyledLabel>
                <StyledTextInput
                  name="email"
                  fullWidth
                  value={values.email}
                  type="string"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </StyledFormBox>
              <StyledFormHelper error={Boolean(errors.email)}>
                {Boolean(touched.email && errors.email) && errors.email}
              </StyledFormHelper>
            </StyledRootFormBox>
            <StyledRootFormBox>
              <StyledFormBox>
                <StyledLabel>Phone</StyledLabel>
                <StyledTextInput
                  name="phoneNumber"
                  fullWidth
                  value={values.phoneNumber}
                  type="string"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </StyledFormBox>
              <StyledFormHelper error={Boolean(errors.phoneNumber)}>
                {Boolean(touched.phoneNumber && errors.phoneNumber) &&
                  errors.phoneNumber}
              </StyledFormHelper>
            </StyledRootFormBox>
            <StyledRootFormBox>
              <StyledFormBox>
                <StyledLabel>Gender</StyledLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  fullWidth
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <MenuItem value={"male"}>Male</MenuItem>
                  <MenuItem value={"female"}>Female</MenuItem>
                </Select>
              </StyledFormBox>
              <StyledFormHelper error={Boolean(errors.gender)}>
                {Boolean(touched.gender && errors.gender) && errors.gender}
              </StyledFormHelper>
            </StyledRootFormBox>
          </Grid>
          {pathname === RootRoutes.ADD_EMPLOYEE ? (
            <StyledButtonBox>
              <StyledButton type="submit" variant="outlined">
                ADD
              </StyledButton>
            </StyledButtonBox>
          ) : (
            <StyledButtonBox>
              <StyledButton type="submit" variant="outlined">
                SAVE
              </StyledButton>
            </StyledButtonBox>
          )}
        </Grid>
      </StyledPaper>
    </RootBox>
  );
};
export default EmployeeForm;
