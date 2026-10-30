import { expect, test, type Locator } from "@playwright/test";
const image = {
  name: "listing.png",
  mimeType: "image/png",
  buffer: Buffer.from(
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jRZkAAAAASUVORK5CYII=",
    "base64",
  ),
};
async function fillRequired(panel: Locator) {
  for (const field of await panel
    .locator(
      'input:not([type="file"]):not([type="hidden"]):not([type="radio"]):not([type="checkbox"]):not([disabled]),textarea:not([disabled])',
    )
    .all()) {
    if (!(await field.isVisible())) continue;
    const type = await field.getAttribute("type");
    if (
      await field.evaluate((element) =>
        (element as HTMLInputElement | HTMLTextAreaElement).checkValidity(),
      )
    )
      continue;
    const inputMode = await field.getAttribute("inputmode");
    const value =
      type === "number"
        ? "100000"
        : type === "email"
          ? "user@example.com"
          : type === "url"
            ? "https://example.com"
            : type === "date"
              ? "2026-01-15"
              : type === "time"
                ? "10:00"
                : type === "tel" || inputMode === "tel"
                  ? "09123456789"
                  : "عنوان واردشده برای فرم";
    await field.fill(value);
  }
  for (const field of await panel
    .locator('input[type="checkbox"][required]:not([disabled])')
    .all())
    if (await field.isVisible()) await field.check();
  for (const field of await panel
    .locator('input[type="radio"][required]:not([disabled])')
    .all())
    if (await field.isVisible()) await field.check();
}
for (const [route, count] of [
  ["/create-products/add-personal-product", 7],
  ["/create-products/add-online-product", 7],
  ["/create-products/add-hire-product", 7],
  ["/create-shop/add-online-shop", 5],
  ["/create-shop/add-physical-shop", 7],
] as const) {
  test(`${route} follows every HTML step, preserves inputs and images, and reviews actual values`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(route, { waitUntil: "domcontentloaded" });
    await expect(page.locator(".flow-step")).toHaveCount(count);
    const nav = page.locator(".flow-navigation");
    await expect(nav.getByRole("button", { name: "مرحله قبل" })).toBeDisabled();
    await nav.getByRole("button", { name: "مرحله بعدی" }).click();
    await expect(page.locator(".flow-step:visible")).toHaveAttribute(
      "data-flow-step",
      "0",
    );
    for (let step = 0; step < count; step++) {
      const panel = page.locator(".flow-step:visible");
      await expect(panel).toHaveAttribute("data-flow-step", String(step));
      await expect(page.locator(".flow-step:visible")).toHaveCount(1);
      await fillRequired(panel);
      if (step === 1) {
        await panel.locator("[data-flow-choice]").first().click();
      }
      if (await panel.locator("[data-flow-upload]").count()) {
        await nav.getByRole("button", { name: "مرحله بعدی" }).click();
        await expect(panel).toBeVisible();
        await panel.locator("[data-flow-upload] input").setInputFiles(image);
        await expect(
          panel.locator("[data-flow-upload] .flow-gallery img"),
        ).toHaveCount(1);
        await nav.getByRole("button", { name: "مرحله قبل" }).click();
        await nav.getByRole("button", { name: "مرحله بعدی" }).click();
        await expect(
          panel.locator("[data-flow-upload] .flow-gallery img"),
        ).toHaveCount(1);
      }
      if (step === count - 1) {
        await expect(panel.locator(".flow-review")).toContainText(
          "عنوان واردشده برای فرم",
        );
        await expect(panel.locator(".flow-review")).not.toContainText(
          "IPhone 16s",
        );
      }
      await nav
        .getByRole("button", {
          name: step === count - 1 ? "تأیید اطلاعات" : "مرحله بعدی",
          exact: true,
        })
        .click();
    }
    await expect(page.locator(".flow-complete")).toBeVisible();
    await page.getByRole("button", { name: "بازبینی اطلاعات" }).click();
    await expect(page.locator(".flow-step:visible")).toHaveAttribute(
      "data-flow-step",
      String(count - 1),
    );
    expect(errors).toEqual([]);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  });
}

test("creation draft restores its step and text values", async ({ page }) => {
  await page.goto("/create-products/add-personal-product");
  const nav = page.locator(".flow-navigation");
  await fillRequired(page.locator(".flow-step:visible"));
  await nav.getByRole("button", { name: "مرحله بعدی" }).click();
  await page.locator(".flow-step:visible [data-flow-choice]").first().click();
  await nav.getByRole("button", { name: "ذخیره پیش‌نویس" }).click();
  await page.reload();
  await expect(page.locator(".flow-step:visible")).toHaveAttribute(
    "data-flow-step",
    "1",
  );
  await nav.getByRole("button", { name: "مرحله قبل" }).click();
  await expect(
    page.locator(".flow-step:visible input[type=text]").first(),
  ).toHaveValue("عنوان واردشده برای فرم");
});

test("banner booking follows all four stages with a retained upload and date selection", async ({
  page,
}) => {
  await page.goto("/account/banner-slot-rent");
  const nav = page.locator(".flow-navigation");
  await expect(nav.getByRole("button", { name: "مرحله قبل" })).toBeDisabled();
  await nav.getByRole("button", { name: "مرحله بعدی" }).click();
  await page
    .locator(".flow-step:visible [data-flow-upload] input")
    .setInputFiles(image);
  await nav.getByRole("button", { name: "مرحله بعدی" }).click();
  const days = page.locator(".calendar-days button:not([disabled])");
  await days.nth(1).click();
  await days.nth(3).click();
  await expect(page.locator(".booking-summary")).toContainText("تعداد روز: 3");
  await nav.getByRole("button", { name: "مرحله قبل" }).click();
  await expect(
    page.locator(".flow-step:visible .flow-gallery img"),
  ).toHaveCount(1);
  await nav.getByRole("button", { name: "مرحله بعدی" }).click();
  await expect(page.locator(".booking-summary")).toContainText("تعداد روز: 3");
  await nav.getByRole("button", { name: "مرحله بعدی" }).click();
  await expect(page.locator(".flow-step:visible")).toHaveAttribute(
    "data-flow-step",
    "3",
  );
  await nav.getByRole("button", { name: "تأیید اطلاعات" }).click();
  await expect(page.locator(".flow-complete")).toBeVisible();
});

test("a restored draft requests its image again before final confirmation", async ({
  page,
}) => {
  await page.goto("/create-products/add-personal-product");
  const nav = page.locator(".flow-navigation");
  for (let step = 0; step < 6; step++) {
    const panel = page.locator(".flow-step:visible");
    await fillRequired(panel);
    if (await panel.locator("[data-flow-upload]").count())
      await panel.locator("[data-flow-upload] input").setInputFiles(image);
    await nav.getByRole("button", { name: "مرحله بعدی" }).click();
  }
  await fillRequired(page.locator(".flow-step:visible"));
  await nav.getByRole("button", { name: "ذخیره پیش‌نویس" }).click();
  await page.reload();
  await expect(page.locator(".flow-step:visible")).toHaveAttribute(
    "data-flow-step",
    "6",
  );
  await nav.getByRole("button", { name: "تأیید اطلاعات" }).click();
  await expect(page.locator(".flow-step:visible")).toHaveAttribute(
    "data-flow-step",
    "3",
  );
  await expect(page.locator(".form-notice")).toContainText("دوباره انتخاب");
});
