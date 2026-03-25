// spec: test-plan.md
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Product Browsing Tests', () => {
  test('Sort Products by Name and Price', async ({ page }) => {
    // 1. Perform successful login with standard_user
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // 2. Verify initial sort order
    await expect(page.locator('[data-test="active-option"]')).toHaveText('Name (A to Z)');

    // 3. Select 'Name (Z to A)' from the sort dropdown
    await page.locator('[data-test="product-sort-container"]').selectOption(['za']);
    await expect(page.locator('[data-test="active-option"]')).toHaveText('Name (Z to A)');

    // 4. Select 'Price (low to high)' from the sort dropdown
    await page.locator('[data-test="product-sort-container"]').selectOption(['lohi']);
    await expect(page.locator('[data-test="active-option"]')).toHaveText('Price (low to high)');

    // 5. Select 'Price (high to low)' from the sort dropdown
    await page.locator('[data-test="product-sort-container"]').selectOption(['hilo']);
    await expect(page.locator('[data-test="active-option"]')).toHaveText('Price (high to low)');
  });
});