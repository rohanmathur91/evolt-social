import { useEffect } from "react";

export const useDocumentTitle = (title) => {
  useEffect(() => {
    window.document.title = `${title} | myspace`;
  }, [title]);
};
