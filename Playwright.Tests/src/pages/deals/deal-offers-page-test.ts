import { Locator, Page } from "@playwright/test";

export default class DealOffersPageTest {

    readonly offerApprovalBtn: Locator;
    readonly viewOfferBtn: Locator;
    readonly viewAssumptionBtn: Locator;
    readonly generateDocumentBtn: Locator;

    constructor(public page: Page) {
        this.offerApprovalBtn = this.page.getByTestId('offer-approval-toolbar-button');
        this.viewOfferBtn = this.page.getByTestId('view-offer-toolbar-button');
        this.viewAssumptionBtn = this.page.getByTestId('view-assumptions-toolbar-button');
        this.generateDocumentBtn = this.page.getByTestId('generate-document-toolbar-button');
    }
}

