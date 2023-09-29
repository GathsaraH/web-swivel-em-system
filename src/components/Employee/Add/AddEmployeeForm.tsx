"use client";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const RootBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  marginTop: theme.spacing(3),
}));
const StyledFormBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "450px",
  justifyContent: "space-between",
  alignItems: "center",
  margin: theme.spacing(3),
}));
const StyledLabel = styled(InputLabel)(({ theme }) => ({
  fontWeight: "500",
  color: "black",
  whiteSpace: "nowrap",
  width: "150px",
  fontSize: "18px",
  fontStyle: "normal",
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
}));
const StyledTextInput = styled(TextField)(({ theme }) => ({
  color: "black",
}));
const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: "18px",
}));
const StyledTypo = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: "black",
  fontSize: "24px",
  marginBottom: theme.spacing(3),
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
  marginRight: theme.spacing(3),
  marginBottom: theme.spacing(2),
}));
const AddEmployeeForm = (): JSX.Element => {
  return (
    <RootBox>
      <StyledTypo>Add Employee</StyledTypo>
      <StyledPaper elevation={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <StyledFormBox>
              <StyledLabel>First Name</StyledLabel>
              <StyledTextInput fullWidth type="string" />
            </StyledFormBox>
            <StyledFormBox>
              <StyledLabel>Last Name</StyledLabel>
              <StyledTextInput fullWidth type="string" />
            </StyledFormBox>
            <StyledFormBox>
              <StyledLabel>Email</StyledLabel>
              <StyledTextInput fullWidth type="string" />
            </StyledFormBox>
            <StyledFormBox>
              <StyledLabel>Phone</StyledLabel>
              <StyledTextInput fullWidth type="string" />
            </StyledFormBox>
            <StyledFormBox>
              <StyledLabel>Gender</StyledLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                fullWidth
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
              </Select>
            </StyledFormBox>
          </Grid>
        </Grid>
        <StyledButtonBox>
          <StyledButton variant="outlined">ADD</StyledButton>
        </StyledButtonBox>
      </StyledPaper>
    </RootBox>
  );
};
export default AddEmployeeForm;
