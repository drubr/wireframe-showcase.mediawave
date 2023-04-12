"use client";
/** Next.js 13 component are Server Components by default. When interactivity is needed, mark this file as Client Component with "use client" */
/** More on Server Components: https://nextjs.org/docs/advanced-features/react-18/server-components */

import React from "react";

interface ButtonProps {
  /**
   * Optional button label
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  const onClickHandler = () => {
    if (onClick) onClick();
  };

  return (
    <button
      className="interactive h-11 w-24 rounded-full bg-accent text-white"
      onClick={() => onClickHandler()}
    >
      {label && label}
    </button>
  );
}
