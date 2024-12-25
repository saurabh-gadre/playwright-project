import { Page, Locator, expect } from "@playwright/test";

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

    async fillFormDetails(name: string, email: string, phone: string, msg: string) {
        await this.nameInput.scrollIntoViewIfNeeded();
        await this.nameInput.first().fill(name);
        await this.emailInput.fill(email);
        await this.phoneInput.fill(phone);
        await this.msgTextArea.fill(msg);
    }

    async submitForm(){
        await this.submitBtn.click();
    }
}

export default ContactPage;