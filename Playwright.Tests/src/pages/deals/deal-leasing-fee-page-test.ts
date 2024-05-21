import { Locator, Page } from "@playwright/test";

export default class DealLeasingFeePageTest {

    readonly calculateFeesBtn: Locator;
   
    constructor(public page: Page) {
        this.calculateFeesBtn = this.page.getByTestId('calculate-fees-toolbar-button');
       
    }
}

