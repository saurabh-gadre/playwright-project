import {test, expect} from "@playwright/test"
import path from "path";
import CartPage from "../../pages/cart.page";

test.describe('Cart Test', () => {
    let cartPage: CartPage;

    test.beforeEach(async ({ page }) => {
        cartPage = new CartPage(page);
        await cartPage.navigate();
    })
    

    test('Verify File Upload in Cart Menu', async () => {
        // upload file
        const filePath = path.join(__dirname,'../../data/camera-image.png');
        await cartPage.uploadComponent().uploadFile(filePath);

        // verify success message
        const successMsg = await cartPage.uploadComponent().cartSuccessMsg.textContent();
        expect(successMsg).toEqual('File camera-image.png uploaded successfully');
    });

    test('Verify File Upload with hidden Input file element', async ({ page }) => {
        // select file
        const filePath = path.join(__dirname,'../../data/camera-image.png');

         // DOM Manipulation
         await page.evaluate(() => {
            const fileInputSelector = document.querySelector('#upfile_1');
            if(fileInputSelector)
                fileInputSelector.className = '';
        });

        // upload file
        await cartPage.uploadComponent().uploadFile(filePath);

        // verify success message
        const successMsg = await cartPage.uploadComponent().cartSuccessMsg.textContent();
        expect(successMsg).toEqual('File camera-image.png uploaded successfully');
    });
    
    test('Verify File Upload with 10 MB file Size', async () => {
        // upload file
        const filePath = path.join(__dirname,'../../data/10MB-TESTFILE.pdf');
        await cartPage.uploadComponent().uploadFile(filePath);

        await expect(cartPage.uploadComponent().cartSuccessMsg).toContainText('uploaded successfully',{timeout: 10000});
    });
});
