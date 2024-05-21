import { Locator, Page, expect } from "@playwright/test";

export default class DealViewPageTest {

    readonly summaryLink: Locator;
    readonly yardiLink: Locator;
    readonly inspectionLink: Locator;
    readonly offersLink: Locator;
    readonly assumptionsLink: Locator;
    readonly negotiationsLink: Locator;
    readonly headsLink: Locator;
    readonly leasingFeesLink: Locator;
    readonly legalLink: Locator;
    readonly legalFeeLink: Locator;
    readonly leaseLink: Locator;
    readonly documentsLink: Locator;
    readonly commentsLink: Locator;
    readonly conflictLogLink: Locator;
    readonly contactsLink: Locator;
    readonly commentsBtn: Locator;
    readonly exhaustBtn: Locator;
    readonly conflictBtn: Locator;


    constructor(public page: Page) {
        this.summaryLink = this.page.getByTestId('summary-sub-nav-item');
        this.yardiLink = this.page.getByTestId('yardi-sub-nav-item');
        this.inspectionLink = this.page.getByTestId('inspections-sub-nav-item');
        this.offersLink = this.page.getByTestId('offers-sub-nav-item');
        this.assumptionsLink = this.page.getByTestId('assumptions-sub-nav-item');
        this.negotiationsLink = this.page.getByTestId('negotiations-sub-nav-item');
        this.headsLink = this.page.getByTestId('heads-sub-nav-item');
        this.leasingFeesLink = this.page.getByTestId('leasing-fees-sub-nav-item');
        this.legalLink = this.page.getByTestId('legal-sub-nav-item');
        this.legalFeeLink = this.page.getByTestId('legal-fees-sub-nav-item');
        this.leaseLink = this.page.getByTestId('lease-sub-nav-item');
        this.documentsLink = this.page.getByTestId('documents-sub-nav-item');
        this.commentsLink = this.page.getByTestId('comments-sub-nav-item');
        this.conflictLogLink = this.page.getByTestId('conflict-log-sub-nav-item');
        this.contactsLink = this.page.getByTestId('contacts-sub-nav-item');
        this.commentsBtn = this.page.getByTestId('comments-toolbar-button');
        this.exhaustBtn = this.page.getByTestId('exhaust-toolbar-button');
        this.conflictBtn = this.page.getByTestId('conflict-toolbar-button');
    }

}

