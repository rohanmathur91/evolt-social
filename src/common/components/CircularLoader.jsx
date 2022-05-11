import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export const CircularLoader = ({ size, customStyle, position }) => {
  return (
    <span
      className={`${customStyle} flex items-center justify-center ${
        position === "center" ? "absolute top-0 bottom-0 left-0 right-0" : ""
      }`}
    >
      <CircularProgress size={size} color="inherit" />
    </span>
  );
};

CircularLoader.defaultProps = { size: "2rem", customStyle: "", position: "" };
