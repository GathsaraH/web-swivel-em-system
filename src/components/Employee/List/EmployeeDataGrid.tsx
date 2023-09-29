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
}));

const EmployeeDataGrid = (): JSX.Element => {
  return (
    <div>
      <Grid container spacing={2.5}>
        {initialData.map((item) => (
          <Grid item xs={12} sm={6} md={2.4} key={item.id}>
            {" "}
            {/* Display 5 cards in a row */}
            <EmployeeCard elevation={5}>
              <Image
                src={item.photo}
                alt="Employee Photo"
                width={250}
                height={150}
                style={{
                  width: "100%",
                }}
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
                    {item.number}
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
              </CardContent>
            </EmployeeCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default EmployeeDataGrid;
