import React, { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import classes from "./ScrollToTopButton.module.css";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(null);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY < 300) {
        setIsVisible("down"); // Show "Scroll to Bottom" icon at the top
      } else if (window.scrollY > 1900) {
        setIsVisible("up"); // Show "Scroll to Top" icon further down
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScroll = () => {
    if (isVisible === "up") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (isVisible === "down") {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {isVisible && (
        <div onClick={handleScroll} className={classes["scroll-to-top"]}>
          {isVisible === "up" ? (
            <FaArrowUp size={20} />
          ) : (
            <FaArrowDown size={20} />
          )}
        </div>
      )}
    </>
  );
}

export default ScrollToTopButton;
