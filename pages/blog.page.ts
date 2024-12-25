import { Page, Locator } from "@playwright/test";

class BlogPage{
    private page: Page;
    postLinks: Locator;

    constructor(page: Page){
        this.page = page;
        this.postLinks = page.locator('section[id="recent-posts-3"] >> li');
    }

    async navigate(){
         await this.page.goto("/blog/");
    }
}

export default BlogPage;