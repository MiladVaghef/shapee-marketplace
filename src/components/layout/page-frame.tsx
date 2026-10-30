"use client";

import { useEffect, type ReactNode } from "react";
import { Sliders } from "@/components/ui/sliders";

export function PageFrame({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  useEffect(() => {
    const previous = document.body.className;
    document.body.className = className;
    return () => {
      document.body.className = previous;
      document.body.style.overflow = "";
    };
  }, [className]);
  return (
    <>
      <Sliders />
      {children}
    </>
  );
}
