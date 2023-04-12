import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

export default function Section({ children }: SectionProps) {
  return (
    <section className="mx-auto grid w-full max-w-screen-xl gap-8 px-8 xl:px-0">
      {children}
    </section>
  );
}
