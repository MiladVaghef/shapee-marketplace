"use client";
import { useId, useState, type ReactNode } from "react";
export function Disclosure({
  className,
  triggerClassName,
  contentClassName,
  label,
  children,
}: {
  className: string;
  triggerClassName: string;
  contentClassName: string;
  label: ReactNode;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className={`${className} ${open ? "active" : ""}`}>
      <button
        type="button"
        className={triggerClassName}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        {label}
      </button>
      <div
        id={id}
        className={contentClassName}
        style={{ maxHeight: open ? "none" : 0, overflow: "hidden" }}
        inert={!open}
      >
        {children}
      </div>
    </div>
  );
}
