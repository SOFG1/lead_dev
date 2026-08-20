import { test, expect } from "@playwright/test";

test("has first question title", async ({ page }) => {
  await page.goto("https://sofg1.github.io/lead_dev/");

  const h2Heading = page.getByRole("heading", { level: 2 });
  await expect(h2Heading).toHaveText("1. HTML inputs")
});

test("settings modal opened", async ({ page }) => {
  await page.goto("https://sofg1.github.io/lead_dev/");

  await page.getByAltText('Settings Icon').click();
});
