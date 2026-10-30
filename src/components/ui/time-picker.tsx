"use client";
import { useRef, useState } from "react";
import { useDismiss } from "@/hooks/use-dismiss";
import { toPersianDigits as digits } from "@/lib/format";
export function TimePicker({
  name,
  className = "time-picker",
}: {
  name: string;
  className?: string;
}) {
  const [hour, setHour] = useState("09");
  const [minute, setMinute] = useState("00");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useDismiss(open, () => setOpen(false), ref);
  return (
    <div ref={ref} className={className}>
      <button
        type="button"
        className="time-picker-trigger"
        aria-label={name}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {digits(`${hour}:${minute}`)}
      </button>
      <div className={`time-picker-dropdown ${open ? "open" : ""}`}>
        <div className="time-picker-header">
          <div>ساعت</div>
          <div>دقیقه</div>
        </div>
        <div className="time-picker-columns">
          <div className="time-picker-hours">
            {Array.from({ length: 24 }, (_, i) =>
              String(i).padStart(2, "0"),
            ).map((h) => (
              <button
                type="button"
                key={h}
                className={h === hour ? "active" : ""}
                onClick={() => setHour(h)}
              >
                {digits(h)}
              </button>
            ))}
          </div>
          <div className="time-picker-minutes">
            {["00", "15", "30", "45"].map((m) => (
              <button
                type="button"
                key={m}
                className={m === minute ? "active" : ""}
                onClick={() => setMinute(m)}
              >
                {digits(m)}
              </button>
            ))}
          </div>
        </div>
      </div>
      <input type="hidden" name={name} value={`${hour}:${minute}`} />
    </div>
  );
}
