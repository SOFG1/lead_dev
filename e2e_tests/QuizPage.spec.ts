import { test, expect } from "@playwright/test";

test("has first question title", async ({ page }) => {
  await page.goto("https://sofg1.github.io/lead_dev/");

  const h2Heading = page.getByRole("heading", { level: 2 });
  await expect(h2Heading).toHaveText("1. HTML inputs");
});

test("settings modal opened", async ({ page }) => {
  await page.goto("https://sofg1.github.io/lead_dev/");

  await page.getByLabel("Settings button").click();

  const h2Heading = page.getByRole("heading", { level: 2, name: "Settings" });
  expect(h2Heading).toBeTruthy();
});

test("Show button shows answer", async ({ page }) => {
  await page.goto("https://sofg1.github.io/lead_dev/");

  await page.getByRole("button", { name: "Show answer" }).click();

  await expect(
    page.getByText("hidden, image, color, month, week, search…"),
  ).toBeVisible();
});

test("Know button shows the next question", async ({ page }) => {
  await page.goto("https://sofg1.github.io/lead_dev/");

  await page.getByRole("button", { name: "Know answer" }).click();

  await expect(page.getByText("CSS Float")).toBeVisible();
});

test("Know button updates the stats", async ({ page }) => {
  await page.goto("https://sofg1.github.io/lead_dev/");

  await page.getByRole("button", { name: "Know answer" }).click();

  await expect(page.getByText(/Today answered/i)).toHaveText(
    "Today answered: 1 (0)",
  );
});
