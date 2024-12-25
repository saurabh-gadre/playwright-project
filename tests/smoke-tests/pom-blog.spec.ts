import {test, expect} from "@playwright/test";
import BlogPage from "../../pages/blog.page";

test.describe('Blog Page Tests', () => {

    let blogPage: BlogPage;

    test.beforeEach(async ({ page }) => {
        blogPage = new BlogPage(page);
        await blogPage.navigate();    
    })

    test('Verify Blog Page Links', async ({ page }) => {

        (await blogPage.postLinks.allTextContents()).forEach(blogText => {
            blogText = blogText.trim();
            expect(blogText.length).toBeGreaterThan(10);
            console.log("Blog Text -", blogText);
        });
        expect(await blogPage.postLinks.allTextContents()).toHaveLength(5);
    })
})
