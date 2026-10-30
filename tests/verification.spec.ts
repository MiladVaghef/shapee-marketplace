import { expect, test } from "@playwright/test";

test("verification progresses in order, validates and preserves details and uploads", async ({
  page,
}) => {
  await page.goto("/account/verify");
  const wizard = page.locator(".verification-card");
  await expect(wizard.getByRole("heading", { level: 1 })).toHaveText(
    "اطلاعات شخصی",
  );
  await wizard.getByRole("button", { name: "ادامه", exact: true }).click();
  await expect(page.locator("#verify-name")).toHaveAttribute(
    "aria-invalid",
    "true",
  );
  await page.getByLabel("نام و نام خانوادگی").fill("علی محمدی");
  await page.getByLabel("کد ملی").fill("۱۲۳۴۵۶۷۸۹۰");
  await page.getByLabel("جنسیت").selectOption("male");
  await page.getByLabel("تاریخ تولد (شمسی)").fill("۱۳۷۵/۰۱/۰۱");
  await page.getByLabel("شماره موبایل").fill("۰۹۱۲۱۲۳۴۵۶۷");
  await wizard.getByRole("button", { name: "ادامه", exact: true }).click();
  await expect(wizard.getByRole("heading", { level: 1 })).toHaveText(
    "بارگذاری مدارک",
  );
  await wizard.getByRole("button", { name: "ادامه", exact: true }).click();
  await expect(wizard.locator(".verification-error")).toHaveCount(3);
  await page.locator("#verify-file-0").setInputFiles({
    name: "bad.txt",
    mimeType: "text/plain",
    buffer: Buffer.from("invalid"),
  });
  await expect(wizard).toContainText("حداکثر ۵ مگابایت");
  const image = Buffer.from(
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jRZkAAAAASUVORK5CYII=",
    "base64",
  );
  for (let i = 0; i < 3; i++)
    await page.locator(`#verify-file-${i}`).setInputFiles({
      name: `document-${i}.png`,
      mimeType: "image/png",
      buffer: image,
    });
  await expect(wizard.locator(".verification-preview img")).toHaveCount(3);
  await wizard.getByRole("button", { name: "مرحله قبل" }).click();
  await expect(page.getByLabel("نام و نام خانوادگی")).toHaveValue("علی محمدی");
  await wizard.getByRole("button", { name: "ادامه", exact: true }).click();
  await expect(wizard.locator(".verification-preview img")).toHaveCount(3);
  await wizard.getByRole("button", { name: "ادامه", exact: true }).click();
  await expect(wizard.getByRole("heading", { level: 1 })).toHaveText(
    "بررسی اطلاعات",
  );
  await expect(wizard.locator("dl")).toContainText("علی محمدی");
  await expect(wizard.locator("dl")).toContainText("۰۹۱۲۱۲۳۴۵۶۷");
  await wizard
    .getByRole("button", { name: "تأیید اطلاعات", exact: true })
    .click();
  await expect(wizard.locator(".form-notice")).toBeVisible();
  await wizard.getByRole("checkbox").check();
  await wizard
    .getByRole("button", { name: "تأیید اطلاعات", exact: true })
    .click();
  await expect(wizard.getByRole("heading", { level: 1 })).toHaveText(
    "اطلاعات تکمیل شد",
  );
  await expect(
    wizard.getByRole("link", { name: "بازگشت به حساب کاربری" }),
  ).toHaveAttribute("href", "/account");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});
