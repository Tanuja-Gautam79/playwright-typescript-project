import { Locator, Page } from "@playwright/test";

export default class ManageAgenciesRepPanelTest {

    readonly appointedAgenciesAddRowBtn: Locator;
    readonly agencyDropDown1: Locator;
    readonly agencyDropDown2: Locator;
    readonly agencyDropDownOpt1: Locator;
    readonly agencyDropDownOpt2: Locator;
    readonly agencyType2DropDown: Locator;
    readonly agencyType2DropDownOpt1: Locator;
    readonly agencyType2DropDownOpt2: Locator;
    readonly agentDropDown1: Locator;
    readonly sectorDropDown1: Locator;
    readonly sectorDropDown1Opt1: Locator;
    readonly agentDropDown2: Locator;
    readonly agentDropDown1Opt1: Locator;
    readonly agentDropDown2Opt1: Locator;
    readonly updateBtn: Locator;


    constructor(public page: Page) {
        this.appointedAgenciesAddRowBtn = this.page.locator('//span[text()="Appointed Agencies"]//following::span[text()=" Add Row "][1]');
        this.agencyDropDown1 = this.page.locator('//span[text()=" Manage Agencies and Reps "]//following::mat-select[1]');
        this.agencyDropDown2 = this.page.locator('//span[text()=" Manage Agencies and Reps "]//following::mat-select[5]');
        this.agencyDropDownOpt1 = this.page.locator('//span[text()=" Dexus Property Services "]');
        this.agencyDropDownOpt2 = this.page.locator('//span[text()=" JLL "]');
        this.agentDropDown1 = this.page.locator('//span[text()=" Manage Agencies and Reps "]//following::mat-select[3]');
        this.sectorDropDown1 = this.page.locator('//span[text()=" Manage Agencies and Reps "]//following::mat-select[4]');
        this.sectorDropDown1Opt1 = this.page.locator('//span[text()=" Office "]');
        this.agentDropDown2 = this.page.locator('//span[text()=" Manage Agencies and Reps "]//following::mat-select[7]');
        this.agentDropDown2Opt1 = this.page.locator('//span[text()=" Will Hamilton "]');
        this.agentDropDown1Opt1 = this.page.locator('//span[text()=" Victoria Steur "]');
        this.agencyType2DropDown = this.page.locator('//span[text()=" Manage Agencies and Reps "]//following::mat-select[6]');
        this.agencyType2DropDownOpt1 = this.page.locator('//span[text()="Primary"]');
        this.agencyType2DropDownOpt2 = this.page.locator('//span[text()="Secondary"]');
        this.updateBtn = this.page.locator('//span[text()=" Update "]');

    }
}