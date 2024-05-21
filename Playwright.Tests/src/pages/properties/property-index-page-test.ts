import { Locator, Page } from "@playwright/test";
import ReadTestData from '../../utils/read-test-data';

const readTestData = new ReadTestData();

export default class PropertyIndexPageTest {
   
    readonly allBtn: Locator;
    readonly activeBtn: Locator;
    readonly soldBtn: Locator;
    readonly publishedBtn: Locator;
    readonly notPublishedBtn: Locator;
    readonly notVerifiedBtn: Locator;
    readonly propertyIdSearchInput: Locator;
    readonly propertyNameSearchInput: Locator;

    constructor(public page: Page) {
             
        this.activeBtn = this.page.getByRole('button', { name: 'Active' });
        this.soldBtn = this.page.getByRole('button', { name: 'Sold' });
        this.publishedBtn = this.page.getByRole('button', { name: 'Published', exact: true });
        this.notPublishedBtn = this.page.getByRole('button', { name: 'Not Published' });
        this.notVerifiedBtn = this.page.getByRole('button', { name: 'Not Verified' });
        this.propertyIdSearchInput = this.page.locator('app-ag-text-filter input.ag-input-field-input').first();
        this.propertyNameSearchInput = this.page.locator('app-ag-text-filter input.ag-input-field-input').nth(2);
    }

    public async searchByPropertyName(testDataFile: string) {
        const testdata = await readTestData.readJsonFile(testDataFile);
        await this.propertyNameSearchInput.fill(`${testdata.propertyName}`);
        await this.page.click('.ag-cell-value a');

    }

    public async getPropertyName(testDataFile: string) {
        const testdata = await readTestData.readJsonFile(testDataFile);
        return testdata.propertyName;
    }
}