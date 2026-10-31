import { expect, test } from "@playwright/test";

test("job ads search employers and open their own matching details", async ({
  page,
}, info) => {
  await page.goto("/inner-category/hire-ads-category");
  await expect(page.locator(".site-loader")).not.toBeVisible();
  const cards = page.locator(".job-card");
  await expect(cards).toHaveCount(12);
  const links = await cards.evaluateAll((elements) =>
    elements.map((element) => element.getAttribute("href")),
  );
  expect(new Set(links).size).toBe(12);
  const mobile = info.project.name === "mobile";
  const prefix = mobile ? "mobile" : "desktop";
  const search = async (query: string) => {
    if (mobile) await page.locator("#products-mobile-fitler-trigger").click();
    await page.locator(`#${prefix}-query`).fill(query);
    await page
      .getByRole("button", { name: "اعمال فیلترها", exact: true })
      .filter({ visible: true })
      .click();
  };
  await search("هور");
  await expect(cards).toHaveCount(2);
  await search("React");
  await expect(cards).toHaveCount(1);
  const title = await cards
    .first()
    .getByRole("heading", { level: 3 })
    .innerText();
  const employer = await cards
    .first()
    .locator(".job-card__employer")
    .innerText();
  await page.screenshot({ path: test.info().outputPath("job-listing.png") });
  await cards.first().click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(title);
  await expect(page.locator(".job-detail__company")).toContainText(employer);
  await expect(page).toHaveTitle(`${title} | ${employer} | شاپی`);
  await expect(
    page.getByText("تسلط به React و TypeScript", { exact: true }),
  ).toBeVisible();
  await page.screenshot({ path: test.info().outputPath("job-detail.png") });
  await page
    .getByRole("link", { name: "همه فرصت‌های شغلی", exact: true })
    .click();
  await expect(cards).toHaveCount(12);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});

test("custom dropdowns support keyboard, dismissal and a single focus border", async ({
  page,
}, info) => {
  await page.goto("/inner-category/products-category?type=tours");
  await expect(page.locator(".site-loader")).not.toBeVisible();
  const mobile = info.project.name === "mobile";
  if (mobile) await page.locator("#products-mobile-fitler-trigger").click();
  const prefix = mobile ? "mobile" : "desktop";
  const city = page.locator(`#${prefix}-location`);
  await city.focus();
  await page.keyboard.press("ArrowDown");
  const list = page.getByRole("listbox", { name: "شهر", exact: true });
  await expect(list).toBeVisible();
  await page.keyboard.press("End");
  await expect(city).toHaveAttribute(
    "aria-activedescendant",
    `${prefix}-location-options-4`,
  );
  await page.keyboard.press("Enter");
  await expect(city).toHaveText("شیراز");
  await expect(city).toBeFocused();
  await expect(city).toHaveCSS("outline-width", "0px");
  await expect(city).toHaveCSS("box-shadow", "none");
  await city.hover();
  await expect(city).toHaveCSS("outline-width", "0px");
  await city.click();
  await expect(
    list.getByRole("option", { name: "شیراز", exact: true }),
  ).toHaveAttribute("aria-selected", "true");
  await page.keyboard.press("Escape");
  await expect(list).toHaveCount(0);
  if (mobile)
    await expect(
      page.getByRole("dialog", { name: "فیلترهای جستجو" }),
    ).toBeVisible();
  await city.click();
  await page.locator(`#${prefix}-query`).click();
  await expect(list).toHaveCount(0);
  await expect(page.locator(".listing select")).toHaveCount(0);
});

for (const route of [
  "products-category",
  "products-category?type=tours",
  "house-category",
  "online-shops-category",
  "brands-category",
  "hire-ads-category",
]) {
  test(`shared filters apply and remove independently on ${route}`, async ({
    page,
  }, info) => {
    await page.goto("/inner-category/" + route);
    await expect(page.locator(".site-loader")).not.toBeVisible();
    const mobile = info.project.name === "mobile";
    if (mobile) await page.locator("#products-mobile-fitler-trigger").click();
    const prefix = mobile ? "mobile" : "desktop";
    const category = page.locator(`#${prefix}-category`);
    const city = page.locator(`#${prefix}-location`);
    await category.click();
    await page.getByRole("listbox").getByRole("option").nth(1).click();
    await city.click();
    await page.getByRole("listbox").getByRole("option").nth(1).click();
    const categoryName = await category.textContent();
    const cityName = await city.textContent();
    await page
      .getByRole("button", { name: "اعمال فیلترها", exact: true })
      .filter({ visible: true })
      .click();
    const chips = page.getByRole("group", { name: "فیلترهای فعال" });
    await expect(
      chips.getByRole("button", {
        name: "حذف فیلتر " + categoryName,
        exact: true,
      }),
    ).toBeVisible();
    await chips
      .getByRole("button", { name: "حذف فیلتر " + categoryName, exact: true })
      .click();
    await expect(
      chips.getByRole("button", { name: "حذف فیلتر " + cityName, exact: true }),
    ).toBeVisible();
    await expect(chips.getByRole("button")).toHaveCount(2);
    await chips
      .getByRole("button", { name: "حذف همه فیلترها", exact: true })
      .click();
    await expect(chips).toHaveCount(0);
    await expect(page.getByRole("region", { name: "نتایج" })).toBeVisible();
  });
}

test("unapplied mobile filters are discarded and the apply button stays visible", async ({
  page,
}, info) => {
  test.skip(info.project.name !== "mobile");
  await page.setViewportSize({ width: 390, height: 600 });
  await page.goto("/inner-category/products-category?type=tours");
  const trigger = page.locator("#products-mobile-fitler-trigger");
  await trigger.click();
  const panel = page.getByRole("dialog", { name: "فیلترهای جستجو" });
  await panel.locator("#mobile-query").fill("دبی");
  await expect(
    panel.getByRole("button", { name: "اعمال فیلترها" }),
  ).toBeInViewport();
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
  await trigger.click();
  await expect(panel.locator("#mobile-query")).toHaveValue("");
  await panel.locator("#mobile-query").fill("دبی");
  await panel.getByRole("button", { name: "اعمال فیلترها" }).click();
  await expect(
    page.getByRole("region", { name: "نتایج" }).getByRole("link"),
  ).toHaveCount(1);
  const sortTrigger = page.locator("#products-mobile-sort-sorting");
  await sortTrigger.click();
  await page.locator("#mobile-sort").click();
  await page.getByRole("option", { name: "گران‌ترین", exact: true }).click();
  await page.keyboard.press("Escape");
  await sortTrigger.click();
  await expect(page.locator("#mobile-sort")).toHaveText("مرتبط‌ترین");
  await page.locator("#mobile-sort").click();
  await page.getByRole("option", { name: "ارزان‌ترین", exact: true }).click();
  await page
    .getByRole("dialog", { name: "مرتب‌سازی", exact: true })
    .getByRole("button", { name: "اعمال", exact: true })
    .click();
  await sortTrigger.click();
  await expect(page.locator("#mobile-sort")).toHaveText("ارزان‌ترین");
  await page.keyboard.press("Escape");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});

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
  await expect(page.locator(".site-loader")).not.toBeVisible();
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
