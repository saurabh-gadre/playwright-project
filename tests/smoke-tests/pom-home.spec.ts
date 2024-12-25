import { test, expect } from '@playwright/test';
import HomePage from '../../pages/home.page';

test.describe('Home Page Validations', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate();
    });
    
    test('Click Get Started Button using CSS Selector', async ({ page }) => {
        await homePage.getStartedBtn.scrollIntoViewIfNeeded();
        await expect(page).not.toHaveURL(/.*get-started/);
        await homePage.getStartedBtn.click();
        await expect(page).toHaveURL(/.*get-started/);
    });

    test('Verify Heading Text using Text Selector', async ({ page }) => {
        await expect(await homePage.headingText).toBeVisible();
    });

    test('Verify Home Link using Text and CSS Selector', async ({ page }) => {
        await expect(await homePage.homeLink).toBeEnabled();
    });

    test('Verify Search Button using Xpath Selector', async ({ page }) => {
        await expect(await homePage.searchBtn).toBeEnabled();
    });

    test('Verify Text for All Links', async ({ page }) => {
        for await (const element of await homePage.menuLinks.elementHandles()) {
            console.log("Menu Name: ", await element.textContent());
        }
        expect(await homePage.menuLinks.allTextContents()).toEqual(homePage.expectedLinks);

        let contactText = await homePage.menuLinks.nth(4).textContent();
        expect(contactText).toEqual(homePage.expectedLinks[4]);
    });
});
