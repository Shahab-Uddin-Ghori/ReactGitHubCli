import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Type2 = () => {
  // Create a ref to attach Typed.js to the correct element
  const typedElement = useRef(null);

  useEffect(() => {
    // Initialize Typed.js instance
    const typed = new Typed(typedElement.current, {
      strings: [
        "Status of your pull requests.",
        "Check out pull request",
        "Create a new release",
        "Shortcut for a gh command.",
      ],
      typeSpeed: 30,
      backSpeed: 0,
      backDelay: 6000,
      loop: true,
      cursorChar: "",
    });

    // Cleanup Typed.js instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typedElement} className="cli-title-detail"></span>;
};

export default Type2;
