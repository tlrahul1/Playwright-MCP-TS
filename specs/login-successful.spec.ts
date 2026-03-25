// spec: test-plan.md
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Login Tests', () => {
  test('Successful Login with Standard User', async ({ page }) => {
    // 1. Navigate to https://www.saucedemo.com/
    await page.goto('https://www.saucedemo.com/');
    await expect(page.getByText('Swag Labs')).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();

    // 2. Enter 'standard_user' in the username field
    await page.locator('[data-test="username"]').fill('standard_user');

    // 3. Enter 'secret_sauce' in the password field
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();

    // 4. Click the 'Login' button
    await page.locator('[data-test="login-button"]').click();
    await expect(page.getByText('Swag Labs')).toBeVisible();
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
  });
});