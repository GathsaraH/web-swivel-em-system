"use client";
import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
  withTheme,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Avatar from "react-avatar";
import { generateAvatar } from "@/util/generateAvatar";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store";
import { SelectedEmployeeType } from "@/redux/employee/type";
import { employeeActions } from "@/redux/employee/slice";
import { RootRoutes } from "@/util/routes";

const EmployeeCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxHeight: "320px",
  boxShadow: theme.shadows[5],
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
}));
const InfoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
}));

const IconRootBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "-4px !important",
  marginRight: "-10px !important",
  position: "relative",
  top: "12px",
}));

const EmployeeDataGrid = (): JSX.Element => {
  const dispatch = useDispatch();
  const router = useRouter();
  const allEmployee = useAppSelector(
    (state) => state.employeeReducer.allEmployee
  );
  const getSelectedRowData = (rowData: SelectedEmployeeType) => {
    dispatch(employeeActions.storeSelectedEmployee(rowData));
    router.push(`${RootRoutes.EDIT_EMPLOYEE}/${rowData.employeeId}`);
  };
  const deleteEmployee = (employeeId: string) => {
    dispatch(
      employeeActions.handleDeleteModel({ isModelOpen: true, employeeId })
    );
  };
  return (
    <div>
      <Grid container spacing={2.5}>
        {allEmployee.map((item: SelectedEmployeeType) => (
          <Grid item xs={12} sm={6} md={2.4} key={item.employeeId}>
            <EmployeeCard elevation={5}>
              <Avatar
                size="100"
                style={{
                  display: "flex",
                  marginLeft: "100px",
                  marginTop: "10px",
                }}
                name={item.firstName}
                src={generateAvatar()}
              />
              <CardContent>
                <InfoBox>
                  <Typography variant="subtitle1" color="text.secondary">
                    Name:
                  </Typography>
                  <Typography
                    sx={{ marginLeft: "5px" }}
                    variant="subtitle1"
                    component="div"
                  >
                    {item.firstName}
                  </Typography>
                </InfoBox>
                <InfoBox>
                  <Typography variant="subtitle1" color="text.secondary">
                    Email:
                  </Typography>
                  <Typography
                    sx={{ marginLeft: "5px" }}
                    variant="subtitle1"
                    component="div"
                  >
                    {item.email}
                  </Typography>
                </InfoBox>
                <InfoBox>
                  <Typography variant="subtitle1" color="text.secondary">
                    Number:
                  </Typography>
                  <Typography
                    sx={{ marginLeft: "5px" }}
                    variant="subtitle1"
                    component="div"
                  >
                    {item.phoneNumber}
                  </Typography>
                </InfoBox>
                <InfoBox>
                  <Typography variant="subtitle1" color="text.secondary">
                    Gender:
                  </Typography>
                  <Typography
                    sx={{ marginLeft: "5px" }}
                    variant="subtitle1"
                    component="div"
                  >
                    {item.gender}
                  </Typography>
                </InfoBox>
                <IconRootBox>
                  <IconButton
                    aria-label="Delete"
                    style={{ backgroundColor: "#ed1700", marginRight: "10px" }}
                    onClick={() => deleteEmployee(item.employeeId)}
                  >
                    <DeleteIcon style={{ color: "white" }} />
                  </IconButton>
                  <IconButton
                    aria-label="Edit"
                    style={{ backgroundColor: "#09ee80", marginLeft: "6px" }}
                    onClick={() => getSelectedRowData(item)}
                  >
                    <EditIcon style={{ color: "white" }} />
                  </IconButton>
                </IconRootBox>
              </CardContent>
            </EmployeeCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default EmployeeDataGrid;
