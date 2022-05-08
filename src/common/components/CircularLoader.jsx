import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export const CircularLoader = ({ size, style }) => {
  return (
    <span className={`${style} flex items-center justify-center`}>
      <CircularProgress size={size} color="inherit" />
    </span>
  );
};

CircularLoader.defaultProps = { size: "2rem", style: "" };
