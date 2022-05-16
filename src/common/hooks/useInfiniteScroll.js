import { useRef, useEffect, useState } from "react";

export const useInfiniteScroll = (hasMorePosts) => {
  const infiniteScrollObserverRef = useRef(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (hasMorePosts && entry.isIntersecting) {
            setPageNumber((prevPage) => prevPage + 1);
          }
        });
      },
      { threshold: 1 }
    );

    const node = infiniteScrollObserverRef.current;

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [hasMorePosts]);

  return { pageNumber, setPageNumber, infiniteScrollObserverRef };
};
