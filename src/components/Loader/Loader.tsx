import { useAppSelector } from "@/redux/store";
import { Backdrop, CircularProgress, Typography } from "@mui/material";

const Loader = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.employeeReducer);
  return (
    <Backdrop
      sx={{
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
      <Typography
        sx={{
          marginTop: 2,
          fontStyle: "bold",
        }}
      >
        Loading...
      </Typography>
    </Backdrop>
  );
};
export default Loader;
