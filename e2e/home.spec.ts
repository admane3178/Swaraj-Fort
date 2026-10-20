// e2e/home.spec.ts
import { test, expect } from '@playwright/test';

test('home page loads and has correct title', async ({ page }) => {
  await page.goto('http://localhost:3001/');
  await expect(page).toHaveURL(/\\/$/);
  // Ensure the app has rendered.
  await page.waitForLoadState('networkidle');
  // Small delay for potential animation.
  await page.waitForTimeout(3000);
  const heading = page.locator('h1');
  await expect(heading).toContainText('Swarajya');
});
