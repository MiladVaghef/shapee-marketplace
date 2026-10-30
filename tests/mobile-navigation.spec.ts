import { expect, test } from "@playwright/test";
import { accountNavigation } from "../src/data/account-navigation";

test("mobile Profile tab opens the account hub and all account pages are linked", async ({
  page,
}) => {
  await page.setViewportSize({ width: 412, height: 915 });
  await page.goto("/");
  const tabs = page.getByRole("navigation", { name: "ناوبری اصلی" });
  await expect(tabs).toHaveCount(1);
  await tabs.getByRole("link", { name: "پروفایل" }).click();
  await expect(page).toHaveURL(/\/account$/);
  const hub = page.getByRole("region", { name: "صفحه پروفایل" });
  await expect(hub).toBeVisible();
  await expect(hub.getByRole("heading", { level: 1 })).toHaveText(
    "حساب کاربری",
  );
  for (const item of accountNavigation)
    await expect(
      hub.locator(`.profile-hub-row[href="/account/${item.slug}"]`),
    ).toHaveCount(1);
  await expect(tabs.getByRole("link", { name: "پروفایل" })).toHaveAttribute(
    "aria-current",
    "page",
  );
  await expect(
    tabs.getByRole("link", { name: "پروفایل" }).locator("i"),
  ).toHaveClass(/icon-profile-filled/);
  await hub.locator('.profile-hub-row[href="/account/chat"]').click();
  await expect(page).toHaveURL(/\/account\/chat$/);
  await expect(tabs.getByRole("link", { name: "گفتگوها" })).toHaveAttribute(
    "aria-current",
    "page",
  );
  await tabs.getByRole("link", { name: "پروفایل" }).click();
  await expect(hub).toBeVisible();
});

test("bottom tabs switch filled icons and exactly one active state", async ({
  page,
}) => {
  await page.setViewportSize({ width: 412, height: 915 });
  await page.goto("/");
  const tabs = page.getByRole("navigation", { name: "ناوبری اصلی" });
  for (const [name, icon] of [
    ["خانه", "home-alt-3"],
    ["گفتگوها", "chat-sms-filled"],
    ["دسته بندی", "grid-filled"],
    ["پروفایل", "profile-filled"],
    ["ثبت آگهی", "plus-alt"],
  ]) {
    const link = tabs.getByRole("link", { name, exact: true });
    await link.click();
    await expect(link).toHaveAttribute("aria-current", "page");
    await expect(link).toHaveClass(/active/);
    await expect(link.locator("i")).toHaveClass(
      new RegExp(`icon-${icon}(?:\\s|$)`),
    );
    await expect(tabs.locator('[aria-current="page"]')).toHaveCount(1);
    expect(
      await link
        .locator("i")
        .evaluate((node) => getComputedStyle(node).maskImage),
    ).toContain(`${icon}.svg`);
  }
  await page.goBack();
  await expect(tabs.locator('[aria-current="page"]')).toHaveCount(1);
});

test("rings reach both screen edges on small viewports", async ({ page }) => {
  await page.goto("/");
  for (const width of [320, 412, 768, 1024]) {
    await page.setViewportSize({ width, height: 915 });
    const box = (await page.locator(".avatar-swiper").boundingBox())!;
    expect(Math.abs(box.x)).toBeLessThan(1);
    expect(Math.abs(box.x + box.width - width)).toBeLessThan(1);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
});

test("desktop account landing retains the dashboard", async ({
  page,
  isMobile,
}) => {
  test.skip(isMobile);
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/account");
  await expect(page.locator(".account-home-desktop")).toBeVisible();
  await expect(page.locator(".profile-hub")).not.toBeVisible();
  await expect(
    page.getByRole("navigation", { name: "ناوبری اصلی" }),
  ).not.toBeVisible();
});
