// spec: test-plan.md
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Login Tests', () => {
  test('Login with Locked Out User', async ({ page }) => {
    // 1. Navigate to https://www.saucedemo.com/
    await page.goto('https://www.saucedemo.com/');
    await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();

    // 2. Enter 'locked_out_user' in the username field
    await page.locator('[data-test="username"]').fill('locked_out_user');
    await expect(page.locator('[data-test="username"]')).toHaveValue('locked_out_user');

    // 3. Enter 'secret_sauce' in the password field
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await expect(page.locator('[data-test="password"]')).toHaveValue('secret_sauce');

    // 4. Click the 'Login' button
    await page.locator('[data-test="login-button"]').click();
    await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
  });
});