"use client";

import PlaceholderImage from "@/components/atoms/PlaceholderImage/PlaceholderImage";
import { useState } from "react";

export default function ImageSlider() {
  const slideCount = 4;
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-4 overflow-hidden">
        <div
          className="interactive h-8 w-8 shrink-0 rounded-full bg-accent"
          onClick={() =>
            setActiveSlide((previousState) =>
              previousState - 1 < 0 ? slideCount - 1 : previousState - 1
            )
          }
        ></div>

        <ul
          className="relative flex h-96 flex-1 items-center gap-4 overflow-hidden rounded-3xl"
          id="imageSlider"
        >
          {Array.from(Array(slideCount).keys()).map((_, index) => (
            <li
              key={index}
              className="absolute inset-0 duration-300 ease-out"
              style={{ transform: `translateX(${index * 100}%)` }}
            >
              <PlaceholderImage />
            </li>
          ))}
        </ul>

        <div
          className="interactive h-8 w-8 shrink-0 rounded-full bg-accent"
          onClick={() =>
            setActiveSlide((previousState) =>
              previousState + 1 > slideCount - 1 ? 0 : previousState + 1
            )
          }
        ></div>
      </div>

      <ul className="mx-auto flex items-center justify-center gap-2">
        {Array.from(Array(slideCount).keys()).map((_, index) => (
          <li
            key={index}
            className={`interactive h-2 w-2 rounded-full ${
              index === activeSlide ? "bg-accent" : "bg-gray-200"
            }`}
            onClick={() => setActiveSlide(index)}
          ></li>
        ))}
      </ul>
    </div>
  );
}
