"use client";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();

  return (
    <div
      className="interactive h-8 w-20 rounded-full bg-gray-200"
      onClick={() => router.push("/")}
    ></div>
  );
}
