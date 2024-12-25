import { Page, Locator } from "@playwright/test";

class HomePage {
    page: Page;
    getStartedBtn: Locator;
    headingText: Locator;
    homeLink: Locator;
    searchBtn: Locator;
    menuLinks: Locator;
    expectedLinks: string[];

    constructor(page: Page){
        this.page = page;
        this.getStartedBtn = page.locator('#get-started');
        this.headingText = page.locator('text=Think different. Make Different.');
        this.homeLink = page.locator('#zak-primary-menu:has-text("Home")');
        this.searchBtn = page.locator('//div[@class="zak-header-actions zak-header-actions--desktop"]//a[@class="zak-header-search__toggle"]');
        this.menuLinks = page.locator('#zak-primary-menu li');

        this.expectedLinks = [
            "Home", "About", "Shop", "Blog", "Contact", "My account"
        ];
    }

    async navigate(){
        await this.page.goto("/");
    }
}

export default HomePage;