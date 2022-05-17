import { useEffect } from "react";

export const useOutsideClick = (ref, isOptionsShown, handleOutsideClick) => {
  useEffect(() => {
    const handleMousedown = (e) => {
      if (isOptionsShown && ref.current && !ref.current.contains(e.target)) {
        handleOutsideClick();
      }
    };

    if (isOptionsShown) {
      document.body.addEventListener("mousedown", handleMousedown);
    }

    return () => {
      document.body.removeEventListener("mousedown", handleMousedown);
    };
  }, [ref, isOptionsShown, handleOutsideClick]);
};
