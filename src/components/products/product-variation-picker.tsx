"use client";

import { useState } from "react";

type ProductVariation = {
  name: string;
  color: string;
};

export const defaultProductVariations: ProductVariation[] = [
  { name: "گرافیتی", color: "#48494d" },
  { name: "مشکی", color: "#171719" },
  { name: "نقره‌ای", color: "#c5c5c5" },
];

export function ProductVariationPicker({
  variations,
  initiallySelected = "",
}: {
  variations: ProductVariation[];
  initiallySelected?: string;
}) {
  const [selected, setSelected] = useState(initiallySelected);

  if (variations.length === 0) return null;

  return (
    <fieldset className="product-variation-picker font-peyda">
      <legend className="text-sm semi-bold">رنگ</legend>
      <div className="product-variation-options">
        {variations.map((variation) => {
          const isSelected = selected === variation.name;

          return (
            <button
              key={variation.name}
              type="button"
              className={`product-variation-option font-peyda ${isSelected ? "is-selected" : ""}`}
              aria-pressed={isSelected}
              onClick={() => setSelected(variation.name)}
            >
              <span
                className="product-variation-swatch"
                style={{ backgroundColor: variation.color }}
                aria-hidden="true"
              >
                {isSelected && <i className="icon icon-tick" />}
              </span>
              <span className="text-sm">{variation.name}</span>
            </button>
          );
        })}
      </div>
      <p className="product-variation-selected text-xs text-muted">
        {selected ? (
          <>
            رنگ انتخاب‌شده: <strong>{selected}</strong>
          </>
        ) : (
          "رنگ موردنظر را انتخاب کنید"
        )}
      </p>
    </fieldset>
  );
}
