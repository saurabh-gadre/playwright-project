import { Page, Locator } from "@playwright/test";

class ContactPage{
    page: Page;
    allMenuLinks: Locator;
    nameInput: Locator;
    emailInput: Locator;
    phoneInput: Locator;
    msgTextArea: Locator;
    submitBtn: Locator;
    alertMsg: Locator;

    constructor(page: Page){
        this.page = page;
        this.allMenuLinks = page.locator('#zak-primary-menu li');
        this.nameInput = page.locator('.contact-name input');
        this.emailInput = page.locator('.contact-email input');
        this.phoneInput = page.locator('.contact-phone input');
        this.msgTextArea = page.locator('.contact-message textarea');
        this.submitBtn = page.locator('[class*="submit-button"]');
        this.alertMsg = page.locator('[class*="everest-forms-notice"]');
    }

    async navigate(){
        await this.page.goto("https://practice.sdetunicorns.com/contact/");
    }
}

export default ContactPage;