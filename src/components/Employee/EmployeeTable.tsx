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
interface Data {
  id: string;
  firstName: string;
  lastName: string;
  number: string;
  email: string;
  gender: string;
  photo: string;
}

const initialData: Data[] = [
  {
    firstName: "Henri",
    lastName: "Rodriguez",
    email: "Darrin_Rippin@gmail.com",
    number: "+94771277218",
    gender: "Male",
    id: "1",
    photo: "https://i.ibb.co/3zcGRLS/av1.jpg",
  },
  {
    firstName: "Lindsay",
    lastName: "Herman",
    email: "Ewald.Kunde@gmail.com",
    number: "+94771274218",
    gender: "Female",
    id: "2",
    photo: "https://i.ibb.co/3zcGRLS/av1.jpg",
  },
  {
    firstName: "Gerda",
    lastName: "Trantow",
    email: "Mauricio.Stehr@yahoo.com",
    number: "+94771277681",
    gender: "Male",
    id: "3",
    photo: "https://i.ibb.co/3zcGRLS/av1.jpg",
  },
  {
    firstName: "Gerda",
    lastName: "Trantow",
    email: "Mauricio.Stehr@yahoo.com",
    number: "+94771277681",
    gender: "Male",
    id: "4",
    photo: "https://i.ibb.co/3zcGRLS/av1.jpg",
  },
  {
    firstName: "Gerda",
    lastName: "Trantow",
    email: "Mauricio.Stehr@yahoo.com",
    number: "+94771277681",
    gender: "Male",
    id: "5",
    photo: "https://i.ibb.co/3zcGRLS/av1.jpg",
  },
];
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
            {initialData.map((item) => (
              <TableRow key={item.id}>
                <AxisHeaderCell>
                  <Image
                    src={item.photo}
                    alt={item.firstName}
                    width={50}
                    height={50}
                    style={{
                      borderRadius: "50%",
                    }}
                  />
                </AxisHeaderCell>
                <AxisHeaderCell>{item.firstName}</AxisHeaderCell>
                <AxisHeaderCell>{item.lastName}</AxisHeaderCell>
                <AxisHeaderCell>{item.email}</AxisHeaderCell>
                <AxisHeaderCell>{item.photo}</AxisHeaderCell>
                <AxisHeaderCell>{item.gender}</AxisHeaderCell>
                <AxisHeaderCell>
                  <IconRootBox>
                    <IconButton
                      aria-label="Delete"
                      style={{
                        backgroundColor: "#ed1700",
                        marginRight: "10px",
                      }}
                    >
                      <DeleteIcon style={{ color: "white" }} />
                    </IconButton>
                    <IconButton
                      aria-label="Edit"
                      style={{ backgroundColor: "#09ee80", marginLeft: "6px" }}
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
