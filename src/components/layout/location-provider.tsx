"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { LocationPicker } from "./location-picker";
const LocationContext = createContext({ label: "کل ایران", open: () => {} });
export function LocationProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState("کل ایران");
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  return (
    <LocationContext.Provider value={{ label, open: () => setOpen(true) }}>
      {children}
      {open && (
        <LocationPicker
          key={pathname}
          open={open}
          onClose={() => setOpen(false)}
          onApply={(value) => {
            setLabel(value);
            setOpen(false);
          }}
        />
      )}
    </LocationContext.Provider>
  );
}
export function LocationButton() {
  const { label, open } = useContext(LocationContext);
  return (
    <div id="header-location-dropdown">
      <button
        type="button"
        className="flex row align-items-center gap-2 font-peyda text-sm btn-secondary full-height"
        aria-haspopup="dialog"
        onClick={open}
      >
        <i className="icon icon-map-point w-2 h-2" aria-hidden="true" />
        {label}
      </button>
    </div>
  );
}
