"use client";

import { useCallback, useEffect, useState } from "react";
import "./form-notice.scss";

type Notice = { message: string; id: number } | null;
export function useFormNotice() {
  const [notice, setNotice] = useState<Notice>(null);
  const dismissNotice = useCallback(() => setNotice(null), []);
  const showNotice = useCallback(
    (message: string) =>
      setNotice((previous) =>
        message ? { message, id: (previous?.id || 0) + 1 } : null,
      ),
    [],
  );
  return { notice, showNotice, dismissNotice };
}
export function FormNotice({
  notice,
  onDismiss,
}: {
  notice: Notice;
  onDismiss: () => void;
}) {
  const [displayedNotice, setDisplayedNotice] = useState(notice);
  const [rendered, setRendered] = useState(Boolean(notice));
  const [closing, setClosing] = useState(false);
  useEffect(() => {
    if (notice) {
      setDisplayedNotice(notice);
      setRendered(true);
      setClosing(false);
      const dismissTimer = window.setTimeout(onDismiss, 6500);
      return () => {
        window.clearTimeout(dismissTimer);
      };
    }

    setClosing(true);
    const exitTimer = window.setTimeout(() => setRendered(false), 240);
    return () => window.clearTimeout(exitTimer);
  }, [notice, onDismiss]);
  if (!rendered || !displayedNotice) return null;
  return (
    <div
      key={displayedNotice.id}
      className="form-notice font-peyda"
      data-state={closing ? "closing" : "visible"}
      role="alert"
      aria-atomic="true"
    >
      <i className="icon icon-attention-circle" aria-hidden="true" />
      <span>{displayedNotice.message}</span>
      <button type="button" onClick={onDismiss} aria-label="بستن پیام خطا">
        <i className="icon icon-cross" aria-hidden="true" />
      </button>
    </div>
  );
}
