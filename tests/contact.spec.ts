import { test, expect } from "@playwright/test";

test.describe('Contact Page Tests', () => {

    test('Verify Contact Page Form Submission', async ({ page }) => {
        await page.goto("https://practice.sdetunicorns.com/");

        // navigate to contact page
        await page.locator('#zak-primary-menu li').nth(4).click();

        // fill form fields
        await page.locator('.contact-name input').scrollIntoViewIfNeeded();
        await page.locator('.contact-name input').first().fill('John Doe');
        await page.locator('.contact-email input').fill('john.doe@testmail.com');
        await page.locator('.contact-phone input').fill('012-24443-4322');
        await page.locator('.contact-message textarea').fill('Sample Test Message');

        // using soft assertion
        // await expect.soft(page.locator('.contact-message textarea')).toHaveText("Failed Text Message");
        // expect(test.info().error).toBeLessThan(1);
        expect.soft(await page.locator('.contact-message textarea').inputValue()).toEqual("Sample Test Message");

        // click submit
        await page.locator('[class*="submit-button"]').click();

        // verify alert message text
        let alertMsg = page.locator('[class*="everest-forms-notice"]');
        expect(await alertMsg.textContent()).toContain('Thanks for contacting us! We will be in touch with you shortly');
    });
});
