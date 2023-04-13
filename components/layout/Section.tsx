import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  return (
    <section
      className={`mx-auto w-full max-w-screen-xl px-8 xl:px-0 ${
        className ? className : ""
      }`}
    >
      {children}
    </section>
  );
}
