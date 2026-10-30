import { expect, test } from "@playwright/test";

test("rings have balanced spacing, fling momentum and continuous autoplay after repeated grabs", async ({
  page,
  context,
  isMobile,
}) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const carousel = page.locator(".avatar-swiper");
  await expect(carousel).toHaveAttribute("data-ring-ready", "true");
  await carousel.scrollIntoViewIfNeeded();
  const state = () =>
    carousel.evaluate((element) => {
      const track = element.querySelector<HTMLElement>(".swiper-wrapper")!;
      const width = track
        .querySelector(".swiper-slide")!
        .getBoundingClientRect().width;
      const ring = track
        .querySelector(".avatar-ring")!
        .getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(track).columnGap);
      const count = track.querySelectorAll(
        ".swiper-slide:not([data-ring-clone])",
      ).length;
      const viewport = element.getBoundingClientRect();
      const visible = [...track.querySelectorAll(".avatar-ring")].filter(
        (ring) => {
          const rect = ring.getBoundingClientRect();
          return rect.right > viewport.left && rect.left < viewport.right;
        },
      ).length;
      return {
        x: new DOMMatrixReadOnly(getComputedStyle(track).transform).m41,
        period: count * (width + gap),
        visibleGap: width - ring + gap,
        motion: element.getAttribute("data-motion"),
        visible,
      };
    });
  const initial = await state();
  expect(initial.visible).toBeGreaterThanOrEqual(isMobile ? 3 : 5);
  if (isMobile) {
    expect(initial.visibleGap).toBeGreaterThanOrEqual(40);
    expect(initial.visibleGap).toBeLessThanOrEqual(64);
  }
  const delta = (from: number, to: number) => {
    const raw = to - from;
    return raw - Math.round(raw / initial.period) * initial.period;
  };
  const box = (await carousel.boundingBox())!;
  const x = Math.round(box.x + box.width * 0.45),
    y = Math.round(box.y + 40);
  const session = isMobile ? await context.newCDPSession(page) : undefined;
  for (const distance of [100, -100, 140]) {
    if (session)
      await session.send("Input.dispatchTouchEvent", {
        type: "touchStart",
        touchPoints: [{ x, y }],
      });
    else {
      await page.mouse.move(x, y);
      await page.mouse.down();
    }
    await expect(carousel).toHaveAttribute("data-motion", "held");
    const start = await state();
    await carousel.evaluate((element) =>
      element.addEventListener(
        "pointerup",
        () => {
          const track = element.querySelector(".swiper-wrapper")!;
          element.setAttribute(
            "data-test-release-x",
            String(
              new DOMMatrixReadOnly(getComputedStyle(track).transform).m41,
            ),
          );
        },
        { capture: true, once: true },
      ),
    );
    if (session) {
      for (let step = 1; step <= 8; step++)
        await session.send("Input.dispatchTouchEvent", {
          type: "touchMove",
          touchPoints: [{ x: x + (distance * step) / 8, y }],
        });
    } else await page.mouse.move(x + distance, y, { steps: 8 });
    if (session)
      await session.send("Input.dispatchTouchEvent", {
        type: "touchEnd",
        touchPoints: [],
      });
    else await page.mouse.up();
    const dragEnd = Number(await carousel.getAttribute("data-test-release-x"));
    expect(Math.abs(delta(start.x, dragEnd) - distance)).toBeLessThan(5);
    const released = await state();
    await expect(carousel).toHaveAttribute("data-motion", "coasting");
    // Sample real post-release displacement rather than an autoplay status flag.
    await page.waitForTimeout(160);
    const coasted = await state();
    expect(Math.sign(distance) * delta(released.x, coasted.x)).toBeGreaterThan(
      12,
    );
  }
  // Keep the pointer over the rings: hover must never strand the carousel.
  await expect(carousel).toHaveAttribute("data-motion", "autoplay", {
    timeout: 6000,
  });
  const cruising = await state();
  await expect
    .poll(async () => delta(cruising.x, (await state()).x))
    .toBeGreaterThan(0.5);
  await session?.detach();
});

test("rings respect reduced motion preferences", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const carousel = page.locator(".avatar-swiper");
  await expect(carousel).toHaveAttribute("data-ring-ready", "true");
  await expect(carousel).toHaveAttribute("data-motion", "idle");
});
