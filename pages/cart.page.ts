import { Page } from "@playwright/test";
import UploadComponent from "./upload.comp";

class CartPage{
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    uploadComponent(){
        return new UploadComponent(this.page);
    } 

    async navigate(){
        await this.page.goto('https://practice.sdetunicorns.com/cart/');
    }
}

export default CartPage;