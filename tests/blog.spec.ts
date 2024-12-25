import {test, expect} from "@playwright/test";

test.describe('Blog Page Tests', () => {
    test('Verify Blog Page Links', async ({ page }) => {
        await page.goto("https://practice.sdetunicorns.com/blog/");

        let postLinks = page.locator('section[id="recent-posts-3"] >> li');
        (await postLinks.allTextContents()).forEach(blogText => {
            blogText = blogText.trim();
            expect(blogText.length).toBeGreaterThan(10);
            console.log("Blog Text -", blogText);
        });
        expect(await postLinks.allTextContents()).toHaveLength(5);
    })
})
