"use client";
import { useEffect, useId, useRef, useState } from "react";
import { useDismiss } from "@/hooks/use-dismiss";
type Option = { value: string; label: string };
export function SelectField({
  options,
  name,
  placeholder,
  className = "custom-select font-peyda",
}: {
  options: Option[];
  name: string;
  placeholder: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Option>();
  const [focused, setFocused] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const id = useId();
  useDismiss(open, () => setOpen(false), ref);
  useEffect(() => {
    const element = ref.current;
    const restore = (event: Event) =>
      setSelected(
        options.find(
          (option) => option.value === (event as CustomEvent<string>).detail,
        ),
      );
    element?.addEventListener("flow-restore-select", restore);
    return () => element?.removeEventListener("flow-restore-select", restore);
  }, [options]);
  function choose(index: number) {
    if (options[index]) setSelected(options[index]);
    setOpen(false);
    triggerRef.current?.focus();
  }
  return (
    <div ref={ref} className={`${className} ${open ? "active" : ""}`}>
      <button
        type="button"
        ref={triggerRef}
        className="select-trigger full-width"
        aria-label={placeholder}
        aria-haspopup="listbox"
        aria-controls={id}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => {
          if (["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) {
            e.preventDefault();
            setOpen(true);
            setFocused((i) =>
              e.key === "Home"
                ? 0
                : e.key === "End"
                  ? options.length - 1
                  : (i + (e.key === "ArrowDown" ? 1 : -1) + options.length) %
                    options.length,
            );
          }
          if (open && ["Enter", " "].includes(e.key)) {
            e.preventDefault();
            choose(focused);
          }
        }}
      >
        <span className="select-text">{selected?.label || placeholder}</span>
        <i className="icon icon-down-2" />
      </button>
      {open && (
        <div
          id={id}
          role="listbox"
          aria-label={placeholder}
          className="select-options select-dropdown"
        >
          {options.map((option, index) => (
            <button
              type="button"
              role="option"
              aria-selected={selected?.value === option.value}
              key={`${option.value}-${index}`}
              className={`select-option full-width ${focused === index ? "active" : ""}`}
              onMouseEnter={() => setFocused(index)}
              onClick={() => choose(index)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
      <input type="hidden" name={name} value={selected?.value || ""} />
    </div>
  );
}
