import { useEffect, useRef, useState } from 'react';

export const useComponentVisible = (initialIsVisible) => {
  let ref = useRef(null);

  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    } else {
      setIsComponentVisible(true);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
};
