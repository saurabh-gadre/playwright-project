import { test, expect } from "@playwright/test";
import HomePage from "../../pages/home.page"
import ContactPage from "../../pages/contact.page";

test.describe('Contact Page Tests', () => {
    let contactPage: ContactPage;

    test.beforeEach(async ({ page }) => {
        contactPage = new ContactPage(page);
        await contactPage.navigate();
    })


    test('Verify Contact Page Form Submission', async ({ page }) => {
        // fill form fields
        await contactPage.fillFormDetails('John Doe','john.doe@testmail.com','012-24443-4322','Sample Test Message');
        expect.soft(await contactPage.msgTextArea.inputValue()).toEqual("Sample Test Message");
        await contactPage.submitForm();

        // verify alert message text
        let alertMsg = await contactPage.alertMsg;
        expect(await alertMsg.textContent()).toContain('Thanks for contacting us! We will be in touch with you shortly');
    });
});


