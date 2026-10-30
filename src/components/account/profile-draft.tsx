"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
export function ProfileDraft({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState("");
  const key = "shapee-demo-profile";
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(key) || "null") as
        string[] | null;
      if (saved)
        ref.current
          ?.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
            "input:not([type=file]), textarea",
          )
          .forEach((field, index) => {
            if (saved[index] !== undefined) field.value = saved[index];
          });
    } catch {}
  }, []);
  return (
    <div
      ref={ref}
      className="profile-draft full-width full-height"
      onClick={(e) => {
        const label =
          (e.target as HTMLElement).closest("button")?.textContent || "";
        if (label.includes("ذخیره تغییرات")) {
          const fields = Array.from(
            ref.current?.querySelectorAll<
              HTMLInputElement | HTMLTextAreaElement
            >("input:not([type=file]), textarea") || [],
          );
          try {
            localStorage.setItem(
              key,
              JSON.stringify(fields.map((field) => field.value)),
            );
            setMessage("تغییرات در همین مرورگر ذخیره شد.");
          } catch {
            setMessage("ذخیره‌سازی مرورگر در دسترس نیست.");
          }
        }
        if (label.includes("انصراف")) {
          ref.current
            ?.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
              "input:not([type=file]), textarea",
            )
            .forEach((field) => {
              field.value = field.defaultValue;
            });
          setMessage("تغییرات لغو شد.");
        }
      }}
    >
      {children}
      {message && (
        <p className="demo-toast font-peyda" role="status">
          {message}
        </p>
      )}
    </div>
  );
}
