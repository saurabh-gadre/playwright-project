import { test, expect, APIResponse } from "@playwright/test";
import ContactPage from "../../pages/contact.page";
import APIController from "../../controllers/api.controller";

test.describe('Contact Page Tests', () => {
    let contactPage: ContactPage;
    let person: APIResponse;
    const apiController = APIController;

    test.beforeAll(async () => {
        await apiController.init();
        // get User
        person = await apiController.getUser();

        // create New User
        const postResBody = await apiController.createUserTodo();
        // eslint-disable-next-line no-console
        console.log('Post Response -', postResBody);
    });


    test.beforeEach(async ({ page }) => {
        contactPage = new ContactPage(page);
        await contactPage.navigate();
    });

    test('Verify Contact Page Form Submission', async () => {
        // fill form fields
        await contactPage.fillFormDetails(
            person['name'],
            person['email'],
            person['phone'],
            person['company']['catchPhrase'],
        );
        await contactPage.submitForm();

        // verify alert message text
        const alertMsg = await contactPage.alertMsg;
        expect(await alertMsg.textContent()).toContain('Thanks for contacting us! We will be in touch with you shortly');
    });

    test.skip('Verify Contact Page Form Submission - hardcoded field values', async () => {
        // fill form fields
        await contactPage.fillFormDetails('John Doe', 'john.doe@testmail.com', '012-24443-4322', 'Sample Test Message');
        expect.soft(await contactPage.msgTextArea.inputValue()).toEqual("Sample Test Message");
        await contactPage.submitForm();

        // verify alert message text
        const alertMsg = await contactPage.alertMsg;
        expect(await alertMsg.textContent()).toContain('Thanks for contacting us! We will be in touch with you shortly');
    });
});


