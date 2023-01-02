import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./Loading.css";

export default function Loading() {
  return (
    <Box sx={{ display: "flex" }} className="loading-box">
      <p>Loading</p>
      <CircularProgress />
    </Box>
  );
}
