"use client";
import Button from "@/components/atoms/Button/Button";

interface TextBlockProps {
  showCTA?: boolean;
}

export default function TextBlock({ showCTA = false }: TextBlockProps) {
  return (
    <div className="grid gap-8">
      <div className="grid gap-4">
        <div className="h-11 w-full max-w-screen-xl rounded-full bg-gray-200"></div>
        <div className="h-5 w-full max-w-[14rem] rounded-full bg-gray-200"></div>
      </div>
      <div className="h-44 w-full rounded-3xl bg-gray-200"></div>

      {showCTA && (
        <div className="flex justify-end">
          <Button />
        </div>
      )}
    </div>
  );
}
