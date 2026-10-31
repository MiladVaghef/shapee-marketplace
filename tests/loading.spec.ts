import { expect, test, type Page } from "@playwright/test";

async function holdLogo(page: Page) {
  let release!: () => void;
  const pending = new Promise<void>((resolve) => {
    release = resolve;
  });
  await page.route("**/assets/logo/shapee-optimized-2.webp", async (route) => {
    await pending;
    await route.continue();
  });
  return release;
}

test("waits for initial assets and dismisses when the document is ready", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const release = await holdLogo(page);
  try {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    const loader = page.getByRole("dialog", {
      name: "در حال آماده‌سازی شاپی",
    });
    await expect(loader).toBeVisible();
    await expect(loader.getByRole("status")).toContainText(
      "در حال آماده‌سازی شاپی",
    );
    await expect(loader.getByRole("button")).toHaveCount(0);
    await expect(loader.locator(".loading-screen__description")).toBeHidden();
    expect(await page.evaluate(() => document.readyState)).not.toBe("complete");
    await expect
      .poll(() =>
        loader.evaluate((element) => element.contains(document.activeElement)),
      )
      .toBe(true);
    await page.screenshot({
      path: test.info().outputPath("loading-screen.png"),
    });
    release();
    await page.waitForLoadState("load");
    await expect(loader).not.toBeVisible();
    expect(errors).toEqual([]);
  } finally {
    release();
  }
});

test("keeps the minimal loader after delays until the page is ready", async ({
  page,
}) => {
  const release = await holdLogo(page);
  try {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    const loader = page.getByRole("dialog");
    await expect(loader).toBeVisible();
    await page.clock.install();
    await page.clock.fastForward(12000);
    await expect(loader).toBeVisible();
    await expect(loader.getByRole("heading")).toHaveText(
      "در حال آماده‌سازی شاپی",
    );
    await expect(loader.getByRole("button")).toHaveCount(0);
    await expect(loader.locator(".loading-screen__description")).toBeHidden();
    expect(await page.evaluate(() => document.readyState)).not.toBe("complete");
    release();
    await expect(loader).not.toBeVisible();
  } finally {
    release();
  }
});

test("prevents keyboard dismissal and respects reduced motion on mobile", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  const release = await holdLogo(page);
  try {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    const loader = page.getByRole("dialog");
    await expect(loader).toBeVisible();
    await expect
      .poll(() => loader.evaluate((element) => element.matches(":modal")))
      .toBe(true);
    await expect(loader.locator(".loading-screen__track span")).toHaveCSS(
      "animation-name",
      "none",
    );
    expect(
      await loader.evaluate((element) => element.scrollWidth <= innerWidth),
    ).toBe(true);
    await page.screenshot({
      path: test.info().outputPath("loading-mobile.png"),
    });
    await page.keyboard.press("Escape");
    await expect(loader).toBeVisible();
    await expect(loader.getByRole("button")).toHaveCount(0);
    release();
    await expect(loader).not.toBeVisible();
    expect(
      await page.evaluate(() =>
        document.querySelector("dialog")?.contains(document.activeElement),
      ),
    ).toBe(false);
  } finally {
    release();
  }
});

test("shows the loading screen before the application JavaScript arrives", async ({
  page,
}) => {
  let release!: () => void;
  const pending = new Promise<void>((resolve) => (release = resolve));
  await page.route("**/_next/static/chunks/*.js", async (route) => {
    await pending;
    await route.continue();
  });
  try {
    await page.goto("/", { waitUntil: "commit" });
    const loader = page.getByRole("dialog");
    await expect(loader).toBeVisible();
    expect(await loader.evaluate((element) => element.matches(":modal"))).toBe(
      false,
    );
    await expect(loader.getByRole("button")).toHaveCount(0);
    await page.keyboard.press("Escape");
    await expect(loader).toBeVisible();
    release();
    await page.waitForLoadState("load");
    await expect(loader).not.toBeVisible();
  } finally {
    release();
  }
});

test("waits for both Persian font files", async ({ page }) => {
  let release!: () => void;
  const pending = new Promise<void>((resolve) => (release = resolve));
  await page.route("**/assets/font/*.ttf", async (route) => {
    await pending;
    await route.continue();
  });
  try {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    const loader = page.getByRole("dialog");
    await expect(loader).toBeVisible();
    await expect
      .poll(() => page.evaluate(() => document.fonts.status))
      .toBe("loading");
    await expect(loader).toBeVisible();
    release();
    await expect(loader).not.toBeVisible();
    expect(
      await page.evaluate(() =>
        ["peyda", "sans"].every((font) =>
          document.fonts.check(`16px ${font}`, "شاپی"),
        ),
      ),
    ).toBe(true);
  } finally {
    release();
  }
});

test("waits for the dynamically imported Swiper code to initialize", async ({
  page,
}) => {
  let release!: () => void;
  let held = false;
  const pending = new Promise<void>((resolve) => (release = resolve));
  await page.route("**/_next/static/chunks/*.js", async (route) => {
    const response = await route.fetch();
    const source = await response.text();
    if (source.includes("slideToLoop") && source.includes("slidesPerView")) {
      held = true;
      await pending;
    }
    await route.fulfill({ response });
  });
  try {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await expect.poll(() => held).toBe(true);
    const loader = page.getByRole("dialog");
    await expect(loader).toBeVisible();
    await expect(page.locator(".swiper").first()).toHaveAttribute(
      "data-site-slider-state",
      "pending",
    );
    // Hydration can initialize sliders after load. Simulate that ordering while
    // the real Swiper download is stalled: load alone must not reveal the page.
    await page.evaluate(
      () =>
        new Promise<void>((resolve) => {
          window.dispatchEvent(new Event("load"));
          requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
        }),
    );
    await expect(loader).toBeVisible();
    expect(await page.locator(".swiper-initialized").count()).toBe(0);
    release();
    await expect(loader).not.toBeVisible();
    expect(await page.locator(".swiper-initialized").count()).toBeGreaterThan(
      0,
    );
    await expect(
      page.locator('.swiper:not([data-site-slider-state="ready"])'),
    ).toHaveCount(0);
  } finally {
    release();
  }
});

test("a failed font keeps the loader visible without bypass controls", async ({
  page,
}) => {
  await page.route("**/assets/font/*.ttf", (route) => route.abort());
  await page.goto("/");
  const loader = page.getByRole("dialog");
  await expect(loader.getByRole("status")).toContainText("بارگذاری کامل نشد");
  await expect(loader.getByRole("button")).toHaveCount(0);
  await page.keyboard.press("Escape");
  await expect(loader).toBeVisible();
});

test("clicks cannot bypass the loader while assets are pending", async ({
  page,
}) => {
  const release = await holdLogo(page);
  try {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    const loader = page.getByRole("dialog");
    await expect(loader).toBeVisible();
    await loader.click({ position: { x: 8, y: 8 } });
    await expect(loader).toBeVisible();
    await expect(loader.getByRole("button")).toHaveCount(0);
    release();
    await expect(loader).not.toBeVisible();
  } finally {
    release();
  }
});

test("updates its connection message when the browser goes offline", async ({
  page,
  context,
}) => {
  const release = await holdLogo(page);
  try {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    const loader = page.getByRole("dialog");
    await expect(loader).toBeVisible();
    await context.setOffline(true);
    await expect(loader.getByRole("status")).toContainText(
      "اتصال اینترنت برقرار نیست",
    );
    await expect(loader.getByRole("button")).toHaveCount(0);
    await context.setOffline(false);
    await expect(loader.getByRole("status")).not.toContainText(
      "اتصال اینترنت برقرار نیست",
    );
  } finally {
    await context.setOffline(false);
    release();
  }
});

test("a failed image does not trap the visitor in the loader", async ({
  page,
}) => {
  await page.route("**/assets/logo/shapee-optimized-2.webp", (route) =>
    route.abort(),
  );
  await page.goto("/");
  await expect(page.locator(".site-loader")).not.toBeVisible();
  await expect(page.locator("main")).toBeVisible();
});

test("server-rendered content remains accessible without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  try {
    await page.goto("http://127.0.0.1:3100/");
    await expect(page.locator(".site-loader")).not.toBeVisible();
    await expect(page.locator("main")).toBeVisible();
  } finally {
    await context.close();
  }
});
