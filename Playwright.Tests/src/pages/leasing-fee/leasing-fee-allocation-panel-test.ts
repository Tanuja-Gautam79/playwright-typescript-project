import { Locator, Page } from "@playwright/test";

export default class LeasingFeeAllocationPanelTest {

    readonly updateAgenciesAndRepBtn: Locator;
    readonly scenario2RadioBtn: Locator;
    readonly applyBtn: Locator;
   

    constructor(public page: Page) {
        this.updateAgenciesAndRepBtn = this.page.locator('//span[text()=" Update Agencies and Reps "]');
        this.scenario2RadioBtn = this.page.locator('//td[text()=" Any Tenant introduced by Principal "]//preceding::mat-radio-button[1]');
        this.applyBtn = this.page.locator('//span[text()=" Apply "]');
       
    }
}