"use client";

import { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="grid gap-4">
      <ul className="flex items-center gap-4">
        {Array.from(Array(5).keys()).map((_, index) => (
          <li
            key={index}
            className={`interactive h-11 w-24 rounded-full transition hover:bg-accent ${
              index === activeTab ? "bg-accent" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab(index)}
          ></li>
        ))}
      </ul>

      <div
        className={`w-full rounded-2xl bg-gray-200 transition-all duration-[240ms] ${
          activeTab === 0 ? "h-96" : activeTab === 1 ? "h-32" : "h-40"
        }`}
      ></div>
    </div>
  );
}
