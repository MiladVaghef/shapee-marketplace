"use client";
import { useRef, useState } from "react";
import { useDismiss } from "@/hooks/use-dismiss";
import { weekdays } from "@/data/weekdays";
export function DaysPicker({
  name,
  className = "days-picker",
}: {
  name: string;
  className?: string;
}) {
  const [selected, setSelected] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useDismiss(open, () => setOpen(false), ref);
  return (
    <div ref={ref} className={className}>
      <button
        type="button"
        className="days-trigger"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {weekdays
          .filter((d) => selected.includes(d.id))
          .map((d) => d.label)
          .join("، ") || "انتخاب روزها"}
      </button>
      <div className={`days-dropdown ${open ? "open" : ""}`}>
        <div className="days-list primary-scrollbar">
          {weekdays.map((d) => (
            <button
              type="button"
              key={d.id}
              className={selected.includes(d.id) ? "active" : ""}
              aria-pressed={selected.includes(d.id)}
              onClick={() =>
                setSelected((s) =>
                  s.includes(d.id) ? s.filter((i) => i !== d.id) : [...s, d.id],
                )
              }
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>
      <input type="hidden" name={name} value={selected.join(",")} />
    </div>
  );
}
