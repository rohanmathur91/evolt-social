import React, { useState } from "react";
import ReactDOM from "react-dom";

export const Modal = ({ children, handleShowModal }) => {
  const [mouseUpTarget, setMouseUpTarget] = useState(null);
  const [mouseDownTarget, setMouseDownTarget] = useState(null);

  const handleMouseEvent = (e) => {
    if (e.type === "mouseup") {
      setMouseUpTarget(e.target);
      return;
    }
    setMouseDownTarget(e.target);
  };

  return ReactDOM.createPortal(
    <div
      onMouseUp={handleMouseEvent}
      onMouseDown={handleMouseEvent}
      onClick={(e) => handleShowModal(false, mouseUpTarget, mouseDownTarget)}
      className="flex flex-row justify-center fixed top-0 bottom-0 right-0 left-0 h-screen w-screen z-10 bg-black/40"
    >
      <div className="mx-4 mt-20" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
};
