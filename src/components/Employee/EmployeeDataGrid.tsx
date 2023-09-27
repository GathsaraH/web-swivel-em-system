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
} from "@mui/material";

interface Data {
  id: number;
  name: string;
  age: number;
}

const initialData: Data[] = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Bob", age: 35 },
];
const EmployeeDataGrid = (): JSX.Element => {
  const [viewMode, setViewMode] = useState<"grid" | "table">("table");
  const [data, setData] = useState<Data[]>(initialData);

  const toggleView = () => {
    setViewMode(viewMode === "grid" ? "table" : "grid");
  };

  return (
    <div>
      <Button onClick={toggleView} variant="contained" color="primary">
        Toggle View
      </Button>
      {viewMode === "grid" ? (
        <Grid container spacing={2}>
          {data.map((item) => (
            <Grid item xs={3} key={item.id}>
              <Paper elevation={3}>
                <div>ID: {item.id}</div>
                <div>Name: {item.name}</div>
                <div>Age: {item.age}</div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.age}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};
export default EmployeeDataGrid;
