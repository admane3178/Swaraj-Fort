# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home.spec.ts >> home page loads and has correct title
- Location: e2e\home.spec.ts:4:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForSelector: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('h1') to be visible

```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - region "Notifications (F8)":
    - list
  - region "Notifications alt+T" [ref=f1e3]
  - generic [ref=f1e4]: Something went wrong. Please refresh.
```

# Test source

```ts
  1  | // e2e/home.spec.ts
  2  | import { test, expect } from '@playwright/test';
  3  | 
  4  | test('home page loads and has correct title', async ({ page }) => {
  5  |   await page.goto('http://localhost:3001/');
  6  |   // Verify the page URL.
> 7  |   await page.waitForSelector('h1', { timeout: 30000 });
     |              ^ Error: page.waitForSelector: Test timeout of 30000ms exceeded.
  8  |   const heading = page.locator('h1');
  9  |   await expect(heading).toContainText('Swarajya');
  10 | });
  11 | 
```