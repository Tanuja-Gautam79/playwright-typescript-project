import { Locator, Page, expect } from "@playwright/test";

export default class OfferNewPanelTest {

    readonly templateOIRadio: Locator;
    readonly templateSmartLeaseRadio: Locator;
    readonly createOfferBtn: Locator;
    readonly cancelOfferBtn: Locator;

    constructor(public page: Page) {
        this.templateOIRadio = this.page.getByText('O&I');
        this.templateSmartLeaseRadio = this.page.locator('//span[text()=" Smart Lease "]//ancestor::mat-radio-button[1]');
        this.createOfferBtn = this.page.locator('form').getByRole('button', { name: 'Create Offer' })
        this.cancelOfferBtn = this.page.getByRole('button', { name: 'Cancel' });
    }

    public async createOffer(offerType: Locator) {
        await this.page.getByText('Create a new Offer', { exact: true }).click();
        await offerType.click();
        await this.createOfferBtn.click();
    }

    public async cancelOffer() {
        await this.cancelOfferBtn.click();
    }
}
