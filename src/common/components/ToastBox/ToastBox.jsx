import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ToastBox.css";

export const ToastBox = () => {
  return (
    <ToastContainer
      draggable
      rtl={false}
      pauseOnHover
      closeOnClick
      autoClose={2000}
      pauseOnFocusLoss
      position="top-right"
      hideProgressBar={false}
      newestOnTop={false}
      className="toast"
    />
  );
};
