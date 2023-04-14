"use client";

import ProductBox from "@/components/molecules/ProductBox/ProductBox";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProductListing() {
  const animationControls = useAnimationControls();
  const [products, setProducts] = useState([...Array(9).keys()]);
  const [sortingMode, setSortingMode] = useState<"up" | "down">("up");
  const [listingMode, setListingMode] = useState<"grid" | "row">("grid");

  useEffect(() => {
    if (animationControls && listingMode && sortingMode)
      animationControls.start({ opacity: [0, 1], y: [100, 0] });
  }, [animationControls, listingMode, sortingMode]);

  return (
    <div className="grid gap-8">
      <div className="flex justify-end gap-8">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <button
              className="interactive grid items-center justify-center gap-1 rounded-xl bg-gray-200 p-4"
              onClick={() => setSortingMode("up")}
            >
              <span
                className={`h-2 w-6 rounded-full ${
                  sortingMode === "up" ? "bg-accent" : "bg-gray-300"
                }`}
              ></span>
              <span className="h-2 w-6 rounded-full bg-gray-200"></span>
            </button>

            <button
              className="interactive grid items-center justify-center gap-1 rounded-xl bg-gray-200 p-4"
              onClick={() => setSortingMode("down")}
            >
              <span className="h-2 w-6 rounded-full bg-gray-200"></span>
              <span
                className={`h-2 w-6 rounded-full ${
                  sortingMode === "down" ? "bg-accent" : "bg-gray-300"
                }`}
              ></span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <button
              className="interactive flex gap-1 rounded-xl bg-gray-200 p-4"
              onClick={() => setListingMode("grid")}
            >
              <span
                className={`h-full w-2 rounded-full ${
                  listingMode === "grid" ? "bg-accent" : "bg-gray-300"
                }`}
              ></span>
              <span
                className={`h-full w-2 rounded-full ${
                  listingMode === "grid" ? "bg-accent" : "bg-gray-300"
                }`}
              ></span>
            </button>

            <button
              className="interactive grid items-center justify-center gap-1 rounded-xl bg-gray-200 p-4"
              onClick={() => setListingMode("row")}
            >
              <span
                className={`h-2 w-6 rounded-full ${
                  listingMode === "row" ? "bg-accent" : "bg-gray-300"
                }`}
              ></span>
              <span
                className={`h-2 w-6 rounded-full ${
                  listingMode === "row" ? "bg-accent" : "bg-gray-300"
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      <ul
        className={`grid gap-8 transition-all duration-300 ${
          listingMode === "grid" ? "sm:grid-cols-2 md:grid-cols-3" : ""
        }`}
      >
        <AnimatePresence initial={false}>
          {products.map((_, index) => (
            <motion.li
              key={index}
              animate={animationControls}
              exit={{ opacity: 0 }}
              transition={{ delay: index * 0.02 }}
            >
              {listingMode === "grid" ? (
                <ProductBox />
              ) : (
                <ProductBox variant="Full width" />
              )}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
