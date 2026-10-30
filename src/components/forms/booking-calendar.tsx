"use client";
import { useEffect, useState } from "react";
import { weekdays } from "@/data/weekdays";
import { toPersianDigits as digits } from "@/lib/format";
function dateKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
export function BookingCalendar() {
  const [month, setMonth] = useState<Date | null>(null);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  useEffect(() => {
    const now = new Date();
    setMonth(new Date(now.getFullYear(), now.getMonth(), 1));
  }, []);
  const booked = ["2026-06-10", "2026-06-11", "2026-06-18", "2026-06-22"];
  function select(key: string) {
    if (booked.includes(key)) return;
    if (!start || end) {
      setStart(key);
      setEnd("");
      return;
    }
    if (key === start) {
      setStart("");
      return;
    }
    const [from, to] = [start, key].sort();
    if (booked.some((d) => d >= from && d <= to)) return;
    setStart(from);
    setEnd(to);
  }
  const count = start
    ? end
      ? Math.round((Date.parse(end) - Date.parse(start)) / 86400000) + 1
      : 1
    : 0;
  return (
    <div className="calendar-wrapper flex row lg-column gap-10">
      <div className="calendar-calender full-width">
        <div className="calendar-header">
          <button
            type="button"
            aria-label="ماه قبل"
            onClick={() =>
              month &&
              setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))
            }
          >
            <i className="icon icon-left-2 flip-x" />
          </button>
          <h3>
            {month?.toLocaleDateString("fa-IR-u-ca-gregory", {
              month: "long",
              year: "numeric",
            }) || "تقویم"}
          </h3>
          <button
            type="button"
            aria-label="ماه بعد"
            onClick={() =>
              month &&
              setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))
            }
          >
            <i className="icon icon-left-2" />
          </button>
        </div>
        <div className="weekdays">
          {weekdays.map((d) => (
            <span key={d.id}>{d.label[0]}</span>
          ))}
        </div>
        <div className="calendar-days">
          {month && (
            <>
              {Array.from({ length: (month.getDay() + 1) % 7 }, (_, i) => (
                <span key={`empty-${i}`} />
              ))}
              {Array.from(
                {
                  length: new Date(
                    month.getFullYear(),
                    month.getMonth() + 1,
                    0,
                  ).getDate(),
                },
                (_, i) => {
                  const key = dateKey(
                    new Date(month.getFullYear(), month.getMonth(), i + 1),
                  );
                  return (
                    <button
                      type="button"
                      key={key}
                      disabled={booked.includes(key)}
                      aria-label={key}
                      aria-pressed={key === start || key === end}
                      className={`day ${booked.includes(key) ? "disabled" : ""} ${key === start || key === end ? "selected" : ""} ${start && end && key >= start && key <= end ? "in-range" : ""}`}
                      onClick={() => select(key)}
                    >
                      {digits(String(i + 1))}
                    </button>
                  );
                },
              )}
            </>
          )}
        </div>
      </div>
      <div className="booking-summary font-peyda" aria-live="polite">
        <h4>اطلاعات تبلیغات رزرو شده</h4>
        <p className="summary-row">شروع از: {start || "—"}</p>
        <p className="summary-row">پایان: {end || "—"}</p>
        <p className="summary-row">تعداد روز: {count}</p>
        <p className="summary-row">
          مبلغ کل: {(count * 350000).toLocaleString("fa-IR")} تومان
        </p>
      </div>
    </div>
  );
}
