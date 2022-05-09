import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usePosts, setModalType, setCurrentEditPost } from "../../features";

export const useModal = () => {
  const dispatch = useDispatch();
  const { modalType } = usePosts();

  const handleModalType = (
    type = "",
    mouseUpTarget = null,
    mouseDownTarget = null
  ) => {
    // only update the modal state if clicked target is same
    if (mouseUpTarget === mouseDownTarget) {
      dispatch(setModalType(type));

      // clear the current edited post when modal closed
      if (!type) {
        dispatch(setCurrentEditPost(null));
      }
    }
  };

  useEffect(() => {
    if (modalType) {
      document.body.style.overflow = "hidden";
    }

    return () => (document.body.style.overflow = "visible");
  }, [modalType]);

  return { modalType, handleModalType };
};
