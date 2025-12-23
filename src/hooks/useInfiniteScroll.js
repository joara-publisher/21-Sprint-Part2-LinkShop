import { useEffect, useRef, useState, useCallback } from "react";

const useInfiniteScroll = (targetRef) => {
  const observerRef = useRef(null);
  const [intersecting, setIntersecting] = useState(true);

  const getObserver = useCallback(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          setIntersecting(entries.some((entry) => entry.isIntersecting));
        },
        {
          root: null,
          rootMargin: "100px",
          threshold: 0,
        }
      );
    }
    return observerRef.current;
  }, []);

  useEffect(() => {
    if (!targetRef.current) return;

    const observer = getObserver();
    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, [targetRef, getObserver]);

  return intersecting;
};

export default useInfiniteScroll;
