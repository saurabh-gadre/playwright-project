import {test, expect} from "@playwright/test"
import path from "path";

test.describe('Cart Test', () => {
    test('Verify File Upload in Cart Menu', async ({ page }) => {
        
        await page.goto('https://practice.sdetunicorns.com/cart/');

        // select file
        const filePath = path.join(__dirname,'../data/camera-image.png');
        await page.setInputFiles('#upfile_1',filePath);

        // upload file
        await page.locator('#upload_1').scrollIntoViewIfNeeded();
        await page.locator('#upload_1').click();

        // verify success message
        const successMsg = await page.locator('.file_messageblock_fileheader_label').textContent();
        expect(successMsg).toEqual('File camera-image.png uploaded successfully');
    });

    test('Verify File Upload with hidden Input file element', async ({ page }) => {
        
        await page.goto('https://practice.sdetunicorns.com/cart/');

        // select file
        const filePath = path.join(__dirname,'../data/camera-image.png');

         // DOM Manipulation
         await page.evaluate(() => {
            const fileInputSelector = document.querySelector('#upfile_1');
            if(fileInputSelector)
                fileInputSelector.className = '';
        });

        await page.setInputFiles('#upfile_1',filePath);

        // upload file
        await page.locator('#upload_1').scrollIntoViewIfNeeded();
        await page.locator('#upload_1').click();

        // verify success message
        const successMsg = await page.locator('.file_messageblock_fileheader_label').textContent();
        expect(successMsg).toEqual('File camera-image.png uploaded successfully');
    });
    
    test('Verify File Upload with 10 MB file Size', async ({ page }) => {
        
        await page.goto('https://practice.sdetunicorns.com/cart/');

        // select file
        const filePath = path.join(__dirname,'../data/10MB-TESTFILE.pdf');
        await page.setInputFiles('#upfile_1',filePath);

        // upload file
        await page.locator('#upload_1').scrollIntoViewIfNeeded();
        await page.locator('#upload_1').click();

        // hardcoded wait
        //await page.waitForTimeout(5000);

        // verify success message

        // conditional wait
        // await page.locator('.file_messageblock_fileheader_label').waitFor({state: 'visible', timeout: 10000});
        // expect(await page.locator('.file_messageblock_fileheader_label').textContent()).toContain('uploaded successfully');

        // assertion wait
        await expect(page.locator('.file_messageblock_fileheader_label')).toContainText('uploaded successfully',{timeout: 10000});
    });
});
