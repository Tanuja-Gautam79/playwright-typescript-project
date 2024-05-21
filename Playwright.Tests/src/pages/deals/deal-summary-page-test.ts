import { Locator, Page } from "@playwright/test";

export default class DealSummaryPageTest {

    readonly addcontactBtn: Locator;
   
    constructor(public page: Page) {
        this.addcontactBtn = this.page.getByTestId('add-contact-toolbar-button');
       
    }
}

