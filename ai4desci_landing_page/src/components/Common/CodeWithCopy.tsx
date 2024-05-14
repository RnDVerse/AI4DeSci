"use client";

import Prism from "prismjs";
import { useEffect, useState } from "react";
import Clipboard from "react-clipboard.js";

const copyIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.6875 4.12499L14.4062 0.875C14.1875 0.65625 13.875 0.53125 13.5625 0.53125H7.875C6.96875 0.53125 6.21875 1.28125 6.21875 2.1875V13.5937C6.21875 14.5 6.96875 15.25 7.875 15.25H16.375C17.2812 15.25 18.0313 14.5 18.0313 13.5937V4.96874C18.0313 4.65624 17.9062 4.34374 17.6875 4.12499ZM14.4688 2.9375L15.6562 4.12499H14.4688V2.9375ZM16.375 13.8437H7.875C7.75 13.8437 7.625 13.7187 7.625 13.5937V2.1875C7.625 2.0625 7.75 1.9375 7.875 1.9375H13.0625V4.81249C13.0625 5.18749 13.375 5.53124 13.7812 5.53124H16.625V13.625C16.625 13.75 16.5 13.8437 16.375 13.8437Z"
      fill="currentColor"
    />
    <path
      d="M13.7817 7.03125H9.65674C9.28174 7.03125 8.93799 7.34375 8.93799 7.75C8.93799 8.15625 9.25049 8.46875 9.65674 8.46875H13.7817C14.1567 8.46875 14.5005 8.15625 14.5005 7.75C14.5005 7.34375 14.1567 7.03125 13.7817 7.03125Z"
      fill="currentColor"
    />
    <path
      d="M13.7817 9.65625H9.65674C9.28174 9.65625 8.93799 9.96875 8.93799 10.375C8.93799 10.75 9.25049 11.0938 9.65674 11.0938H13.7817C14.1567 11.0938 14.5005 10.7812 14.5005 10.375C14.4692 9.96875 14.1567 9.65625 13.7817 9.65625Z"
      fill="currentColor"
    />
    <path
      d="M13.0625 16.25C12.6875 16.25 12.3438 16.5625 12.3438 16.9687V17.8125C12.3438 17.9375 12.2188 18.0625 12.0938 18.0625H3.62501C3.50001 18.0625 3.37501 17.9375 3.37501 17.8125V6.375C3.37501 6.25 3.50001 6.125 3.62501 6.125H4.68751C5.06251 6.125 5.40626 5.8125 5.40626 5.40625C5.40626 5 5.09376 4.6875 4.68751 4.6875H3.62501C2.71875 4.6875 1.96875 5.4375 1.96875 6.34375V17.8125C1.96875 18.7187 2.71875 19.4687 3.62501 19.4687H12.125C13.0313 19.4687 13.7813 18.7187 13.7813 17.8125V16.9687C13.7813 16.5625 13.4688 16.25 13.0625 16.25Z"
      fill="currentColor"
    />
  </svg>
);

const CodeWithCopy = ({ code }: any) => {
  const [copyText, setCopyText] = useState("Copy");
  const [coping, setCoping] = useState(false);
  const notify = () => {
    setCopyText("Copied");
    setCoping(true);

    setTimeout(() => {
      setCopyText("Copy");
      setCoping(false);
    }, 1000);
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <pre
      className={`relative language-${
        code?.language ? code?.language : "html"
      }`}
      data-language={code?.language || ""}
    >
      <code className={`language-${code?.language ? code?.language : "html"}`}>
        {code?.code}
      </code>
      <Clipboard
        className={`absolute right-2 top-2 z-10 flex h-9 cursor-pointer items-center justify-center rounded-lg border border-solid bg-stroke px-5 text-sm text-black duration-300 hover:border-primary hover:bg-primary hover:text-white dark:bg-white dark:hover:bg-primary ${
          coping ? "cursor-wait" : "cursor-pointer"
        }`}
        data-clipboard-text={code?.code}
        onClick={notify}
      >
        {copyIcon} <span className="pl-3">{copyText}</span>
      </Clipboard>
    </pre>
  );
};

export default CodeWithCopy;
