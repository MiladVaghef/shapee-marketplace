"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";

type Option = { value: string; label: string };

/** Controlled, select-only combobox. The popover escapes mobile drawer clipping. */
export function CatalogSelect({
  id,
  label,
  value,
  options,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const search = useRef({ text: "", time: 0 });
  const selected = Math.max(
    0,
    options.findIndex((option) => option.value === value),
  );
  const listId = id + "-options";

  useLayoutEffect(() => {
    if (!open) return;
    const popup = menu.current;
    const button = trigger.current;
    if (!popup || !button) return;
    const position = () => {
      const rect = button.getBoundingClientRect();
      const below = innerHeight - rect.bottom - 16;
      const above = rect.top - 16;
      const upwards = below < 180 && above > below;
      const height = Math.min(240, Math.max(44, upwards ? above : below));
      popup.style.left =
        Math.max(8, Math.min(rect.left, innerWidth - rect.width - 8)) + "px";
      popup.style.width = rect.width + "px";
      popup.style.maxHeight = height + "px";
      popup.style.top = upwards ? "auto" : rect.bottom + 6 + "px";
      popup.style.bottom = upwards ? innerHeight - rect.top + 6 + "px" : "auto";
    };
    position();
    popup.showPopover();
    window.addEventListener("resize", position);
    window.addEventListener("scroll", position, true);
    return () => {
      popup.hidePopover();
      window.removeEventListener("resize", position);
      window.removeEventListener("scroll", position, true);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const dismiss = (event: Event) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", dismiss, true);
    document.addEventListener("focusin", dismiss, true);
    return () => {
      document.removeEventListener("pointerdown", dismiss, true);
      document.removeEventListener("focusin", dismiss, true);
    };
  }, [open]);

  useEffect(() => {
    if (open)
      menu.current?.children[active]?.scrollIntoView({ block: "nearest" });
  }, [active, open]);

  const choose = (index: number) => {
    onChange(options[index].value);
    setOpen(false);
    trigger.current?.focus({ preventScroll: true });
  };
  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const key = event.key;
    if (key === "Escape" && open) {
      event.preventDefault();
      event.stopPropagation();
      setOpen(false);
      return;
    }
    if (key === "Tab") {
      setOpen(false);
      return;
    }
    if (["ArrowDown", "ArrowUp", "Home", "End"].includes(key)) {
      event.preventDefault();
      setActive(
        key === "Home"
          ? 0
          : key === "End"
            ? options.length - 1
            : !open
              ? selected
              : (active + (key === "ArrowDown" ? 1 : -1) + options.length) %
                options.length,
      );
      setOpen(true);
      return;
    }
    if (key === "Enter" || key === " ") {
      event.preventDefault();
      if (open) choose(active);
      else {
        setActive(selected);
        setOpen(true);
      }
      return;
    }
    if (key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      const now = Date.now();
      search.current.text =
        now - search.current.time < 700 ? search.current.text + key : key;
      search.current.time = now;
      const index = options.findIndex((option) =>
        option.label.startsWith(search.current.text),
      );
      if (index >= 0) {
        setActive(index);
        setOpen(true);
      }
    }
  };

  return (
    <div ref={root} className="listing-select-field">
      <label id={id + "-label"} htmlFor={id}>
        {label}
      </label>
      <div className="listing-select">
        <button
          id={id}
          ref={trigger}
          type="button"
          role="combobox"
          className="listing-select__trigger"
          aria-labelledby={id + "-label"}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-activedescendant={open ? listId + "-" + active : undefined}
          onClick={() => {
            setActive(selected);
            setOpen(!open);
          }}
          onKeyDown={onKeyDown}
        >
          <span>{options[selected].label}</span>
          <i className="icon icon-down-2" aria-hidden="true" />
        </button>
        {open && (
          <div
            id={listId}
            ref={menu}
            popover="manual"
            role="listbox"
            aria-labelledby={id + "-label"}
            className="listing-select__menu font-peyda"
            dir="rtl"
          >
            {options.map((option, index) => (
              <div
                id={listId + "-" + index}
                key={option.value}
                role="option"
                aria-selected={option.value === value}
                data-active={active === index}
                className="listing-select__option"
                onPointerMove={() => setActive(index)}
                onPointerDown={(event) => event.preventDefault()}
                onClick={() => choose(index)}
              >
                <span>{option.label}</span>
                {option.value === value && (
                  <i className="icon icon-tick" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
