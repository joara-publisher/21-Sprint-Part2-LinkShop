import { useEffect, useRef } from "react";

const useInfiniteScroll = (targetRef, onIntersect) => {
  const observerRef = useRef(null);

  useEffect(() => {
    if (!targetRef.current) return;

    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            onIntersect();
          }
        },
        { rootMargin: "100px" }
      );
    }

    observerRef.current.observe(targetRef.current);

    return () => {
      observerRef.current.disconnect();
    };
  }, [targetRef, onIntersect]);
};

export default useInfiniteScroll;
