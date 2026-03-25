// spec: test-plan.md
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Cart Management Tests', () => {
  test('View Cart Contents', async ({ page }) => {
    // 1. Add 'Sauce Labs Backpack' to cart
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toBeVisible();

    // 2. Click the cart icon to navigate to the cart page
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.getByText('Your Cart')).toBeVisible();
    await expect(page.locator('.cart_quantity')).toHaveText('1');
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    await expect(page.getByText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')).toBeVisible();
    await expect(page.getByText('$29.99')).toBeVisible();
  });
});