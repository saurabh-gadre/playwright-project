import{test, expect} from '@playwright/test';

test.describe('Home Page Validations', () => {

    test('Open HomePage and Verify Title', async ({ page }) => {
        await page.goto("https://practice.sdetunicorns.com/");
        await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");
    });

    test('Open About Page and Verify Title', async ({ page }) => {
       await page.goto("https://practice.sdetunicorns.com/about/");
       await expect(page).toHaveTitle("About – Practice E-Commerce Site") 
    });

    test('Click Get Started Button using CSS Selector', async ({ page }) => {
        await page.goto("https://practice.sdetunicorns.com/");
        await page.locator('#get-started').scrollIntoViewIfNeeded();
        await expect(page).not.toHaveURL(/.*get-started/);
        await page.locator('#get-started').click();
        await expect(page).toHaveURL(/.*get-started/);
     });
    
     test('Verify Heading Text using Text Selector', async ({ page }) => {
        await page.goto("https://practice.sdetunicorns.com/");
        let headingText = await page.locator('text=Think different. Make Different.'); // Case Insensitive
        await expect(headingText).toBeVisible();
     });

     test('Verify Home Link using Text and CSS Selector', async ({ page }) => {
        await page.goto("https://practice.sdetunicorns.com/");
        //let homeLink = page.locator('#zak-primary-menu >> text=Home'); OR
        let homeLink = page.locator('#zak-primary-menu:has-text("Home")');
        await expect(homeLink).toBeEnabled();
     });

     test('Verify Search Button using Xpath Selector', async ({ page }) => {
        await page.goto("https://practice.sdetunicorns.com/");
        let searchBtn = page.locator('//div[@class="zak-header-actions zak-header-actions--desktop"]//a[@class="zak-header-search__toggle"]');
        await expect(searchBtn).toBeEnabled();
     })
     
     test('Verify Text for All Links', async ({ page }) => {
        const expectedLinks = [
            "Home","About","Shop","Blog","Contact","My account"
        ]
        await page.goto("https://practice.sdetunicorns.com/");
        let menuLinks = page.locator('#zak-primary-menu li');
        for await (const element of await menuLinks.elementHandles()) {
            console.log("Menu Name: ", await element.textContent());
        }
        expect(await menuLinks.allTextContents()).toEqual(expectedLinks);

        let contactText = await page.locator('#zak-primary-menu li').nth(4).textContent();  
        expect(contactText).toEqual(expectedLinks[4]);
     })
    
});
