"use client";
import React, { useState } from "react";
import { Box, Card, CardContent, Grid, Paper, Typography } from "@mui/material";
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
    id: "3",
    photo: "https://i.ibb.co/3zcGRLS/av1.jpg",
  },
];
const IconRootBox = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: theme.spacing(1),
  justifyContent: "flex-end",
  marginBottom: "40px !important",
}));

const EmployeeDataGrid = (): JSX.Element => {
  return (
    <div>
      <Grid container spacing={12}>
        {initialData.map((item: Data) => (
          <Grid item container xs={3} key={item.id}>
            <Card
              elevation={5}
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: "300px",
                maxHeight: "360px",
              }}
            >
              <Image
                src={item.photo}
                alt="Employee Photo"
                width={300}
                height={200}
              />
              <CardContent>
                <Typography variant="subtitle1" component="div">
                  {item.firstName}
                </Typography>
                <Typography variant="subtitle1" component="div">
                  {item.email}
                </Typography>
                <Typography variant="subtitle1" component="div">
                  {item.number}
                </Typography>
                <Typography variant="subtitle1" component="div">
                  {item.gender}
                </Typography>
                <IconRootBox>
                  <IconButton
                    aria-label="Delete"
                    style={{ backgroundColor: "#ed1700", marginRight: "30px" }}
                  >
                    <DeleteIcon style={{ color: "white" }} />
                  </IconButton>
                  <IconButton
                    aria-label="Edit"
                    style={{ backgroundColor: "#09ee80" }}
                  >
                    <EditIcon style={{ color: "white" }} />
                  </IconButton>
                </IconRootBox>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default EmployeeDataGrid;
