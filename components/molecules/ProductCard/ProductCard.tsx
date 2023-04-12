"use client";
import Button from "../../atoms/Button/Button";

interface ProductCardProps {
  variant: "Full Cover on Hover" | "Quarter Cover on Hover";
}

export default function ProductCard({
  variant = "Full Cover on Hover",
}: ProductCardProps) {
  if ((variant = "Quarter Cover on Hover")) {
    return (
      <div className="group relative h-[31.25rem] min-w-[26.875rem] cursor-pointer overflow-hidden rounded-2xl bg-gray-200">
        <div className="absolute bottom-0 left-0 h-16 w-full bg-gray-300 transition-all duration-[240ms] group-hover:h-20"></div>
        <div className="invisible absolute bottom-4 right-4 z-50 w-0 origin-center overflow-hidden rounded-full opacity-0 transition-all duration-[240ms] group-hover:visible group-hover:w-[6.25rem] group-hover:opacity-100">
          <Button />
        </div>
      </div>
    );
  }

  return (
    <div className="group relative h-[31.25rem] min-w-[26.875rem] overflow-hidden rounded-2xl bg-gray-200">
      <div className="absolute bottom-0 left-0 h-16 w-full bg-gray-300 transition-all duration-[240ms] group-hover:h-full"></div>
    </div>
  );
}
