import {Page, Locator} from '@playwright/test';

class UploadComponent{
    private page: Page;
    standardImgePath: string;
    cartFileUploadInput: string;
    cartSuccessMsg: Locator;
    cartSubmitBtn: Locator;
   
    constructor(page: Page){
        this.page = page;
        this.standardImgePath = "../data/camera-image.png";
        this.cartFileUploadInput = "#upfile_1";
        this.cartSuccessMsg =  page.locator('.file_messageblock_fileheader_label');
        this.cartSubmitBtn = page.locator('#upload_1')
    }

    async uploadFile(filePath: string){
        await this.page.setInputFiles(this.cartFileUploadInput,filePath);
        await this.cartSubmitBtn.scrollIntoViewIfNeeded();
        await this.cartSubmitBtn.click();
    }
}

export default UploadComponent;