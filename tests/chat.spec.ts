import { expect, test } from "@playwright/test";

test("conversation cards open matching threads and Back returns to the inbox", async ({
  page,
}) => {
  await page.goto("/account/chat");
  await expect(page.locator(".chat-room")).toHaveCount(0);
  const cards = page.locator(".chat-item");
  const names = await cards.locator("h3").allTextContents();
  for (let index = 0; index < names.length; index++) {
    await cards.nth(index).click();
    await expect(page.locator(".chat-room__name")).toHaveText(names[index]);
    await expect(page.locator(".account-chat-inbox")).not.toBeVisible();
    await expect(page.getByRole("log")).toBeVisible();
    const footer = await page.locator(".chat-room__footer").boundingBox();
    const bottom = await page.locator(".mobile-bottom-nav").boundingBox();
    if (bottom)
      expect(footer!.y + footer!.height).toBeLessThanOrEqual(bottom.y);
    await page.getByLabel("متن پیام").fill(`متن گفتگو ${index}`);
    await page.getByLabel("بازگشت به گفتگوها").click();
    await expect(cards.nth(index)).toBeVisible();
    await expect(cards.nth(index).locator(".chat-item__badge")).toHaveCount(0);
    await cards.nth(index).click();
    await expect(page.getByLabel("متن پیام")).toHaveValue(`متن گفتگو ${index}`);
    await page.getByLabel("افزودن پیام").click();
    await expect(page.getByRole("log")).toContainText(`متن گفتگو ${index}`);
    await page.getByLabel("بازگشت به گفتگوها").click();
  }
  await cards.first().click();
  await expect(page.getByRole("log")).not.toContainText("متن گفتگو 1");
  await page.getByLabel("ذخیره گفتگو", { exact: true }).click();
  await page.getByLabel("بازگشت به گفتگوها").click();
  await page.getByRole("button", { name: "ذخیره شده", exact: true }).click();
  await expect(cards).toHaveCount(1);
  await expect(cards.first()).toContainText(names[0]);
  await page.getByRole("button", { name: "همه", exact: true }).click();
  await page.getByLabel("جستجو در گفتگوها").fill("موبایل");
  await expect(cards).toHaveCount(1);
  await cards.first().focus();
  await page.keyboard.press("Enter");
  await expect(page.locator(".chat-room__name")).toHaveText(names[1]);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});
