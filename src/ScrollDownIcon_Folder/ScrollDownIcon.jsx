import React, { useState, useEffect } from 'react';
import { FaMouse } from 'react-icons/fa';

const ScrollDownIcon = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  useEffect(() => {
    // Show the scroll icon after 3 seconds if the user doesn't scroll
    const initialTimeout = setTimeout(() => {
      setShowIcon(true);
    }, 6000);

    const handleScroll = () => {
      setIsScrolling(true);
      setShowIcon(false); // Hide the icon when scrolling starts

      // Clear any existing scroll timeout and set a new one
      if (scrollTimeout) clearTimeout(scrollTimeout);

      // If user stops scrolling for 3 seconds, show the scroll icon again
      const timeout = setTimeout(() => {
        setIsScrolling(false);
        setShowIcon(true);
      }, 6000);

      setScrollTimeout(timeout);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      clearTimeout(initialTimeout);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollTimeout]);

  if (!showIcon) return null;

  return (
    <div className="bg-black bg-opacity-40 rounded-lg py-6 px-3 fixed top-1/2 left-[38%] md:left-1/2 transform flex flex-col items-center justify-center animate-fade-in">
      <FaMouse className="text-3xl text-white animate-bounce" />
      <p className="text-white mt-2 text-[16px]">Scroll Now</p>
    </div>
  );
};

export default ScrollDownIcon;
