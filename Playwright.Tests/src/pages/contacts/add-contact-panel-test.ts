import { Locator, Page } from "@playwright/test";

export default class AddContactPanelTest {

    readonly contactInput: Locator;
    readonly contactOption1: Locator;
    readonly contactTypeOpt1: Locator;
    readonly contactTypeOpt2: Locator;
    readonly contactTypeOpt3: Locator;
    readonly contactTypeOpt4: Locator;
    readonly contactTypeOpt5: Locator;
    readonly contactTypeOpt6: Locator;
    readonly contactTypeOpt7: Locator;
    readonly contactTypeOpt8: Locator;
    readonly contactTypeOpt9: Locator;
    readonly appFormAddContactBtn: Locator;


    constructor(public page: Page) {
        this.contactInput = this.page.getByTestId('contact-selector-auto-contact-mat-input')
        this.contactOption1 = this.page.getByTestId('contact-option1');
        this.contactTypeOpt1 = this.page.getByTestId('accounts-payable-option');
        this.contactTypeOpt2 = this.page.getByTestId('decision-maker-option');
        this.contactTypeOpt3 = this.page.getByTestId('invoice-recipient-option');
        this.contactTypeOpt4 = this.page.getByTestId('operational-contact-option');
        this.contactTypeOpt5 = this.page.getByTestId('tenant-fitout-contact-option');
        this.contactTypeOpt6 = this.page.getByTestId('tenant-leasing-contact-option');
        this.contactTypeOpt7 = this.page.getByTestId('tenant-signing-contact-option');
        this.contactTypeOpt8 = this.page.getByTestId('tenant-solicitors-contact-option');
        this.contactTypeOpt9 = this.page.getByTestId('facilities-support-option');
        this.appFormAddContactBtn = this.page.locator('app-contact-form').getByTestId('add-existing-contact-submit-mat-raised-button');

    }
}