"use client";
import { useModalFocus, trapModalTab } from "@/hooks/use-modal-focus";

import { useEffect, useRef, useState } from "react";

const provinces = [
  "تهران",
  "البرز",
  "اصفهان",
  "فارس",
  "خراسان رضوی",
  "گیلان",
  "مازندران",
  "قم",
  "یزد",
  "کرمان",
  "آذربایجان شرقی",
];

const citiesByProvince: Record<string, string[]> = {
  تهران: [
    "تهران",
    "شهریار",
    "دماوند",
    "ورامین",
    "پردیس",
    "پاکدشت",
    "رباط کریم",
    "اسلامشهر",
    "قدس",
    "فیروزکوه",
    "ری",
    "قرچک",
  ],
  البرز: ["کرج", "فردیس", "نظرآباد", "هشتگرد", "اشتهارد", "طالقان"],
  اصفهان: ["اصفهان", "کاشان", "نجف‌آباد", "خمینی‌شهر"],
  فارس: ["شیراز", "مرودشت", "کازرون", "جهرم"],
  "خراسان رضوی": ["مشهد", "نیشابور", "سبزوار"],
  گیلان: ["رشت", "لاهیجان", "بندر انزلی", "رودسر"],
  مازندران: ["ساری", "بابل", "آمل", "چالوس"],
  قم: ["قم"],
  یزد: ["یزد", "میبد", "اردکان"],
  کرمان: ["کرمان", "رفسنجان", "بم"],
  "آذربایجان شرقی": ["تبریز", "مراغه", "مرند"],
};

function SearchField({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex row p-3 light-border round-md">
      <i className="icon icon-search text-muted w-3 h-3" aria-hidden="true" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input font-peyda indent-1 full-width"
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </div>
  );
}

export function LocationPicker({
  open,
  onClose,
  onApply,
}: {
  open: boolean;
  onClose: () => void;
  onApply: (label: string) => void;
}) {
  const [query, setQuery] = useState("");
  const container = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState<
    "scope" | "province" | "city" | "confirmation"
  >("scope");
  const [scope, setScope] = useState<"city" | "iran">("city");
  const [province, setProvince] = useState("تهران");
  const [city, setCity] = useState("تهران");
  const cities = citiesByProvince[province] ?? [province];
  useEffect(() => setQuery(""), [step]);
  const selectedLocation = scope === "iran" ? "کل ایران" : city;

  useModalFocus(container, open);
  if (!open) return null;

  return (
    <div
      id="location-popup"
      ref={container}
      className="background-overlay flex full-width"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.stopPropagation();
          onClose();
        }
        trapModalTab(event);
      }}
      data-selected-location={selectedLocation}
    >
      {step === "scope" && (
        <section
          id="location-popup-container"
          className="bg-background round-md lg-round-unset p-10 md-p-5 md-pt-10 md-pb-10 flex column relative full-width full-height max-h-80 max-w-100 lg-max-h-unset lg-max-w-unset"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-location-scope-title"
        >
          <button
            type="button"
            className="icon icon-cross absolute left-9 md-left-4 w-3 h-3 opacity-7 pointer p-1 close-button index-10"
            aria-label="بستن انتخاب محدوده"
            onClick={onClose}
          />
          <div className="flex column gap-5 align-items-center mb-8 relative full-width justify-content-center text-text">
            <span
              id="product-location-scope-title"
              className="font-peyda semi-bold block"
            >
              انتخاب سطح
            </span>
            <span className="font-peyda text-sm">
              ترجیح میدهید آگهی های کل ایران را ببینید یا یک منطقه خاص؟
            </span>
          </div>
          <div className="flex row full-height justify-content-between">
            <button
              type="button"
              className={`flex half-width column justify-content-center align-items-center gap-3 btn-secondary p-5 full-height ${scope === "city" ? "btn-secondary-active relative" : ""}`}
              aria-pressed={scope === "city"}
              onClick={() => setScope("city")}
            >
              {scope === "city" && (
                <span className="flex round-full bg-primary w-3 h-3 justify-content-center align-items-center absolute ab-top-left selected-location">
                  <i className="icon icon-tick text-inverse w-1 h-1" />
                </span>
              )}
              <i
                className="icon icon-city-filled text-secondary full-width full-height max-h-20 max-w-20"
                aria-hidden="true"
              />
              <span className="font-peyda semi-bold mt-3">یک استان یا شهر</span>
              <span className="font-peyda text-xs">
                آگهی ها در یک استان یا شهر ایران
              </span>
            </button>
            <button
              type="button"
              className={`flex half-width column justify-content-center align-items-center gap-3 btn-secondary p-5 full-height ${scope === "iran" ? "btn-secondary-active relative" : ""}`}
              aria-pressed={scope === "iran"}
              onClick={() => setScope("iran")}
            >
              {scope === "iran" && (
                <span className="flex round-full bg-primary w-3 h-3 justify-content-center align-items-center absolute ab-top-left selected-location">
                  <i className="icon icon-tick text-inverse w-1 h-1" />
                </span>
              )}
              <i
                className="icon icon-ir text-secondary full-width full-height max-h-20 max-w-20"
                aria-hidden="true"
              />
              <span className="font-peyda semi-bold mt-3">کل ایران</span>
              <span className="font-peyda text-xs">
                نمایش آگهی ها در کل ایران
              </span>
            </button>
          </div>
          <div className="mt-5 bg-primary-light flex justify-content-center align-items-center p-7 md-p-4 round-md relative gap-3">
            <i
              className="icon icon-attention-circle text-secondary w-3 h-3 md-position-unset absolute right-5"
              aria-hidden="true"
            />
            <span className="font-peyda md-text-sm">
              هر زمان خواستید میتوانید موقعیت مکانی خود را تغییر دهید.
            </span>
          </div>
          <div className="flex row full-width">
            <button
              type="button"
              className="btn-primary full-width mt-6 font-peyda"
              data-location-apply={scope === "iran" ? "" : undefined}
              onClick={() => {
                if (scope === "city") setStep("province");
                else onApply("کل ایران");
              }}
            >
              مشاهده آگهی ها
            </button>
          </div>
        </section>
      )}
      {step === "province" && (
        <section
          id="location-popup-container"
          className="bg-background round-md lg-round-unset p-10 md-p-5 md-pt-10 md-pb-10 flex column relative full-width full-height max-h-80 max-w-100 lg-max-h-unset lg-max-w-unset"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-location-title"
        >
          <button
            type="button"
            className="icon icon-left-arrow absolute left-9 md-left-4 w-3 h-3 opacity-7 pointer p-1 index-10"
            aria-label="بازگشت به انتخاب محدوده"
            data-location-back="scope"
            onClick={() => setStep("scope")}
          />
          <div className="flex align-items-center mb-8 relative full-width justify-content-center text-text">
            <span
              id="product-location-title"
              className="font-peyda semi-bold block"
            >
              انتخاب استان
            </span>
          </div>
          <SearchField
            placeholder="جستجوی استان"
            value={query}
            onChange={setQuery}
          />
          <div className="flex full-width mt-8 font-sans text-sm opacity-7">
            <span>استان های ایران</span>
          </div>
          <div className="flex row wrap align-items-center justify-content-center mt-3 full-width gap-4 pl-3 overflow-y-scroll overflow-x-hidden lg-hide-scrollbar lg-p-0">
            {provinces
              .filter((name) => name.includes(query.trim()))
              .map((name) => (
                <button
                  key={name}
                  type="button"
                  className={`flex column justify-content-center align-items-center w-20 h-15 btn-secondary font-peyda gap-3 relative md-fill md-w-unset md-min-w-20 ${province === name ? "btn-secondary-active" : ""}`}
                  aria-pressed={province === name}
                  onClick={() => {
                    setProvince(name);
                    setCity((citiesByProvince[name] ?? [name])[0]);
                    setScope("city");
                  }}
                >
                  {province === name && (
                    <span className="flex round-full bg-primary w-3 h-3 justify-content-center align-items-center absolute top-3 left-3 selected-location">
                      <i className="icon icon-tick text-inverse w-1 h-1" />
                    </span>
                  )}
                  <i
                    className="icon icon-burj-al text-primary w-5 h-5"
                    aria-hidden="true"
                  />
                  <span className="text-sm semi-bold">{name}</span>
                </button>
              ))}
          </div>
          <div className="flex row full-width">
            <button
              type="button"
              className="btn-primary full-width mt-6 font-peyda"
              onClick={() => setStep("city")}
            >
              ادامه
            </button>
          </div>
        </section>
      )}

      {step === "city" && (
        <section
          id="location-popup-container"
          className="bg-background round-md lg-round-unset p-10 md-p-5 md-pt-10 md-pb-10 flex column relative full-width full-height max-h-80 max-w-100 lg-max-h-unset lg-max-w-unset"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-city-title"
          data-location-city-panel=""
        >
          <button
            type="button"
            className="icon icon-left-arrow absolute left-9 md-left-4 w-3 h-3 opacity-7 pointer p-1 index-10"
            aria-label="بازگشت به انتخاب استان"
            onClick={() => setStep("province")}
          />
          <div className="mb-8 full-width text-text">
            <div className="relative full-width flex justify-content-center">
              <span
                id="product-city-title"
                className="font-peyda semi-bold block"
              >
                انتخاب شهر
              </span>
            </div>
            <div className="relative full-width flex justify-content-center mt-3">
              <span className="font-peyda semi-bold block text-primary">
                {province}
              </span>
            </div>
          </div>
          <SearchField
            placeholder={`جستجو در مناطق ${province}...`}
            value={query}
            onChange={setQuery}
          />
          <div className="flex row wrap justify-content-center mt-3 full-width gap-4 pl-3 mt-10 overflow-y-scroll overflow-x-hidden lg-hide-scrollbar lg-p-0">
            {cities
              .filter((name) => name.includes(query.trim()))
              .map((name) => (
                <button
                  key={name}
                  type="button"
                  className={`flex column justify-content-center align-items-center w-25 h-5 btn-secondary font-peyda gap-3 relative ${city === name ? "btn-secondary-active" : ""}`}
                  aria-pressed={city === name}
                  onClick={() => setCity(name)}
                >
                  {city === name && (
                    <span className="flex round-full bg-primary w-3 h-3 justify-content-center align-items-center absolute left-3 selected-location">
                      <i className="icon icon-tick text-inverse w-1 h-1" />
                    </span>
                  )}
                  <span className="text-sm semi-bold">{name}</span>
                </button>
              ))}
          </div>
          <div className="flex row full-width">
            <button
              type="button"
              className="btn-primary full-width mt-6 font-peyda"
              onClick={() => setStep("confirmation")}
            >
              ادامه
            </button>
          </div>
        </section>
      )}

      {step === "confirmation" && (
        <section
          id="location-popup-container"
          className="bg-background round-md lg-round-unset p-10 md-p-5 md-pt-10 md-pb-10 flex column justify-content-between relative full-width full-height max-h-80 max-w-100 lg-max-h-unset lg-max-w-unset"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-location-confirmation-title"
        >
          <button
            type="button"
            className="icon icon-left-arrow absolute left-9 md-left-4 w-3 h-3 opacity-7 pointer p-1 index-10"
            aria-label="بازگشت به انتخاب شهر"
            onClick={() => setStep("city")}
          />
          <div className="flex column justify-content-center align-items-center gap-6 relative">
            <div className="flex justify-content-center align-items-center p-7 bg-primary-light round-full relative">
              <i
                className="icon icon-map-point text-primary w-8 h-8"
                aria-hidden="true"
              />
              <span className="dot bg-primary round-full opacity-4" />
              <span className="dot-1 bg-primary round-full opacity-4" />
              <span className="dot-2 bg-primary round-full opacity-4" />
            </div>
            <span
              id="product-location-confirmation-title"
              className="semi-bold font-peyda"
            >
              موقعیت شما ثبت شد!
            </span>
          </div>
          <div className="full-width bg-background-alt opacity-6 round-lg mt-8 mb-8">
            <div className="flex mr-7 ml-7">
              <div className="flex border-bottom full-width p-5 justify-content-between">
                <span className="font-peyda semi-bold">استان</span>
                <span className="font-peyda semi-bold">{province}</span>
              </div>
            </div>
            <div className="flex mr-7 ml-7">
              <div className="flex full-width p-5 justify-content-between">
                <span className="font-peyda semi-bold">شهر</span>
                <span className="font-peyda semi-bold">{city}</span>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn-primary full-width mt-6 font-peyda"
            onClick={() => onApply(city)}
          >
            مشاهده آگهی‌ها
          </button>
        </section>
      )}
    </div>
  );
}
