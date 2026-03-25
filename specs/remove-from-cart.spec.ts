// spec: test-plan.md
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Cart Management Tests', () => {
  test('Remove Product from Cart', async ({ page }) => {
    // 1. Add 'Sauce Labs Backpack' to cart
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toBeVisible();

    // 2. Locate the 'Remove' button for 'Sauce Labs Backpack'
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();

    // 3. Click the 'Remove' button for 'Sauce Labs Backpack'
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible();
  });
});