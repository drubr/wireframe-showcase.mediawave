"use client";

import { useRef, useState } from "react";
import useIsInView from "@/hooks/useIsInView";

import Section from "@/components/layout/Section";
import Button from "@/components/atoms/Button/Button";
import ProductBox from "@/components/molecules/ProductBox/ProductBox";
import TextBlock from "@/components/molecules/TextBlock/TextBlock";
import PlaceholderImageTextBlock from "@/components/organisms/PlaceholderImageTextBlock/PlaceholderImageTextBlock";
import Tabs from "@/components/organisms/Tabs/Tabs";

export default function PDP() {
  const [stickyBuyBoxType, setStickyBuyBoxType] = useState<"Button" | "Bar">(
    "Button"
  );
  const buyBoxRef = useRef<null | HTMLDivElement>(null);
  const buyBoxIsInView = useIsInView(buyBoxRef);

  return (
    <main className="grid gap-16">
      <div ref={buyBoxRef}>
        <Section>
          <PlaceholderImageTextBlock />
        </Section>
      </div>

      <Section>
        <TextBlock />
      </Section>

      <Section>
        <Tabs />
      </Section>

      <Section>
        <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[...Array(6).keys()].map((_, index) => (
            <li key={index}>
              <ProductBox />
            </li>
          ))}
        </ul>
      </Section>

      <Section className="grid gap-4">
        <div className="h-96 rounded-2xl bg-gray-200"></div>

        <div className="grid grid-cols-2 gap-4">
          <div className="h-64 rounded-2xl bg-gray-200"></div>
          <div className="h-64 rounded-2xl bg-gray-200"></div>
        </div>
      </Section>

      {stickyBuyBoxType === "Button" && (
        <div
          className={`fixed bottom-4 right-4 z-[100] transition-all duration-[240ms] ${
            buyBoxIsInView
              ? "invisible translate-y-1/2 opacity-0"
              : "visible translate-y-0 opacity-100"
          }`}
        >
          <Button />
        </div>
      )}

      {stickyBuyBoxType === "Bar" && (
        <div
          className={`fixed bottom-0 left-0 right-0 z-[100] flex justify-between border-t border-gray-300 bg-gray-200 px-8 py-6 transition-all duration-[240ms] ${
            buyBoxIsInView
              ? "invisible translate-y-1/2 opacity-0"
              : "visible translate-y-0 opacity-100"
          }`}
        >
          <div className="grid gap-4">
            <div className="h-11 w-56 rounded-2xl bg-gray-300"></div>
            <div className="h-5 w-28 rounded-2xl bg-gray-300"></div>
          </div>

          <div className="justify-end">
            <Button />
          </div>
        </div>
      )}
    </main>
  );
}
