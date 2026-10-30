// One owner for drag, inertia and autoplay: no competing CSS transitions,
// slide snapping, hover pauses, or delayed autoplay restart timers.
export function createRingMotion(element: HTMLElement): () => void {
  const track = element.querySelector<HTMLElement>(".swiper-wrapper");
  if (!track) return () => {};
  const originals = [...track.children] as HTMLElement[];
  if (!originals.length) return () => {};
  const originalStyle = track.getAttribute("style");
  const originalOrders = originals.map((slide) => slide.style.order);
  const draggable = [...track.querySelectorAll<HTMLElement>("img, a")].map(
    (node) => ({ node, value: node.getAttribute("draggable") }),
  );
  draggable.forEach(({ node }) => node.setAttribute("draggable", "false"));
  originals.forEach((slide, index) => {
    slide.style.order = String(originals.length - 1 - index);
  });
  const motionPreference = matchMedia("(prefers-reduced-motion: reduce)");
  let reduced = motionPreference.matches;
  const cruise = 0.028; // CSS pixels per millisecond (28px/s).
  const decayTime = 620;
  let velocity = reduced ? 0 : cruise;
  let phase = 0;
  let period = 0;
  let clones: HTMLElement[] = [];
  let frame = 0;
  let previousTime = performance.now();
  let keyboardFocus = false;
  let suppressClickUntil = 0;
  let mode = "";
  type Point = { x: number; time: number };
  let pointer: {
    id: number;
    startX: number;
    startY: number;
    lastX: number;
    horizontal: boolean;
    samples: Point[];
  } | null = null;

  const render = () => {
    if (!period) return;
    if (phase < 0 || phase > period)
      phase = ((phase % period) + period) % period;
    track.style.transform = `translate3d(${phase - period}px, 0, 0)`;
    const nextMode = pointer
      ? pointer.horizontal
        ? "dragging"
        : "held"
      : Math.abs(velocity - (reduced || keyboardFocus ? 0 : cruise)) > 0.04
        ? "coasting"
        : reduced || keyboardFocus
          ? "idle"
          : "autoplay";
    if (nextMode !== mode) {
      mode = nextMode;
      element.dataset.motion = mode;
    }
  };
  const resize = () => {
    const width = originals[0].getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const nextPeriod = originals.length * (width + gap);
    if (!nextPeriod || !element.clientWidth) return;
    const fraction = period
      ? phase / period
      : (element.clientWidth % nextPeriod) / nextPeriod;
    period = nextPeriod;
    phase = fraction * period;
    clones.forEach((clone) => clone.remove());
    clones = [];
    const copies = Math.ceil(element.clientWidth / period) + 2;
    for (let copy = 1; copy < copies; copy++) {
      originals.forEach((slide, index) => {
        const clone = slide.cloneNode(true) as HTMLElement;
        clone.dataset.ringClone = "true";
        clone.setAttribute("aria-hidden", "true");
        clone.style.order = String(
          copy * originals.length + originals.length - 1 - index,
        );
        clone
          .querySelectorAll<HTMLElement>("a, button, [tabindex]")
          .forEach((node) => (node.tabIndex = -1));
        track.appendChild(clone);
        clones.push(clone);
      });
    }
    render();
    element.dataset.ringReady = "true";
  };
  const tick = (now: number) => {
    const elapsed = Math.min(50, now - previousTime);
    previousTime = now;
    if (!document.hidden && !pointer && period) {
      const target = reduced || keyboardFocus ? 0 : cruise;
      const decay = Math.exp(-elapsed / decayTime);
      // Integrate exponential friction analytically so 60Hz and 120Hz feel alike.
      phase += target * elapsed + (velocity - target) * decayTime * (1 - decay);
      velocity = target + (velocity - target) * decay;
      render();
    }
    frame = requestAnimationFrame(tick);
  };
  const down = (event: PointerEvent) => {
    if (pointer || (event.pointerType === "mouse" && event.button !== 0))
      return;
    keyboardFocus = false;
    velocity = 0;
    suppressClickUntil = 0;
    pointer = {
      id: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      lastX: event.clientX,
      horizontal: false,
      samples: [{ x: event.clientX, time: performance.now() }],
    };
    render();
  };
  const move = (event: PointerEvent) => {
    if (!pointer || pointer.id !== event.pointerId) return;
    const dx = event.clientX - pointer.startX;
    const dy = event.clientY - pointer.startY;
    if (!pointer.horizontal) {
      if (Math.max(Math.abs(dx), Math.abs(dy)) < 5) return;
      if (Math.abs(dy) > Math.abs(dx)) {
        pointer = null;
        render();
        return;
      }
      pointer.horizontal = true;
      element.setPointerCapture(event.pointerId);
      element.classList.add("is-dragging");
    }
    if (event.cancelable) event.preventDefault();
    phase += event.clientX - pointer.lastX;
    pointer.lastX = event.clientX;
    const now = performance.now();
    pointer.samples.push({ x: event.clientX, time: now });
    while (pointer.samples.length > 2 && now - pointer.samples[0].time > 100)
      pointer.samples.shift();
    render();
  };
  const release = (cancelled: boolean) => {
    if (!pointer) return;
    const active = pointer;
    pointer = null;
    element.classList.remove("is-dragging");
    if (element.hasPointerCapture(active.id))
      element.releasePointerCapture(active.id);
    const now = performance.now();
    const first = active.samples[0],
      last = active.samples[active.samples.length - 1];
    const heldDecay = Math.exp(-Math.max(0, now - last.time - 40) / 100);
    velocity =
      !cancelled && !reduced && active.horizontal
        ? Math.max(
            -1.8,
            Math.min(
              1.8,
              (last.x - first.x) / Math.max(16, last.time - first.time),
            ),
          ) * heldDecay
        : 0;
    if (active.horizontal) suppressClickUntil = now + 350;
    previousTime = now;
    render();
  };
  const up = (event: PointerEvent) => {
    if (event.pointerId === pointer?.id) release(false);
  };
  const cancel = (event: PointerEvent) => {
    if (event.pointerId === pointer?.id) release(false);
  };
  const blur = () => release(true);
  const click = (event: MouseEvent) => {
    if (performance.now() < suppressClickUntil) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  };
  const focus = (event: FocusEvent) => {
    const target = event.target as HTMLElement;
    if (!target.matches(":focus-visible")) return;
    keyboardFocus = true;
    velocity = 0;
    const slide = target.closest<HTMLElement>(".swiper-slide");
    if (slide && period) {
      const left = Math.max(
        0,
        Math.min(
          period,
          slide.offsetLeft - (element.clientWidth - slide.offsetWidth) / 2,
        ),
      );
      phase = period - left;
      element.scrollLeft = 0;
      render();
    }
  };
  const unfocus = (event: FocusEvent) => {
    if (!element.contains(event.relatedTarget as Node)) keyboardFocus = false;
  };
  const preference = () => {
    reduced = motionPreference.matches;
    if (reduced) velocity = 0;
  };
  element.addEventListener("pointerdown", down);
  element.addEventListener("pointermove", move, { passive: false });
  window.addEventListener("pointerup", up);
  window.addEventListener("pointercancel", cancel);
  window.addEventListener("blur", blur);
  element.addEventListener("click", click, true);
  element.addEventListener("focusin", focus);
  element.addEventListener("focusout", unfocus);
  motionPreference.addEventListener("change", preference);
  const observer = new ResizeObserver(resize);
  observer.observe(element);
  observer.observe(originals[0]);
  resize();
  frame = requestAnimationFrame(tick);
  return () => {
    cancelAnimationFrame(frame);
    observer.disconnect();
    clones.forEach((clone) => clone.remove());
    originals.forEach(
      (slide, index) => (slide.style.order = originalOrders[index]),
    );
    draggable.forEach(({ node, value }) =>
      value === null
        ? node.removeAttribute("draggable")
        : node.setAttribute("draggable", value),
    );
    if (originalStyle === null) track.removeAttribute("style");
    else track.setAttribute("style", originalStyle);
    element.removeEventListener("pointerdown", down);
    element.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", up);
    window.removeEventListener("pointercancel", cancel);
    window.removeEventListener("blur", blur);
    element.removeEventListener("click", click, true);
    element.removeEventListener("focusin", focus);
    element.removeEventListener("focusout", unfocus);
    motionPreference.removeEventListener("change", preference);
    element.classList.remove("is-dragging");
    delete element.dataset.ringReady;
    delete element.dataset.motion;
  };
}
