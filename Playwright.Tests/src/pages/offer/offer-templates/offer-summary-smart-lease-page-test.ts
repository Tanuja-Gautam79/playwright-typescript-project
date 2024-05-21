import { Locator, Page, expect } from "@playwright/test";

export default class OfferSummarySmartLeasePageTest {

    readonly tenantAbnInput: Locator;
    readonly abnLookupButton: Locator;
    readonly lookupTypeRadio: Locator;
    readonly searchValueInput: Locator;
    readonly searchButton: Locator;
    readonly abnNumberRadio: Locator;
    readonly abnLookupSelectBtn: Locator;
    readonly premisesTypeDropdown: Locator;
    readonly premisesTypeDropdownOpt1: Locator;
    readonly premisesTypeDropdownOpt2: Locator;
    readonly termYearInput: Locator;
    readonly termMonthsInput: Locator;
    readonly expiryDateInput: Locator;
    readonly expiryDateBtn: Locator
    readonly grossBaseRentInput: Locator;
    readonly rentPaybleRadioBtn: Locator;
    readonly existingFitoutRadioBtn: Locator;
    readonly existingFitoutWithWorksRadioBtn: Locator;
    readonly newFitoutRadioBtn: Locator;
    readonly fitoutContributionRadioBtn: Locator;
    readonly securityAmountInput: Locator;
    readonly bankGuaranteeRadioBtn: Locator;
    readonly prepaidRentRadioBtn: Locator;
    readonly eGuaranteeRadioBtn: Locator;
    readonly amenityFeeIcon: Locator;
    readonly movingOutSelect: Locator;
    readonly movingOutSelectOpt1: Locator;
    readonly movingOutSelectOpt2: Locator;
    readonly movingOutSelectOpt3: Locator;
    readonly movingOutSelectOpt4: Locator;
    readonly movingOutSelectOpt5: Locator;
    readonly movingOutSelectOpt6: Locator;
    readonly earlyAccessYesRadioBtn: Locator;
    readonly earlyAccessNoRadioBtn: Locator;
    readonly redevelopmentYesRadioBtn: Locator;
    readonly redevelopmentNoRadioBtn: Locator;
    readonly tenantSigningOptionsRadioBtn1: Locator;
    readonly tenantSigningOptionsRadioBtn2: Locator;
    readonly tenantSigningOptionsRadioBtn3: Locator;
    readonly addContactBtn: Locator;
    readonly contactInput: Locator;
    readonly contactOption1: Locator;
    readonly appFormAddContactBtn: Locator;
    readonly landlordGenerateTextBtn: Locator;
    readonly buildingServicesGenerateTextBtn: Locator;
    readonly rentPayableGenerateTextBtn: Locator;
    readonly carParkingGenerateTextBtn: Locator;
    readonly storageLicenseGenerateTextBtn: Locator;
    readonly fitoutGenerateTextBtn: Locator;
    readonly rentReductionGenerateTextBtn: Locator;
    readonly rentFeeGenerateTextBtn: Locator;
    readonly cashPaymentGenerateTextBtn: Locator;
    readonly securityGenerateTextBtn: Locator;
    readonly sustainabilityGenerateTextBtn: Locator;
    readonly limitationOfLiabilityGenerateTextBtn: Locator;
    readonly movingOutGenerateTextBtn: Locator;
    readonly exclusionProvisionGenerateTextBtn: Locator;
    readonly earlyAccessGenerateTextBtn: Locator;
    readonly redevelopmentGenerateTextBtn: Locator;
    readonly saveBtn: Locator;

    constructor(public page: Page) {

        this.tenantAbnInput = this.page.locator('//mat-label[text()="Tenant ABN"]//ancestor::div/input');
        this.abnLookupButton = this.page.locator('//button/span[text()=" ABN Lookup "]');
        this.lookupTypeRadio = this.page.locator('//span[text()=" Name "]');
        this.searchValueInput = this.page.getByLabel('Search Value *');
        this.searchButton = this.page.locator('button:has-text("Search")');
        this.abnNumberRadio = this.page.locator('//mat-cell[text()=" 58725115040 "]//preceding::mat-radio-button[1]');
        this.abnLookupSelectBtn = this.page.getByRole('button', { name: 'Select' });
        this.premisesTypeDropdown = this.page.locator('//span[text()=" Premises "]//following::mat-select[1]');
        this.premisesTypeDropdownOpt1 = this.page.locator('//span[text()=" Premises "]//following::mat-option[1]');
        this.premisesTypeDropdownOpt2 = this.page.locator('//span[text()=" Premises "]//following::mat-option[2]');
        this.termYearInput = this.page.getByTestId('term-year-numeric-textbox');
        this.termMonthsInput = this.page.getByTestId('term-month-numeric-textbox');
        this.expiryDateInput = this.page.locator('//input[@formcontrolname="ExpiryDate"]');
        this.expiryDateBtn = this.page.locator('//i[@mattooltip="Calculate the expiry date by adding term to the lease commencement date"]');
        this.grossBaseRentInput = this.page.locator('//span[text()=" Rent "]//following::input[2]');
        this.rentPaybleRadioBtn = this.page.locator('//mat-label[text()="Rent Payable"]//following::span[text()=" Monthly "]');
        this.existingFitoutRadioBtn = this.page.locator('//span[text()=" Existing Fitout "]');
        this.existingFitoutWithWorksRadioBtn = this.page.locator('//span[text()=" Existing Fitout (with works) "]');
        this.newFitoutRadioBtn = this.page.locator('//span[text()=" New Fitout "]');
        this.fitoutContributionRadioBtn = this.page.locator('//span[text()=" Fitout Contribution "]')
        this.securityAmountInput = this.page.getByTestId('bank-guarantee-amount-numeric-textbox');
        this.bankGuaranteeRadioBtn = this.page.locator('//span[text()=" Bank Guarantee "]');
        this.prepaidRentRadioBtn = this.page.locator('//span[text()=" Pre-Paid Rent "]');
        this.eGuaranteeRadioBtn = this.page.locator('//span[text()=" eGuarantee "]');
        this.amenityFeeIcon = this.page.locator('//i[contains(@mattooltip, "Calculate the Amenity Fee per annum")]');
        this.movingOutSelect = this.page.locator('//mat-select[@formcontrolname="MovingOutBlurbOptions"]');
        this.movingOutSelectOpt1 = this.page.locator('//span[text()=" Full Make Good "]');
        this.movingOutSelectOpt2 = this.page.locator('//span[text()=" Make Good back to a Tenancy Condition Report "]');
        this.movingOutSelectOpt3 = this.page.locator('//span[text()=" Limited/Reduced Make Good "]');
        this.movingOutSelectOpt4 = this.page.locator('//span[text()=" Waiver of Make Good Obligations "]');
        this.movingOutSelectOpt5 = this.page.locator('//span[text()=" Make Good Payment at the Election of the Landlord (Average of 3 Quotes) "]');
        this.earlyAccessYesRadioBtn = this.page.locator('//span[text()=" Early Access "]//following::span[text()=" Yes "][1]');
        this.earlyAccessNoRadioBtn = this.page.locator('//span[text()=" Early Access "]//following::span[text()=" No "][1]');
        this.redevelopmentYesRadioBtn = this.page.locator('//span[text()=" Redevelopment "]//following::span[text()=" Yes "][1]');
        this.redevelopmentNoRadioBtn = this.page.locator('//span[text()=" Redevelopment "]//following::span[text()=" No "][1]');
        this.tenantSigningOptionsRadioBtn1 = this.page.locator('//span[text()=" Under Section 127 of the Corporation Act "]');
        this.tenantSigningOptionsRadioBtn2 = this.page.locator('//span[text()=" Under Power of Attorney "]');
        this.tenantSigningOptionsRadioBtn3 = this.page.locator('//span[text()=" Unsure "]');
        this.addContactBtn = this.page.locator('//span[text()=" Add Contact "]');
        this.contactInput = this.page.getByRole('combobox', { name: 'Contact' })
        this.contactOption1 = this.page.getByText('bina shrshr');
        this.appFormAddContactBtn = this.page.locator('app-contact-form').getByRole('button', { name: 'Add Contact' });
        this.landlordGenerateTextBtn = this.page.getByTestId('landlord-generate-text-button');
        this.buildingServicesGenerateTextBtn = this.page.getByTestId('building-services-generate-text-button');
        this.rentPayableGenerateTextBtn = this.page.getByTestId('rent-payable-generate-text-button');
        this.carParkingGenerateTextBtn = this.page.getByTestId('car-parking-generate-text-button');
        this.storageLicenseGenerateTextBtn = this.page.getByTestId('storage-licence-generate-text-button');
        this.fitoutGenerateTextBtn = this.page.getByTestId('fitout-generate-text-button');
        this.rentReductionGenerateTextBtn = this.page.getByTestId('rent-reduction-generate-text-button');
        this.rentFeeGenerateTextBtn = this.page.getByTestId('rent-free-generate-text-button');
        this.cashPaymentGenerateTextBtn = this.page.getByTestId('cash-payment-generate-text-button');
        this.securityGenerateTextBtn = this.page.getByTestId('security-generate-text-button');
        this.sustainabilityGenerateTextBtn = this.page.getByTestId('sustainability-generate-text-button');
        this.limitationOfLiabilityGenerateTextBtn = this.page.getByTestId('limitation-of-liability-generate-text-button');
        this.movingOutGenerateTextBtn = this.page.getByTestId('moving-out-generate-text-button');
        this.exclusionProvisionGenerateTextBtn = this.page.getByTestId('exclusion-provision-generate-text-button');
        this.earlyAccessGenerateTextBtn = this.page.getByTestId('early-access-generate-text-button');
        this.redevelopmentGenerateTextBtn = this.page.getByTestId('redevelopment-generate-text-button');
        this.saveBtn = this.page.getByTestId('save-bottom-bar-button');
    }

    public async selectTenantABN() {
        await this.abnLookupButton.click();
        await this.lookupTypeRadio.click();
        await this.searchValueInput.fill('test');
        await this.searchButton.click();
        await this.abnNumberRadio.click();
        await this.abnLookupSelectBtn.click();
    }

    public async selectPremisesTypeDropdown(dropdownOption: Locator) {
        await this.premisesTypeDropdown.click();
        await dropdownOption.click();
    }

    public async enterTerm(termYear: string, termMonths: string) {
        await this.termYearInput.click({ clickCount: 3 });
        await this.termYearInput.press('Backspace');
        await this.termYearInput.type(termYear);
        await this.termMonthsInput.click({ clickCount: 3 });
        await this.termMonthsInput.press('Backspace');
        await this.termMonthsInput.type(termMonths);
        await this.expiryDateBtn.click();

    }

    public async enterGrossBaseRentAndSelectRentPayble(baseRent: number) {
        await this.grossBaseRentInput.click();
        await this.grossBaseRentInput.press('Control+A');
        await this.grossBaseRentInput.press('Backspace');
        await this.grossBaseRentInput.type(baseRent.toString());
        await this.rentPaybleRadioBtn.click();

    }

    public async addTenantContact(contactName: string, contactType: string) {
        await this.addContactBtn.click();
        await this.contactInput.fill('test');
        const contactOption = this.page.getByText(`${contactName}`)
        await contactOption.click();
        const contactTypeCheckBox = await this.page.$(`//div[contains(@class, 'custom-checkbox-label') and text()='${contactType}']`);
        if (contactTypeCheckBox) {
            await contactTypeCheckBox.click();
        } else {
            console.error(`Checkbox with text '${contactType}' is not found.`);
        }
        await this.appFormAddContactBtn.click();
    }

    public async generateAllText() {
        await this.landlordGenerateTextBtn.click();
        await this.buildingServicesGenerateTextBtn.click();
        await this.rentPayableGenerateTextBtn.click();
        await this.carParkingGenerateTextBtn.click();
        await this.storageLicenseGenerateTextBtn.click();
        await this.fitoutGenerateTextBtn.click();
        await this.rentReductionGenerateTextBtn.click();
        await this.rentFeeGenerateTextBtn.click();
        await this.cashPaymentGenerateTextBtn.click();
        await this.securityGenerateTextBtn.click();
        await this.sustainabilityGenerateTextBtn.click();
        await this.limitationOfLiabilityGenerateTextBtn.click();
        await this.movingOutGenerateTextBtn.click();
        await this.exclusionProvisionGenerateTextBtn.click();
        await this.earlyAccessGenerateTextBtn.click();
        await this.redevelopmentGenerateTextBtn.click();
        await this.saveBtn.click();
    }
}
