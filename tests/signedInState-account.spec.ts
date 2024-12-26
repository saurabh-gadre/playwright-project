import { test, expect, Page } from '@playwright/test';


test.describe('My Account', () => {

    test('Access Orders', async ({ page }) => {
        await page.goto('/my-account');
        await page.locator('li a[href*="orders"]').click();
        await expect(page).toHaveURL(/.*orders/);
    });

    test('Access Downloads', async ({ page }) => {
        await page.goto('/my-account');
        await page.locator('li a[href*="downloads"]').click();
        await expect(page).toHaveURL(/.*downloads/);
    });
});

test.describe('My Account Page', () => {
    test.use({ storageState: 'noLoggedInState.json' });

    test('Veify Login and Register is Visible', async ({ page }) => {
        await page.goto('/my-account');
        await expect(page.locator('[name="login"]')).toBeVisible();
        await expect(page.locator('[name="register"]')).toBeVisible();
    });
})
