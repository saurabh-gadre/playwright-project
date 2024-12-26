/* eslint-disable @typescript-eslint/no-unused-vars */
import {  chromium, FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig) {
    const browser = chromium.launch();
    const page = await (await browser).newPage();
    await page.goto('https://practice.sdetunicorns.com/my-account');
    await page.context().storageState({path: 'noLoggedInState.json'});

    await page.locator('#username').fill('practiceuser1');
    await page.locator('#password').fill('PracticePass1!');
    await page.locator('[name="login"]').click();   

    await page.context().storageState({path: 'loggedInState.json'});
    (await browser).close();
}

export default globalSetup;