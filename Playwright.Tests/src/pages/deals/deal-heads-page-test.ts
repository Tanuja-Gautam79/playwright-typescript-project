import { Locator, Page } from "@playwright/test";

export default class DealHeadsPageTest {

    readonly headsSetupBtn: Locator;
    readonly viewOfferBtn: Locator;
    readonly generateDocumentBtn: Locator;

    constructor(public page: Page) {
        this.headsSetupBtn = this.page.getByTestId('heads-setup-toolbar-button');
        this.viewOfferBtn = this.page.getByTestId('view-offer-toolbar-button');
        this.generateDocumentBtn = this.page.getByTestId('generate-document-toolbar-button');
    }
}

