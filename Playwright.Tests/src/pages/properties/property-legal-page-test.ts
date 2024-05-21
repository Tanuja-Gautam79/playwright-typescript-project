import { Locator, Page } from "@playwright/test";

export default class PropertyLegalPageTest {
    readonly buildingType: Locator;
    readonly landlord: Locator;
    readonly trust: Locator;
    readonly tableRow: Locator;
    readonly noticeDetails: Locator;

    constructor(public page: Page) {
        this.buildingType = this.page.locator('//td[text()=" Building type "]//following::td[1]');
        this.landlord = this.page.locator('//td/span[text()="Landlord"]//following::td[1]');
        this.trust = this.page.locator('//td/span[text()="Trust"]//following::td[1]');
        this.tableRow = this.page.locator('.grid-table-container.compact tbody tr');
        this.noticeDetails = this.page.locator('//mat-label[text()="Notice Details"]//following::div[1]');

    }

}