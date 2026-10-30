"use client";

import { useRef } from "react";

export function DetailImage({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <div className="product-detail-gallery">
      <button
        type="button"
        className="product-detail-image round-md"
        aria-label={`بزرگ‌نمایی تصویر ${title}`}
        onClick={() => dialog.current?.showModal()}
      >
        <img decoding="async" loading="lazy" src={image} alt={title} className="round-md" />
        <span className="product-image-hint font-peyda text-xs">
          <i className="icon icon-size-fullscreen" /> مشاهده تصویر
        </span>
      </button>
      <dialog
        ref={dialog}
        className="product-image-dialog"
        aria-label={`تصویر ${title}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <button
          type="button"
          className="product-image-close"
          aria-label="بستن تصویر"
          onClick={() => dialog.current?.close()}
        >
          ×
        </button>
        <img decoding="async" loading="lazy" src={image} alt={title} />
      </dialog>
    </div>
  );
}
