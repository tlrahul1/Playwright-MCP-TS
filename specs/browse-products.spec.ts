// spec: test-plan.md
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Product Browsing Tests', () => {
  test('Browse Products Page', async ({ page }) => {
    // 1. Perform successful login with standard_user
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.getByText('Products')).toBeVisible();

    // 2. Verify the products inventory page loads correctly
    await expect(page.locator('[data-test="inventory-item-name"]').filter({ hasText: 'Sauce Labs Backpack' })).toBeVisible();
    await expect(page.locator('[data-test="inventory-item-name"]').filter({ hasText: 'Sauce Labs Bike Light' })).toBeVisible();
    await expect(page.locator('[data-test="inventory-item-name"]').filter({ hasText: 'Sauce Labs Bolt T-Shirt' })).toBeVisible();
    await expect(page.locator('[data-test="inventory-item-name"]').filter({ hasText: 'Sauce Labs Fleece Jacket' })).toBeVisible();
    await expect(page.locator('[data-test="inventory-item-name"]').filter({ hasText: 'Sauce Labs Onesie' })).toBeVisible();
    await expect(page.locator('[data-test="inventory-item-name"]').filter({ hasText: 'Test.allTheThings() T-Shirt (Red)' })).toBeVisible();
  });
});