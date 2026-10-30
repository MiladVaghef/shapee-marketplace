import { expect, test } from "@playwright/test";
import { getProduct } from "../src/data/products";
import { formatPersianPrice } from "../src/lib/format";

test("product and account pages have no added sample labels", async ({
  page,
}) => {
  for (const route of [
    "/products/square-shoe-5-3a1da4b",
    "/account/dashboard",
    "/login",
    "/explore",
  ]) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    await expect(page.locator("body")).not.toContainText(
      /نمونه|نمایشی|sample content|portfolio demo/i,
    );
  }
});

for (const listing of [
  "/inner-category/products-category",
  "/",
  "/profile/shops-profile",
  "/search-result",
  "/account/wish-list",
]) {
  test(`product card opens matching details from ${listing}`, async ({
    page,
    isMobile,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(listing, { waitUntil: "networkidle" });
    if (listing === "/inner-category/products-category" && !isMobile) {
      await expect(page.locator("#mega-menu")).not.toBeVisible();
      await page.locator("#categories-button").click();
      await expect(page.locator("#mega-menu")).toBeVisible();
      await page.keyboard.press("Escape");
      await expect(page.locator("#mega-menu")).not.toBeVisible();
    }
    const card = page.locator('a[href^="/products/"]:visible').first();
    const href = await card.getAttribute("href");
    const product = getProduct(href!.split("/").pop()!)!;
    await expect(card).toContainText(product.title);
    await card.click();
    await expect(page).toHaveURL(new RegExp(`${href}$`));
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      product.title,
    );
    await expect(
      page.getByTestId("product-price").locator("strong"),
    ).toHaveText(formatPersianPrice(product.price));
    await expect(page.locator(".product-detail-image img")).toHaveAttribute(
      "src",
      product.image,
    );
    await expect(page).toHaveTitle(`شاپی | ${product.title}`);
    await page
      .getByRole("button", { name: `بزرگ‌نمایی تصویر ${product.title}` })
      .click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog")).not.toBeVisible();
    expect(errors).toEqual([]);
  });
}

test("demo login opens the account dashboard", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "ورود به حساب کاربری" }).click();
  await expect(page).toHaveURL(/\/account\/dashboard$/);
});

test("account navigation preserves wallet route and chart after reload", async ({
  page,
}, info) => {
  await page.goto("/account/dashboard");
  if (info.project.name === "mobile")
    await page.locator("#account-menu-button").click();
  await page.locator('#account-menu a[href="/account/my-wallet"]').click();
  await expect(page).toHaveURL(/\/account\/my-wallet$/);
  await page.reload();
  await expect(
    page.locator('#account-menu a[href="/account/my-wallet"]'),
  ).toHaveAttribute("aria-current", "page");
  await expect(page.locator("canvas#financeChart")).toBeVisible();
});

test("banner wizard reaches the calendar and calculates a date range", async ({
  page,
}) => {
  await page.goto("/account/banner-slot-rent");
  await page.getByRole("button", { name: /مرحله بعد/ }).click();
  await page
    .locator(".flow-step:visible [data-flow-upload] input")
    .setInputFiles({
      name: "banner.png",
      mimeType: "image/png",
      buffer: Buffer.from(
        "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jRZkAAAAASUVORK5CYII=",
        "base64",
      ),
    });
  await page.getByRole("button", { name: /مرحله بعد/ }).click();
  const days = page.locator(".calendar-days button:not([disabled])");
  await days.nth(1).click();
  await days.nth(3).click();
  await expect(page.locator(".booking-summary")).toContainText("تعداد روز: 3");
});

test("profile demo draft persists after reload", async ({ page }) => {
  await page.goto("/account/edit-profile");
  const input = page
    .locator('input:visible:not([type="file"]):not([type="hidden"])')
    .first();
  await input.fill("Portfolio Demo");
  await page.getByRole("button", { name: "ذخیره تغییرات" }).click();
  await expect(page.getByRole("status")).toContainText("ذخیره شد");
  await page.reload();
  await expect(input).toHaveValue("Portfolio Demo");
});

test("page explorer connects to every migrated screen", async ({ page }) => {
  await page.goto("/explore");
  await expect(page.locator(".project-card")).toHaveCount(32);
  await page.screenshot({
    path: `test-results/explorer-${test.info().project.name}.png`,
    fullPage: true,
  });
});

test("mobile drawer closes on Escape and unlocks scrolling", async ({
  page,
}, info) => {
  test.skip(info.project.name !== "mobile");
  await page.goto("/account/dashboard");
  await page.locator("#account-menu-button").click();
  await expect(page.locator("#account-menu")).toHaveClass(/is-open/);
  await page.keyboard.press("Escape");
  await expect(page.locator("#account-menu")).toHaveClass(/xl-is-closed/);
  await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
  await page.screenshot({
    path: "docs/screenshots/dashboard-mobile.png",
    fullPage: true,
  });
});
