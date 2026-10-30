import { expect, test } from "@playwright/test";
import { featuredProducts, products } from "../src/data/products";

test("studio catalog has varied cards with valid responsive images", async ({
  page,
  request,
}) => {
  await page.goto("/inner-category/products-category", {
    waitUntil: "networkidle",
  });
  const cards = page.locator(".catalog-product-card");
  await expect(cards).toHaveCount(featuredProducts.length);
  const paths = await cards
    .locator("img")
    .evaluateAll((images) =>
      images.map((image) => (image as HTMLImageElement).getAttribute("src")),
    );
  expect(new Set(paths).size).toBe(featuredProducts.length);
  const studio = featuredProducts.filter((product) =>
    product.image.includes("/images/products/"),
  );
  expect(studio).toHaveLength(8);
  for (const product of studio) {
    const response = await request.get(product.image);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("image/webp");
    expect((await response.body()).length).toBeLessThan(200000);
    expect(
      (await request.get(product.image.replace(".webp", "-480.webp"))).status(),
    ).toBe(200);
  }
});

test("product layout scales across phone, tablet and wide desktop widths", async ({
  page,
}) => {
  await page.goto(`/products/${products[0].slug}`, {
    waitUntil: "networkidle",
  });
  const imageWidths: number[] = [];
  await expect(page.getByTestId("product-price").locator("strong")).toHaveText(
    "۳۷٬۵۰۰٬۰۰۰",
  );
  expect(
    await page.locator(".product-related-card .text-primary").allTextContents(),
  ).toEqual(expect.arrayContaining([expect.stringMatching(/[۰-۹]/)]));
  for (const price of await page
    .locator(".product-related-card .text-primary")
    .allTextContents())
    expect(price).not.toMatch(/[0-9]/);
  for (const width of [320, 412, 768, 920, 1024, 1104, 1440, 1920, 2560]) {
    await page.setViewportSize({ width, height: 900 });
    const image = await page.locator(".product-detail-image img").boundingBox();
    const title = await page.getByRole("heading", { level: 1 }).boundingBox();
    expect(
      Math.abs(image!.width - image!.height),
      `image aspect ratio at ${width}px`,
    ).toBeLessThan(2);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      `no overflow at ${width}px`,
    ).toBe(true);
    if (width <= 700) expect(title!.y + title!.height).toBeLessThan(image!.y);
    else expect(title!.x).toBeGreaterThan(image!.x + image!.width);
    expect(title!.y, `title visible at ${width}px`).toBeLessThan(400);
    const actions = await page
      .locator(".product-seller-actions a")
      .evaluateAll((links) =>
        links.map((link) => ({
          overflow: link.scrollWidth > link.clientWidth,
          nowrap: getComputedStyle(link).whiteSpace === "nowrap",
          height: link.getBoundingClientRect().height,
        })),
      );
    for (const action of actions) {
      expect(action.overflow, `seller button fits at ${width}px`).toBe(false);
      expect(action.nowrap).toBe(true);
      expect(action.height).toBeGreaterThanOrEqual(44);
    }
    if ([920, 1440, 1920].includes(width)) imageWidths.push(image!.width);
  }
  expect(imageWidths[1]).toBeGreaterThan(imageWidths[0] + 100);
  expect(imageWidths[2]).toBeGreaterThanOrEqual(imageWidths[1]);
});

test("all product routes render and unknown products return 404", async ({
  request,
}) => {
  for (const product of products) {
    const response = await request.get(`/products/${product.slug}`);
    expect(response.status(), product.slug).toBe(200);
    expect(await response.text()).toContain(product.image);
  }
  expect((await request.get("/products/unknown-product")).status()).toBe(404);
  expect((await request.get("/inner-ads/inner-personal-ad")).status()).toBe(
    200,
  );
});
