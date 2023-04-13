"use client";

import ProductBox from "@/components/molecules/ProductBox/ProductBox";

export default function ProductCarousel() {
  const productCount = 6;

  return (
    <div className="flex items-center gap-4 overflow-hidden">
      <div className="interactive h-8 w-8 shrink-0 rounded-full bg-accent"></div>

      <ul className="flex flex-1 gap-8 overflow-y-hidden overflow-x-scroll">
        {Array.from(Array(productCount).keys()).map((_, index) => (
          <li key={index} className="w-[26.875rem] shrink-0 snap-center">
            <ProductBox />
          </li>
        ))}
      </ul>

      <div className="interactive h-8 w-8 shrink-0 rounded-full bg-accent"></div>
    </div>
  );
}
