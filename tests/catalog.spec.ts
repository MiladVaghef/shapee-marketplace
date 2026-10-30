import { expect, test } from "@playwright/test";

test("shop card opens the corresponding profile rather than a shared placeholder", async ({
  page,
}) => {
  await page.goto("/inner-category/online-shops-category");
  await page.locator('a[href="/profile/shops-profile?shop=max-shoes"]').click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("مکس شوز");
  await page.goto("/inner-category/brands-category");
  await page
    .locator('a[href="/profile/shops-profile?shop=nava-coffee"]')
    .click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("قهوه نوا");
});

test("catalog filters change results, reset, and show an empty state", async ({
  page,
}, info) => {
  await page.goto("/inner-category/products-category?type=tours");
  const mobile = info.project.name === "mobile";
  const openFilters = async () => {
    if (mobile) await page.locator("#products-mobile-fitler-trigger").click();
  };
  await openFilters();
  const prefix = mobile ? "mobile" : "desktop";
  await page.locator("#" + prefix + "-query").fill("دبی");
  await page
    .getByRole("button", { name: "اعمال فیلترها", exact: true })
    .filter({ visible: true })
    .click();
  const results = page.getByRole("region", { name: "نتایج" });
  await expect(results.getByRole("link")).toHaveCount(1);
  await expect(results.getByRole("link")).toHaveAttribute(
    "href",
    "/tours/dubai",
  );
  await openFilters();
  await page.locator("#" + prefix + "-query").fill("no-such-destination");
  await page
    .getByRole("button", { name: "اعمال فیلترها", exact: true })
    .filter({ visible: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "نتیجه‌ای پیدا نشد" }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "حذف همه فیلترها", exact: true })
    .filter({ visible: true })
    .last()
    .click();
  await expect(results.getByRole("link")).toHaveCount(4);
});

test("location picker opens at scope, advances, applies and restores focus", async ({
  page,
}) => {
  await page.goto("/");
  const trigger = page.locator("#header-location-dropdown button:visible");
  await trigger.click();
  await expect(page.getByText("انتخاب سطح", { exact: true })).toBeVisible();
  await page
    .getByRole("button", { name: "مشاهده آگهی ها", exact: true })
    .click();
  await expect(page.getByText("انتخاب استان", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "البرز", exact: true }).click();
  await page.getByRole("button", { name: "ادامه", exact: true }).click();
  await expect(page.getByText("انتخاب شهر", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "کرج", exact: true }).click();
  await page.getByRole("button", { name: "ادامه", exact: true }).click();
  await page
    .getByRole("button", { name: "مشاهده آگهی‌ها", exact: true })
    .click();
  await expect(trigger).toContainText("کرج");
  await expect(trigger).toBeFocused();
  await trigger.click();
  await expect(page.getByText("انتخاب سطح", { exact: true })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator("#location-popup")).toHaveCount(0);
});
