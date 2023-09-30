"use client";
import React, { useState } from "react";
import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { generateAvatar } from "@/util/generateAvatar";
import Avatar from "react-avatar";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { SelectedEmployeeType } from "@/redux/employee/type";
import { employeeActions } from "@/redux/employee/slice";
import { useRouter } from "next/navigation";
import { RootRoutes } from "@/util/routes";

const RootTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: "#a7c940",
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
  verticalAlign: "middle",
}));
const IconRootBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
}));
const AxisHeaderCell = styled(TableCell)(({ theme }) => ({
  color: "black",
  fontWeight: "400",
  borderRight: "2px solid #a7c940",
  borderBottom: "2px solid #a7c940",
  borderLeft: "2px solid #a7c940",
}));

const EmployeeTable = (): JSX.Element => {
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
    dispatch(employeeActions.handleDeleteModel({ isModelOpen: true, employeeId }))
  };  
  return (
    <div>
      <TableContainer sx={{ width: "100%" }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <RootTableCell>Image</RootTableCell>
              <RootTableCell>First Name</RootTableCell>
              <RootTableCell>Last Name</RootTableCell>
              <RootTableCell>Email</RootTableCell>
              <RootTableCell>Phone</RootTableCell>
              <RootTableCell>Gender</RootTableCell>
              <RootTableCell>Action</RootTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allEmployee?.map((item: SelectedEmployeeType) => (
              <TableRow key={item.employeeId}>
                <AxisHeaderCell>
                  {/* <Image
                    src={item.photo}
                    alt={item.firstName}
                    width={50}
                    height={50}
                    style={{
                      borderRadius: "50%",
                    }}
                  /> */}
                  <Avatar
                    size="50"
                    style={{
                      display: "flex",
                      marginLeft: "40px",
                      marginTop: "10px",
                    }}
                    name={item.firstName}
                    src={generateAvatar()}
                  />
                </AxisHeaderCell>
                <AxisHeaderCell>{item.firstName}</AxisHeaderCell>
                <AxisHeaderCell>{item.lastName}</AxisHeaderCell>
                <AxisHeaderCell>{item.email}</AxisHeaderCell>
                <AxisHeaderCell>{item.phoneNumber}</AxisHeaderCell>
                <AxisHeaderCell>{item.gender}</AxisHeaderCell>
                <AxisHeaderCell>
                  <IconRootBox>
                    <IconButton
                      aria-label="Delete"
                      style={{
                        backgroundColor: "#ed1700",
                        marginRight: "10px",
                      }}
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
                </AxisHeaderCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default EmployeeTable;
