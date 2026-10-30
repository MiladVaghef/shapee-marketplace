import { expect, test } from "@playwright/test";
import { pages } from "../src/data/pages";

test("new catalog destinations and detail routes render and reject unknown slugs", async ({
  request,
}) => {
  for (const route of [
    "/inner-category/house-category",
    "/inner-category/brands-category",
    "/inner-category/online-shops-category",
    "/inner-category/products-category?type=tours",
    "/tours/dubai",
    "/tours/istanbul",
    "/tours/mazandaran",
    "/tours/shiraz",
    "/properties/villa-1",
    "/properties/villa-6",
  ]) {
    expect((await request.get(route)).status(), route).toBe(200);
  }
  for (const route of [
    "/tours/unknown-destination",
    "/properties/unknown-property",
  ]) {
    expect((await request.get(route)).status(), route).toBe(404);
  }
});

for (const screen of pages) {
  test(`renders ${screen.route} without browser errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (
        message.type() === "error" &&
        !message.text().includes("Failed to load resource")
      )
        errors.push(message.text());
    });
    const response = await page.goto(screen.route, {
      waitUntil: "networkidle",
    });
    expect(response?.status()).toBe(200);
    await expect(page.locator("html")).toHaveAttribute("lang", "fa");
    await expect(page.locator("body")).not.toBeEmpty();
    expect(errors).toEqual([]);
    await page.locator('img[src^="/assets/"]').evaluateAll((images) => {
      images.forEach((image) => {
        (image as HTMLImageElement).loading = "eager";
      });
    });
    await expect
      .poll(
        () =>
          page
            .locator('img[src^="/assets/"]')
            .evaluateAll((images) =>
              images
                .filter(
                  (image) =>
                    !(image as HTMLImageElement).complete ||
                    (image as HTMLImageElement).naturalWidth === 0,
                )
                .map((image) => image.getAttribute("src")),
            ),
        { timeout: 15000 },
      )
      .toEqual([]);
  });
}

test("unknown routes return 404", async ({ request }) => {
  expect((await request.get("/does-not-exist")).status()).toBe(404);
});
