import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./App.css"; // Ensure this path is correct

const Type3 = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "$ <span class='blue-text'>gh</span> pr <span class='yellow-text'>status</span> Relevant pull requests in cli/cli Current branch There is no pull request associated with [fix-homepage-bug] Created by you You have no open pull requests Requesting a code review from you <span class='green-text'>#100</span> Fix footer on homepage [fix-homepage-footer] ✓ Checks passing - Review pending",
        "$ <span class='blue-text'>gh</span> pr checkout <span class='green-text'>12</span> remote: Enumerating objects: 66, done. remote: Counting objects: 100% (66/66), done. remote: Total 83 (delta 66), reused 66 (delta 66), pack-reused 17 Unpacking objects: 100% (83/83), done. From <span class='green-text'>https://github.com</span> owner/repo * [new ref] refs/pull/8896/head -> patch-2'",
        "$ <span class='blue-text'>gh</span> pr create Creating pull request for feature-branch into main in ampinsk/test ? Title My new pull request ? Body[(e) to launch vim, enter to skip] ? What's next? Submit",
        "$ <span class='blue-text'>gh</span> pr checks All checks were successful 1 failing, 3 successful, and 1 pending checks- CodeQL 3m43s <span class='green-text'>https://github.com</span> build (macos-latest) 4m18s <span class='green-text'>https://github.com</span>/cli/cli build (ubuntu-latest)",
        "$ <span class='blue-text'>gh</span> alias set bugs 'issue li - Adding alias for bugs: issue list --label= bugs ✓ Added alias.$ <span class='blue-text'>gh</span> bugs Showing 2 of 7issues in cli/cli that match your search <span class='green-text'>#19</span> Pagination request returns empty JSON (bug) <span class='green-text'>#21</span> Error raised when passing valid parameters (bug)",
      ],
      typeSpeed: 0,
      backSpeed: 0,
      backDelay: 3000,
      loop: true,
      cursorChar: "",
      onStringTyped: function (arrayPos, self) {
        const interfaceTextElement =
          typedElement.current.querySelector(".typed-cursor");
        if (interfaceTextElement) {
          const element = interfaceTextElement.previousSibling;
          if (element) {
            element.innerHTML = element.innerHTML
              .replace(/gh/g, '<span class="blue-text">gh</span>')
              .replace(/status/g, '<span class="yellow-text">status</span>')
              .replace(/\[#?(\d+)\]/g, '[<span class="green-text">$1</span>]')
              .replace(/https?:\/\/\S+/g, '<span class="green-text">$&</span>');
          }
        }
      },
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <div ref={typedElement} className="cli-interface-content"></div>;
};

export default Type3;
