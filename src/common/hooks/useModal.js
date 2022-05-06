import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usePosts, setModalDisplay, setCurrentEditPost } from "../../features";

export const useModal = () => {
  const dispatch = useDispatch();
  const { showModal } = usePosts();

  const handleShowModal = (
    show = false,
    mouseUpTarget = null,
    mouseDownTarget = null
  ) => {
    // only update the modal state if clicked target is same
    if (mouseUpTarget === mouseDownTarget) {
      dispatch(setModalDisplay(show));

      // clear the current edited post when modal closed
      if (!show) {
        dispatch(setCurrentEditPost(null));
      }
    }
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    }

    return () => (document.body.style.overflow = "visible");
  }, [showModal]);

  return { showModal, handleShowModal };
};
