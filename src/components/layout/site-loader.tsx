"use client";

import { useEffect, useRef, useState } from "react";
import { LoadingScreen } from "./loading-screen";

export function SiteLoader() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [slow, setSlow] = useState(false);
  const [offline, setOffline] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    let finished = false;
    let documentReady = document.readyState === "complete";
    let fontsReady = false;
    let paintFrame = 0;
    let dismissTimer = 0;
    const slowTimer = window.setTimeout(() => setSlow(true), 4000);
    const dismiss = () => {
      if (finished) return;
      finished = true;
      window.clearTimeout(slowTimer);
      window.cancelAnimationFrame(paintFrame);
      if (!dialog.open) return;

      dialog.classList.add("site-loader--exiting");
      dismissTimer = window.setTimeout(() => {
        if (dialog.open) dialog.close();
      }, 320);
    };
    const checkReady = () => {
      if (finished) return;
      const sliders = Array.from(
        document.querySelectorAll<HTMLElement>(".swiper"),
      );
      if (
        sliders.some((slider) => slider.dataset.siteSliderState === "error")
      ) {
        setFailed(true);
      }
      const slidersReady = sliders.every(
        (slider) => slider.dataset.siteSliderState === "ready",
      );
      if (documentReady && fontsReady && slidersReady && !paintFrame) {
        // Let font metrics and carousel layout reach the screen before revealing it.
        paintFrame = window.requestAnimationFrame(() => {
          paintFrame = window.requestAnimationFrame(dismiss);
        });
      }
    };
    const onLoad = () => {
      documentReady = true;
      checkReady();
    };
    const onConnectionChange = () => setOffline(!navigator.onLine);

    // The server renders an open dialog. Upgrade it to a modal after hydration,
    // without firing a close event (including during React Strict Mode replay).
    if (!dialog.open) {
      window.clearTimeout(slowTimer);
      return;
    }
    if (!dialog.matches(":modal")) {
      dialog.removeAttribute("open");
      dialog.showModal();
    }

    onConnectionChange();
    window.addEventListener("load", onLoad);
    window.addEventListener("online", onConnectionChange);
    window.addEventListener("offline", onConnectionChange);
    window.addEventListener("pagehide", dismiss);
    window.addEventListener("shapee:sliders-state", checkReady);
    dialog.addEventListener("close", dismiss);
    // FontFaceSet.status may be "loaded" before a font is requested. Explicitly
    // request both CSS families instead of treating that early snapshot as ready.
    void Promise.all([
      document.fonts.load("16px peyda", "شاپی"),
      document.fonts.load("16px sans", "شاپی"),
    ])
      .then(async (faces) => {
        if (faces.some((family) => family.length === 0)) {
          throw new Error("Site font declarations are unavailable");
        }
        await document.fonts.ready;
        if (finished) return;
        fontsReady = true;
        checkReady();
      })
      .catch(() => {
        if (!finished) setFailed(true);
      });
    checkReady();

    return () => {
      window.removeEventListener("load", onLoad);
      window.removeEventListener("online", onConnectionChange);
      window.removeEventListener("offline", onConnectionChange);
      window.removeEventListener("pagehide", dismiss);
      window.removeEventListener("shapee:sliders-state", checkReady);
      dialog.removeEventListener("close", dismiss);
      finished = true;
      window.clearTimeout(slowTimer);
      window.clearTimeout(dismissTimer);
      window.cancelAnimationFrame(paintFrame);
    };
  }, []);

  // Visible before any client bundle runs. The native form remains a working
  // escape hatch even if hydration fails; noscript exposes the page without JS.
  return (
    <>
      <noscript>
        <style>{`.site-loader { display: none !important; }
          html:has(.site-loader[open]) { overflow: auto; }`}</style>
      </noscript>
      <dialog
        open
        ref={dialogRef}
        tabIndex={-1}
        className="site-loader"
        aria-label="در حال آماده‌سازی شاپی"
        aria-describedby="site-loader-description"
      >
        <LoadingScreen slow={slow} offline={offline} failed={failed}>
          <div className="loading-screen__actions">
            {(slow || offline || failed) && (
              <button type="button" onClick={() => window.location.reload()}>
                تلاش دوباره
              </button>
            )}
            <form method="dialog">
              <button type="submit" className="loading-screen__continue">
                ادامه به سایت
                <span aria-hidden="true">←</span>
              </button>
            </form>
          </div>
        </LoadingScreen>
      </dialog>
    </>
  );
}
