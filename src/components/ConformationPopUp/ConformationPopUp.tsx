"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { employeeActions } from "@/redux/employee/slice";

const RootBox = styled(Box)(({ theme }) => ({
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 200,
  backgroundColor: "#fff",
  border: "2px solid #590de5",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
}));

const ButtonBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  marginTop: theme.spacing(2),
  margin: theme.spacing(2),
}));

const ConformationPopUp = (): JSX.Element => {
  const dispatch = useDispatch();
  const deleteConformationDetails = useAppSelector(
    (state) => state.employeeReducer.deleteConformationDetails
  );
  const handleClose = () => {
    dispatch(
      employeeActions.handleDeleteModel({ isModelOpen: false, employeeId: "" })
    );
  };
  const handleDelete = () => {
    dispatch(
      dispatch(
        employeeActions.deleteEmployee({
          employeeId: deleteConformationDetails.employeeId,
        })
      )
    );
  };
  return (
    <div>
      <Modal
        open={deleteConformationDetails.isModelOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <RootBox>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Do you want to delete this employee?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This action cannot be undone.
          </Typography>
          <ButtonBox>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{ marginLeft: "8px" }}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </ButtonBox>
        </RootBox>
      </Modal>
    </div>
  );
};
export default ConformationPopUp;
