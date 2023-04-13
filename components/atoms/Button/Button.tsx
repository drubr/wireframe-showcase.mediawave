"use client";

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
