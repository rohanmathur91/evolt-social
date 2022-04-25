import { useState, useEffect } from "react";

export const useModal = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = (show) => setShowModal(show);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    }

    return () => (document.body.style.overflow = "visible");
  }, [showModal]);

  return { showModal, handleShowModal };
};
