// spec: test-plan.md
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Login Tests', () => {
  test('Login with Invalid Credentials', async ({ page }) => {
    // 1. Navigate to https://www.saucedemo.com/
    await page.goto('https://www.saucedemo.com/');
    await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();

    // 2. Enter 'invalid_user' in the username field
    await page.locator('[data-test="username"]').fill('invalid_user');
    await expect(page.locator('[data-test="username"]')).toHaveValue('invalid_user');

    // 3. Enter 'wrong_password' in the password field
    await page.locator('[data-test="password"]').fill('wrong_password');
    await expect(page.locator('[data-test="password"]')).toHaveValue('wrong_password');

    // 4. Click the 'Login' button
    await page.locator('[data-test="login-button"]').click();
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
  });
});