import { useState, useEffect } from "react";

export const useInfiniteScroll = (allPosts) => {
  const LIMIT = 3;
  const totalPosts = allPosts.length;
  const [pageNumber, setPageNumber] = useState(1);
  const [observerRef, setObserverRef] = useState(null);
  const feed = allPosts.slice(0, pageNumber * LIMIT);
  const hasMorePosts = pageNumber < Math.ceil(totalPosts / pageNumber);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (hasMorePosts && entries[0].isIntersecting) {
          setTimeout(() => setPageNumber((prevPage) => prevPage + 1), 800);
        }
      },
      { threshold: 1 }
    );

    if (observerRef) {
      observer.observe(observerRef);
    }

    return () => {
      if (observerRef) {
        observer.unobserve(observerRef);
      }
    };
  }, [hasMorePosts, observerRef]);

  return {
    feed,
    hasMorePosts,
    pageNumber,
    setPageNumber,
    observerRef,
    setObserverRef,
  };
};
