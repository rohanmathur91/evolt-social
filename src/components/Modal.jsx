import React from "react";
import ReactDOM from "react-dom";

export const Modal = ({ children, handleShowModal }) => {
  return ReactDOM.createPortal(
    <div
      onClick={() => handleShowModal(false)}
      className="flex flex-row items-center justify-center fixed top-0 bottom-0 right-0 left-0 h-screen w-screen z-10 bg-black/40"
    >
      {children}
    </div>,
    document.getElementById("modal")
  );
};
