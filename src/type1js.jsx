import React, { useEffect } from "react";
import Typed from "typed.js";

const Type1js = () => {
  useEffect(() => {
    const typed = new Typed(".cli-title", {
      strings: [
        "gh pr status",
        "gh pr checkout",
        "gh pr create",
        "gh pr checks",
        "gh alias set",
      ],
      typeSpeed: 100,
      backSpeed: 0,
      backDelay: 6000,
      loop: true,
      cursorChar: "",
    });

    // Clean up Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return null; // This component doesn't need to return any JSX since Typed.js manages the text
};

export default Type1js;
