import { Locator, Page } from "@playwright/test";
import ReadTestData from '../../utils/read-test-data';

const readTestData = new ReadTestData();

export default class DealIndexPageTest {
    readonly newDealBtn: Locator;
    readonly addRenewalBtn: Locator;
    readonly allBtn: Locator;
    readonly activeBtn: Locator;
    readonly onBoardedBtn: Locator;
    readonly exhaustedBtn: Locator;
    readonly expiredBtn: Locator;
    readonly dealIdSearchinput: Locator;

    constructor(public page: Page) {

        this.newDealBtn = this.page.getByTestId('new-deal-toolbar-button');
        this.addRenewalBtn = this.page.getByTestId('add-renewal-toolbar-button');
        this.allBtn = this.page.getByTestId('mat-button-toggle-10-button');
        this.activeBtn = this.page.getByTestId('mat-button-toggle-11-button');
        this.onBoardedBtn = this.page.getByTestId('mat-button-toggle-12-button');
        this.exhaustedBtn = this.page.getByTestId('mat-button-toggle-13-button');
        this.expiredBtn = this.page.getByTestId('mat-button-toggle-14-button');
        this.dealIdSearchinput = this.page.locator('app-ag-text-filter input.ag-input-field-input').first();
    }

    public async selectDealFromTable(testDataFile: string) {
        const testdata = await readTestData.readJsonFile(testDataFile);
        await this.dealIdSearchinput.fill(`${testdata.dealNumber}`);
        await this.page.click(`text=${testdata.dealNumber}`);

    }
}