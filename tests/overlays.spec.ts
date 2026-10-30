import { expect, test } from "@playwright/test";

test.use({ viewport: { width: 412, height: 915 } });

test("category panels close with X, backdrop and Escape across all listings", async ({
  page,
}, info) => {
  test.skip(info.project.name !== "mobile");
  for (const route of [
    "/inner-category/products-category",
    "/inner-category/shops-category",
    "/inner-category/hire-ads-category",
    "/search-result",
  ]) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    for (const [trigger, drawer] of [
      ["fitler-trigger", "fitler"],
      ["category-trigger", "category"],
      ["sort-sorting", "sort"],
    ]) {
      const opener = page.locator("#products-mobile-" + trigger);
      const panel = page.locator("#products-mobile-" + drawer + "-drawer");
      await opener.click();
      await expect(panel).toHaveAttribute("aria-hidden", "false");
      await panel.getByRole("button", { name: "بستن پنجره" }).click();
      await expect(page.locator("#products-mobile-overlay")).toHaveClass(
        /hidden/,
      );
      await expect(opener).toBeFocused();
      await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
      await opener.click();
      await page.keyboard.press("Escape");
      await expect(panel).toHaveAttribute("aria-hidden", "true");
    }
    await page.locator("#products-mobile-sort-sorting").click();
    await page
      .locator("#products-mobile-overlay")
      .click({ position: { x: 4, y: 4 } });
    await expect(page.locator("#products-mobile-overlay")).toHaveClass(
      /hidden/,
    );
  }
});

test("mobile header search opens its dedicated panel and submits searches", async ({
  page,
}, info) => {
  test.skip(info.project.name !== "mobile");
  for (const route of [
    "/",
    "/inner-category/products-category",
    "/products/square-shoe-5-3a1da4b",
  ]) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    const opener = page.locator('[id="header-search-bar"]:visible');
    await opener.click();
    const panel = page.getByRole("dialog", { name: "جستجو", exact: true });
    await expect(panel).toBeVisible();
    await expect(panel.locator("input").first()).toBeFocused();
    await panel.getByRole("button", { name: "بستن جستجو" }).click();
    await expect(panel).toHaveCount(0);
    await expect(opener).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(panel).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(panel).toHaveCount(0);
    await opener.click();
    await panel.locator("input").first().fill("کفش");
    await panel.locator("input").first().press("Enter");
    await expect(page).toHaveURL(/\/search-result\?q=/);
    await expect(
      page.getByRole("dialog", { name: "جستجو", exact: true }),
    ).toHaveCount(0);
  }
});
