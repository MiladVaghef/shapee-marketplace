"use client";
import { type InputHTMLAttributes } from "react";
import { useRouter } from "next/navigation";
export function SearchInput(props: InputHTMLAttributes<HTMLInputElement>) {
  const router = useRouter();
  return (
    <input
      {...props}
      aria-label={props["aria-label"] || props.placeholder || "جستجو"}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          router.push(
            `/search-result?q=${encodeURIComponent(e.currentTarget.value)}`,
          );
        }
      }}
    />
  );
}
