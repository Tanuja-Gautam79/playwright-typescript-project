import { Locator, Page } from "@playwright/test";

export default class PropertyViewPageTest {
    readonly synopsisLink: Locator;
    readonly yardiLink: Locator;
    readonly dexusComLink: Locator;
    readonly legalLink: Locator;
    readonly assetInfoLink: Locator;
    readonly feeRefLink: Locator;
    readonly documentsLink: Locator;
    readonly contactsLink: Locator;
    readonly commentsLink: Locator;

    constructor(public page: Page) {
        this.synopsisLink = this.page.getByTestId('synopsis-sub-nav-item');
        this.yardiLink = this.page.getByTestId('yardi-sub-nav-item');
        this.dexusComLink = this.page.getByTestId('public-website-sub-nav-item');
        this.legalLink = this.page.getByTestId('legal-sub-nav-item');
        this.assetInfoLink = this.page.getByTestId('asset-information-sub-nav-item');
        this.feeRefLink = this.page.getByTestId('fee-reference-sub-nav-item');
        this.documentsLink = this.page.getByTestId('documents-sub-nav-item');
        this.contactsLink = this.page.getByTestId('contacts-sub-nav-item');
        this.commentsLink = this.page.getByTestId('comments-sub-nav-item');

    }
}