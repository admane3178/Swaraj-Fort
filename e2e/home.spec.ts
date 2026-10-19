// e2e/home.spec.ts
import { test, expect } from '@playwright/test';

test('home page loads and has correct title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/\//);
  // Assuming the main heading contains "Swaraj Forts"
  const heading = await page.locator('h1, h2, h3').first();
  await expect(heading).toContainText('Swaraj');
});
