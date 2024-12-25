import {test, expect} from "@playwright/test";

test.describe('Blog Page Tests', () => {
    test('Verify Blog Page Links', async ({ page }) => {
        await page.goto("https://practice.sdetunicorns.com/blog/");

        const postLinks = page.locator('section[id="recent-posts-3"] >> li');
        (await postLinks.allTextContents()).forEach(blogText => {
            blogText = blogText.trim();
            expect(blogText.length).toBeGreaterThan(10);
        });
        expect(await postLinks.allTextContents()).toHaveLength(5);
    })
})
