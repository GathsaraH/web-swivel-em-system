import React, { useState } from "react";
import { debounce } from "lodash";
import { styled } from "@mui/material/styles";
import {
  TextField,
  IconButton,
  Popover,
  Backdrop,
  CircularProgress,
  Modal,
  Box,
  Button,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { employeeActions } from "@/redux/employee/slice";
import { SearchTypeEnum } from "@/redux/employee/type";
const RootBox = styled(Box)(({ theme }) => ({
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 120,
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
  marginTop: theme.spacing(-2),
  margin: theme.spacing(2),
}));
const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const { triggerSearchBar } = useAppSelector((state) => state.employeeReducer);
  const handleSearch = debounce((value: string) => {
    dispatch(employeeActions.getAllEmployee({ searchTerm: value }));
  }, 500);

  const handleClose = () => {
    dispatch(
      employeeActions.getAllEmployee({ searchTerm: SearchTypeEnum.NO_QUERY })
    );
    dispatch(employeeActions.triggerSearchBar());
  };

  return (
    <Modal
      open={triggerSearchBar}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <RootBox style={{ padding: "16px" }}>
        <TextField
          label="Search"
          variant="outlined"
          placeholder="Type first name / last name / email / phone number to search..."
          fullWidth
          sx={{ marginTop: "20px" }}
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            handleSearch(e.target.value);
          }}
        />
        <ButtonBox>
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "250px",
              borderRadius: "10px",
              marginTop: "8px",
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </ButtonBox>
      </RootBox>
    </Modal>
  );
};

export default SearchBar;
