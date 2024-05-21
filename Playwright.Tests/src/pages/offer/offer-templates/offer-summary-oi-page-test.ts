import { Locator, Page, expect } from "@playwright/test";

export default class OfferSummaryOiPageTest {
    readonly item1Link: Locator;
    readonly item1TrustInput: Locator;
    readonly item2Link: Locator;
    readonly item2PremisesSuiteCell: Locator;
    readonly item2PremisesInput: Locator;
    readonly item2PremisesAreaInput: Locator;
    readonly item2PremisesAreaWarningIcon: Locator;
    readonly item2PremisesTypeWarningIcon: Locator;
    readonly item2PremisesGenerateTextBox: Locator;
    readonly item2AreaGenerateTextBox: Locator;
    readonly item2PremisesTypeDropdown: Locator;
    readonly item2PremisesTypeDropdownOpt1: Locator;
    readonly item2PremisesTypeDropdownOpt2: Locator;
    readonly item2PremisesEditBtn: Locator;
    readonly leasedPremisesApplyBtn: Locator;
    readonly item3Link: Locator;
    readonly item3TermYearInput: Locator;
    readonly item3TermYearWarningIcon: Locator;
    readonly item3TermMonthsInput: Locator;
    readonly item3TermMonthsWarningIcon: Locator;
    readonly item3LeaseCommencementDateInput: Locator;
    readonly item3LeaseCommencementDateWarningIcon: Locator;
    readonly item3LeaseCommencingGenerateTextBox: Locator;
    readonly item4Link: Locator;
    readonly item4ExpiryDateInput: Locator;
    readonly item4ExpiryDateWarninIcon: Locator;
    readonly expiryDateBtn: Locator;
    readonly item5Link: Locator;
    readonly item5PremisesCell: Locator;
    readonly item5RentPremisesAreaInput: Locator;
    readonly item5BaseRentInput: Locator;
    readonly item5BaseRentPaInput: Locator;
    readonly item5RentGenerateTextBox: Locator;
    readonly item5ParkingGenerateTextBox: Locator;
    readonly item5RentCommencementDateInput: Locator;
    readonly item5RentPremisesAreaWarningIcon: Locator;
    readonly item5RentPremisesBaseRentWarningIcon: Locator;
    readonly item5RentCommencementDateWarninIcon: Locator;
    readonly calculateRentCommencementDateBtn: Locator;
    readonly item6link: Locator;
    readonly item7Link: Locator;
    readonly item8Link: Locator;
    readonly item9Link: Locator;
    readonly item10Link: Locator;
    readonly item10PremisesCleaningChargesInput: Locator;
    readonly item10PremisesCleaningChargesPaInput: Locator;
    readonly item10BuildingCleaningChargesInput: Locator;
    readonly item10BuildingCleaningChargesPaInput: Locator;
    readonly item10CleaningChargesGenerateTextBox: Locator;
    readonly calculatePremisesCleaningChargesPaBtn: Locator;
    readonly calculateBuildingCleaningChargesPaBtn: Locator;
    readonly item11Link: Locator;
    readonly item20MakeGoodClauseDropDown: Locator;
    readonly item20MakeGoodClauseDropDownOpt1: Locator;
    readonly item20MakeGoodClauseDropDownOpt2: Locator;
    readonly item20MakeGoodClauseDropDownOpt3: Locator;
    readonly item20MakeGoodClauseDropDownOpt4: Locator;
    readonly item20MakeGoodClauseDropDownOpt5: Locator;
    readonly item20MakeGoodClauseDropDownOpt6: Locator;
    readonly item20MakeGoodClauseDropDownOpt7: Locator;
    readonly item20MakeGoodClauseDropDownOpt8: Locator;
    readonly item20NoticePeriodInput: Locator;
    readonly item20NoticePeriodWarningIcon: Locator;
    readonly item20MakeGoodAmtInput: Locator;
    readonly item20RedecorationFeeInput: Locator;
    readonly item20MakeGoodGenerateTextBox: Locator;
    readonly item21LeasingDepositDropDown: Locator;
    readonly item21LeasingDepositDropDownOpt1: Locator;
    readonly item21LeasingDepositDropDownOpt2: Locator;
    readonly item21LeasingDepositDropDownOpt3: Locator;
    readonly bindingOfferToggle: Locator;
    readonly bindingOfferToggleInput: Locator;
    readonly corporateTenantInput: Locator;
    readonly governmentTenant: Locator;
    readonly individualTenant: Locator;
    readonly propertyMgrContactDetailNoRadioBtn: Locator;
    readonly propertyMgrContactDetailNoInput: Locator
    readonly propertyMgrContactDetailYesRadioBtn: Locator;
    readonly propertyMgrContactDetailYesInput: Locator;
    readonly headLandlordNoRadioBtn: Locator;
    readonly headLandlordNoInput: Locator;
    readonly headLandlordYesRadioBtn: Locator;
    readonly headLandlordAbnInput: Locator;
    readonly landlordNoticeAttentionInput: Locator;
    readonly landlordHeadLeaseInput: Locator;
    readonly headLandlordNoticeDetailsEditButton: Locator;
    readonly headLandlordNoticeDetails: Locator;
    readonly tenantAbnInput: Locator;
    readonly tenantAbnWarningIcon: Locator;
    readonly tenantInput: Locator;
    readonly tenantCompanySecretaryInput: Locator;
    readonly tenantNoticeDetailsEditBtn: Locator;
    readonly editRichText: Locator;
    readonly headLandlordNoticeDetailsBody: Locator;
    readonly noticeDetailsTxt: Locator;
    readonly abnLookupButton: Locator;
    readonly lookupTypeRadio: Locator;
    readonly searchValueInput: Locator;
    readonly searchButton: Locator;
    readonly abnNumberRadio: Locator;
    readonly abnLookupSelectBtn: Locator;
    readonly landlordGenerateTextBtn: Locator;
    readonly termCommencingGenerateTextBtn: Locator;
    readonly premisesGenerateTextBtn: Locator;
    readonly areaGenerateTextBtn: Locator;
    readonly rentGenerateTextBtn: Locator;
    readonly parkingGenerateTextBtn: Locator;
    readonly cleaningChargesGenerateTextBtn: Locator;
    readonly sustainabilityGenerateTextBtn: Locator;
    readonly makeGoodGenerateTextBtn: Locator;
    readonly otherChargesGenerateTextBtn: Locator;
    readonly otherMattersGenerateTextBtn: Locator;
    readonly validationWarningList: Locator;
    readonly standardBankGuaranteeNoRadioBtn: Locator;
    readonly standardBankGuaranteeNoInput: Locator;
    readonly tenantGovEntityNoRadioBtn: Locator;
    readonly tenantGovEntityNoInput: Locator;
    readonly bankGuaranteeReductionNoRadioBtn: Locator;
    readonly bankGuaranteeReductionNoInput: Locator;
    readonly additionalBankGuaranteeNoRadioBtn: Locator;
    readonly additionalBankGuaranteeNoInput: Locator;
    readonly eGuaranteeNoRadioBtn: Locator;
    readonly eGuaranteeNoInput: Locator;
    readonly optNewReleaseNoRadioBtn: Locator;
    readonly optNewReleaseNoInput: Locator;
    readonly retailLeaseActNoRadioBtn: Locator;
    readonly retailLeaseActNoInput: Locator;
    readonly permittedUseGenCommOfficesRadioBtn: Locator;
    readonly permittedUseGenCommOfficesInput: Locator;
    readonly transferDefaultClauseRadioBtn: Locator;
    readonly transferDefaultClauseInput: Locator;
    readonly landloardGenerateTextBox: Locator;
    readonly premisesInput: Locator;
    readonly noticeDetailsParagraph: Locator;
    readonly saveBtn: Locator;

    constructor(public page: Page) {
        this.item1TrustInput = this.page.getByTestId('trust-input');
        this.item2Link = this.page.getByTestId('item-2-sticky-page-nav-item');
        this.item2PremisesSuiteCell = this.page.locator('//mat-table//following::mat-header-cell[text()=" Suite "]//following::mat-cell[1]')
        this.item2PremisesInput = this.page.getByTestId('premise1-input');
        this.item2PremisesGenerateTextBox = this.page.getByTestId('premises-generate-text-box');
        this.item2PremisesAreaInput = this.page.getByTestId('premise1-area-sqm-input');
        this.item2PremisesAreaWarningIcon = this.page.getByTestId('premise1-area-sqm-warning-icon');
        this.item2PremisesTypeWarningIcon = this.page.getByTestId('premise1-metric-type-dropdown-warning-icon');
        this.item2PremisesTypeDropdown = this.page.getByTestId('premise1-metric-type-dropdown');
        this.item2PremisesTypeDropdownOpt1 = this.page.getByTestId('premise1-metric-type-surveyed-option');
        this.item2PremisesTypeDropdownOpt2 = this.page.getByTestId('premise1-metric-type-estimated-option');
        this.item2PremisesEditBtn = this.page.getByTestId('premises-generate-text-edit-button');
        this.leasedPremisesApplyBtn = this.page.getByTestId('dynamic-editor-apply-button');
        this.item2AreaGenerateTextBox = this.page.getByTestId('area-generate-text-box');
        this.item3TermYearWarningIcon = this.page.getByTestId('term-year-warning-icon');
        this.item3TermMonthsWarningIcon = this.page.getByTestId('term-month-warning-icon');
        this.item3LeaseCommencementDateWarningIcon = this.page.getByTestId('start-date-warning-icon');
        this.item3TermYearInput = this.page.getByTestId('term-year-numeric-textbox');
        this.item3TermMonthsInput = this.page.getByTestId('term-month-numeric-textbox');
        this.item3LeaseCommencementDateInput = this.page.getByTestId('start-date-input');
        this.item3LeaseCommencingGenerateTextBox = this.page.getByTestId('term-commencing-generate-text-box');
        this.item4ExpiryDateInput = this.page.getByTestId('expiry-date-input');
        this.item4ExpiryDateWarninIcon = this.page.getByTestId('expiry-date-warning-icon');
        this.expiryDateBtn = this.page.getByTestId('calculate-expiry-date-button');
        this.item5Link = this.page.getByTestId('item-5-sticky-page-nav-item');
        this.item5RentPremisesAreaInput = this.page.getByTestId('rent-premise1-area-sqm-input');
        this.item5PremisesCell = this.page.locator('//mat-table//following::mat-header-cell[text()=" Base Rent (psqm) "]//following::mat-cell[2]');
        this.item5BaseRentInput = this.page.getByTestId('rent-premise1-base-rent-psqm-input');
        this.item5BaseRentPaInput = this.page.getByTestId('rent-premise1-base-rent-pa-input');
        this.item5RentGenerateTextBox = this.page.getByTestId('rent-generate-text-box');
        this.item5ParkingGenerateTextBox = this.page.getByTestId('parking-generate-text-box');
        this.item5RentCommencementDateInput = this.page.getByTestId('rent-commencement-date-input');
        this.item5RentPremisesAreaWarningIcon = this.page.getByTestId('rent-premise1-area-sqm-warning-icon');
        this.item5RentPremisesBaseRentWarningIcon = this.page.getByTestId('rent-premise1-base-rent-psqm-warning-icon');
        this.item5RentCommencementDateWarninIcon = this.page.getByTestId('rent-commencement-date-warning-icon-2');
        this.calculateRentCommencementDateBtn = this.page.getByTestId('calculate-rent-commencement-date-button');
        this.item10PremisesCleaningChargesInput = this.page.getByTestId('premises-cleaning-charges-numeric-textbox');
        this.calculatePremisesCleaningChargesPaBtn = this.page.getByTestId('calculate-premises-cleaning-charges-pa-button');
        this.item10PremisesCleaningChargesPaInput = this.page.getByTestId('premises-cleaning-charges-pa-numeric-textbox');
        this.item10BuildingCleaningChargesInput = this.page.getByTestId('building-cleaning-charges-numeric-textbox');
        this.calculateBuildingCleaningChargesPaBtn = this.page.getByTestId('calculate-building-cleaning-charges-pa-button');
        this.item10BuildingCleaningChargesPaInput = this.page.getByTestId('building-cleaning-charges-pa-numeric-textbox');
        this.item10CleaningChargesGenerateTextBox = this.page.getByTestId('cleaning-charges-generate-text-box');
        this.item20NoticePeriodInput = this.page.getByTestId('tenant-notice-period-months-numeric-textbox');
        this.item20NoticePeriodWarningIcon = this.page.getByTestId('tenant-notice-period-months-warning-icon-1');
        this.item20MakeGoodClauseDropDown = this.page.getByTestId('make-good-clause-options-dropdown');
        this.item20MakeGoodClauseDropDownOpt1 = this.page.getByTestId('full-make-good-office-option');
        this.item20MakeGoodClauseDropDownOpt2 = this.page.getByTestId('full-make-good-industrial-option');
        this.item20MakeGoodClauseDropDownOpt3 = this.page.getByTestId('make-good-back-to-tenancy-condition-report-option');
        this.item20MakeGoodClauseDropDownOpt4 = this.page.getByTestId('limited-make-good-option');
        this.item20MakeGoodClauseDropDownOpt5 = this.page.getByTestId('waiver-of-make-good-option');
        this.item20MakeGoodClauseDropDownOpt6 = this.page.getByTestId('waiver-of-make-good-option-option');
        this.item20MakeGoodClauseDropDownOpt7 = this.page.getByTestId('make-good-settlement-option');
        this.item20MakeGoodClauseDropDownOpt8 = this.page.getByTestId('redecoration-fee-and-reinstatement-option');
        this.item20MakeGoodAmtInput = this.page.getByTestId('make-good-amount-numeric-textbox');
        this.item20RedecorationFeeInput = this.page.getByTestId('redecoration-fees-numeric-textbox');
        this.item20MakeGoodGenerateTextBox = this.page.getByTestId('make-good-generate-text-box');
        this.item21LeasingDepositDropDown = this.page.getByTestId('leasing-deposit-options-dropdown');
        this.item21LeasingDepositDropDownOpt1 = this.page.getByTestId('tenant-agrees-forfeit-deposit-option');
        this.item21LeasingDepositDropDownOpt2 = this.page.getByTestId('tenant-agrees-pay-landlords-option');
        this.item21LeasingDepositDropDownOpt3 = this.page.getByTestId('tenant-required-pay-leasing-deposit-option');
        this.bindingOfferToggle = this.page.locator('mat-slide-toggle[formcontrolname="IsHoABinding"]');
        this.bindingOfferToggleInput = this.page.getByTestId('is-hoa-binding-toggle-input');
        this.corporateTenantInput = this.page.getByTestId('tenant-type-corporate-option-input');
        this.governmentTenant = this.page.locator('text="Government"');
        this.individualTenant = this.page.locator('text="Individual"');
        this.propertyMgrContactDetailNoInput = this.page.getByTestId('display-pm-contact-details-no-option-input');
        this.propertyMgrContactDetailNoRadioBtn = this.page.getByTestId('display-pm-contact-details-no-option');
        this.propertyMgrContactDetailYesRadioBtn = this.page.getByTestId('display-pm-contact-details-yes-option');
        this.propertyMgrContactDetailYesInput = this.page.getByTestId('display-pm-contact-details-yes-option-input');
        this.headLandlordNoInput = this.page.getByTestId('head-landlord-no-option-input');
        this.headLandlordNoRadioBtn = this.page.getByTestId('head-landlord-no-option');
        this.headLandlordYesRadioBtn = this.page.getByTestId('head-landlord-yes-option');
        this.headLandlordAbnInput = this.page.getByTestId('head-landlord-abn-input');
        this.landlordHeadLeaseInput = this.page.getByTestId('landlord-head-lease-input');
        this.headLandlordNoticeDetailsEditButton = this.page.getByTestId('head-landlord-notice-details-edit-button');
        this.landlordNoticeAttentionInput = this.page.getByTestId('landlord-notice-attention-input');
        this.tenantAbnInput = this.page.getByTestId('tenant-abn-input');
        this.tenantAbnWarningIcon = this.page.getByTestId('tenant-abn-warning-icon-1');
        this.tenantInput = this.page.getByTestId('lessee-input');
        this.tenantCompanySecretaryInput = this.page.getByTestId('tenant-attention-input');
        this.tenantNoticeDetailsEditBtn = this.page.getByTestId('tenant-notice-details-edit-button');
        this.editRichText = this.page.frameLocator('iframe[id="dynamic-editor_ifr"]').getByTestId('tinymce');
        this.noticeDetailsTxt = this.page.getByText('To be confirmed');
        this.abnLookupButton = this.page.getByTestId('tenant-abn-lookup-button');
        this.lookupTypeRadio = this.page.locator('//span[text()=" Name "]');
        this.searchValueInput = this.page.getByLabel('Search Value *');
        this.searchButton = this.page.locator('button:has-text("Search")');
        this.abnNumberRadio = this.page.locator('//mat-cell[text()=" 58725115040 "]//preceding::mat-radio-button[1]');
        this.abnLookupSelectBtn = this.page.getByRole('button', { name: 'Select' });
        this.landlordGenerateTextBtn = this.page.getByTestId('landlord-generate-text-button');
        this.termCommencingGenerateTextBtn = this.page.getByTestId('term-commencing-generate-text-button');
        this.premisesGenerateTextBtn = this.page.getByTestId('premises-generate-text-button');
        this.areaGenerateTextBtn = this.page.getByTestId('area-generate-text-button');
        this.rentGenerateTextBtn = this.page.getByTestId('rent-generate-text-button');
        this.parkingGenerateTextBtn = this.page.getByTestId('parking-generate-text-button');
        this.cleaningChargesGenerateTextBtn = this.page.getByTestId('cleaning-charges-generate-text-button');
        this.sustainabilityGenerateTextBtn = this.page.getByTestId('sustainability-generate-text-button');
        this.makeGoodGenerateTextBtn = this.page.getByTestId('make-good-generate-text-button');
        this.otherChargesGenerateTextBtn = this.page.getByTestId('other-charges-generate-text-button');
        this.otherMattersGenerateTextBtn = this.page.getByTestId('other-matters-generate-text-button');
        this.validationWarningList = this.page.locator('li.indent');
        this.standardBankGuaranteeNoInput = this.page.getByTestId('standard-bank-guarantee-no-option-input');
        this.standardBankGuaranteeNoRadioBtn = this.page.getByTestId('standard-bank-guarantee-no-option');
        this.tenantGovEntityNoInput = this.page.getByTestId('tenant-is-a-government-entity-no-option-input');
        this.tenantGovEntityNoRadioBtn = this.page.getByTestId('tenant-is-a-government-entity-no-option');
        this.bankGuaranteeReductionNoInput = this.page.getByTestId('has-bg-reducing-no-option-input');
        this.bankGuaranteeReductionNoRadioBtn = this.page.getByTestId('has-bg-reducing-no-option');
        this.additionalBankGuaranteeNoInput = this.page.getByTestId('has-additional-bg-no-option-input');
        this.additionalBankGuaranteeNoRadioBtn = this.page.getByTestId('has-additional-bg-no-option');
        this.eGuaranteeNoInput = this.page.getByTestId('has-surety-bond-no-option-input');
        this.eGuaranteeNoRadioBtn = this.page.getByTestId('has-surety-bond-no-option');
        this.optNewReleaseNoInput = this.page.getByTestId('option-lease-no-option-input');
        this.optNewReleaseNoRadioBtn = this.page.getByTestId('option-lease-no-option');
        this.retailLeaseActNoInput = this.page.getByTestId('application-of-act-no-option-input');
        this.retailLeaseActNoRadioBtn = this.page.getByTestId('application-of-act-no-option');
        this.permittedUseGenCommOfficesInput = this.page.getByTestId('permitted-use-general-commercial-offices-option-input');
        this.permittedUseGenCommOfficesRadioBtn = this.page.getByTestId('permitted-use-general-commercial-offices-option');
        this.transferDefaultClauseRadioBtn = this.page.getByTestId('default-clause-option');
        this.transferDefaultClauseInput = this.page.getByTestId('default-clause-option-input');
        this.landloardGenerateTextBox = this.page.getByTestId('landlord-generate-text-box');
        this.premisesInput = this.page.getByTestId('premises-input');
        this.noticeDetailsParagraph = this.page.locator('//button[@id="landlord-notice-details-edit-button"]//following::div[1]');
        this.saveBtn = this.page.getByTestId('save-bottom-bar-button');
    }

    public async verifyTenantType() {
        await expect(this.corporateTenantInput).toBeVisible();
        await expect(this.governmentTenant).toBeVisible();
        await expect(this.individualTenant).toBeVisible();
    }

    public async selectTenantABN() {
        await this.abnLookupButton.click();
        await this.lookupTypeRadio.click();
        await this.searchValueInput.fill('test');
        await this.searchButton.click();
        await this.abnNumberRadio.click();
        await this.abnLookupSelectBtn.click();
    }

    public async enterAreaAndSelectTypeDropdown(areaValue: number, dropdownOption: Locator) {
        await this.item2Link.click();
        await this.item2PremisesAreaInput.click();
        await this.item2PremisesAreaInput.press('Control+A');
        await this.item2PremisesAreaInput.press('Backspace');
        await this.item2PremisesAreaInput.type(areaValue.toString());
        await this.item2PremisesTypeDropdown.click();
        await dropdownOption.click();
    }

    public async enterTrust(text: string) {
        await this.item1TrustInput.click({ clickCount: 3 }); // Triple-click to select any existing text
        await this.item1TrustInput.press('Backspace'); // Clear any existing text
        await this.item1TrustInput.type(text);
    }

    public async enterTermYearAndMonth(termYear: string, termMonths: string) {
        await this.item3TermYearInput.click({ clickCount: 3 }); // Triple-click to select any existing text
        await this.item3TermYearInput.press('Backspace'); // Clear any existing text
        await this.item3TermYearInput.type(termYear);
        await this.item3TermMonthsInput.click({ clickCount: 3 }); // Triple-click to select any existing text
        await this.item3TermMonthsInput.press('Backspace'); // Clear any existing text
        await this.item3TermMonthsInput.type(termMonths);

    }

    public async enterBaseRentAndRentCommencementDate(baseRent: number) {
        await this.item5Link.click();
        await this.item5BaseRentInput.click();
        await this.item5BaseRentInput.press('Control+A');
        await this.item5BaseRentInput.press('Backspace');
        await this.item5BaseRentInput.type(baseRent.toString());
        await this.calculateRentCommencementDateBtn.click();

    }

    public async enterNoticePeriod(noicePeriod: string) {
        await this.item20NoticePeriodInput.fill('');
        await this.item20NoticePeriodInput.fill(noicePeriod);
    }

    public async selectLeasinDepositOption() {
        await this.item21LeasingDepositDropDown.click();
        await this.item21LeasingDepositDropDownOpt3.click();
    }

    public async clickGenerateTextButton() {
        await this.landlordGenerateTextBtn.click();
        await this.termCommencingGenerateTextBtn.click();
        await this.areaGenerateTextBtn.click();
        await this.premisesGenerateTextBtn.click();
        await this.rentGenerateTextBtn.click();
        await this.parkingGenerateTextBtn.click();
        await this.makeGoodGenerateTextBtn.click();
        await this.cleaningChargesGenerateTextBtn.click();
        await this.sustainabilityGenerateTextBtn.click();
        await this.otherChargesGenerateTextBtn.click();
        await this.otherMattersGenerateTextBtn.click();
        await this.saveBtn.click();
    }

    public async assertDefaultSelectedFields() {
        const bindingOfferToggleIsChecked = await this.bindingOfferToggleInput.isChecked();
        expect(bindingOfferToggleIsChecked).not.toBe(true);
        const corporateTenantIsChecked = await this.corporateTenantInput.isChecked();
        expect(corporateTenantIsChecked).toBe(true);
        const propertyMgrContactDetailRadioBtnIsChecked = await this.propertyMgrContactDetailNoInput.isChecked();
        expect(propertyMgrContactDetailRadioBtnIsChecked).toBe(true);
        const headLandlordRadioBtnIsChecked = await this.headLandlordNoInput.isChecked();
        expect(headLandlordRadioBtnIsChecked).toBe(true);
        const textContent = await this.noticeDetailsTxt.textContent();
        expect(textContent).toBe('To be confirmed');
        const standardBankGuaranteeRadioBtnIsChecked = await this.standardBankGuaranteeNoInput.isChecked();
        expect(standardBankGuaranteeRadioBtnIsChecked).toBe(true);
        const tenantGovEntityRadioBtnIsChecked = await this.tenantGovEntityNoInput.isChecked();
        expect(tenantGovEntityRadioBtnIsChecked).toBe(true);
        const bankGuaranteeReductionRadioBtnIsChecked = await this.bankGuaranteeReductionNoInput.isChecked();
        expect(bankGuaranteeReductionRadioBtnIsChecked).toBe(true);
        const additionalBankGuaranteeRadioBtnIsChecked = await this.additionalBankGuaranteeNoInput.isChecked();
        expect(additionalBankGuaranteeRadioBtnIsChecked).toBe(true);
        const eGuaranteeIsChecked = await this.eGuaranteeNoInput.isChecked();
        expect(eGuaranteeIsChecked).toBe(true);
        const optNewReleaseRadioBtnIsChecked = await this.optNewReleaseNoInput.isChecked();
        expect(optNewReleaseRadioBtnIsChecked).toBe(true);
        const retailLeaseActRadioBtnIsChecked = await this.retailLeaseActNoInput.isChecked();
        expect(retailLeaseActRadioBtnIsChecked).toBe(true);
        const permittedUseGenCommOfficesRadioBtnIsChecked = await this.permittedUseGenCommOfficesInput.isChecked();
        expect(permittedUseGenCommOfficesRadioBtnIsChecked).toBe(true);
        const transferDefaultClauseRadioBtnIsChecked = await this.transferDefaultClauseInput.isChecked();
        expect(transferDefaultClauseRadioBtnIsChecked).toBe(true);
    }

    public async assertWarningMsgsWhenBindingToggleIsOn(unitCode: string) {
        const summaryMessage = await this.page.waitForSelector('div.summary-message:has-text("Offer summary contains 15 validation warnings")');
        await summaryMessage.click();
        const expectedMessages = [
            "Cleaning Charges Text is not valid",
            "Expiry Date is required Required for Approval",
            "Tenant is required to pay a leasing deposit is required",
            "Binding Offer is required Required for Approval",
            "Dispute Resolution is required",
            "Rent Commencement Date is required Required for Approval",
            `Area (sqm) of ${unitCode} is required Required for Approval`,
            `Base Rent (psqm) of ${unitCode} is required Required for Approval`,
            `Premises Type of ${unitCode} is required Required for Approval`,
            "Tenant ABN is required",
            "Tenant Notice Period Months is required",
            "Term Commencing Text is not valid",
            "Term Months is required",
            "Term Year is required Required for Approval",
            "Trust is required"

        ];
        const validationWarnings = await this.page.$$('li.indent');
        for (const warning of validationWarnings) {
            const textContent = (await warning.innerText()).trim().toLowerCase();
            expect(textContent).not.toBeNull();
            expect(expectedMessages.map(msg => msg.toLowerCase())).toContain(textContent);
        }
    }

    public async assertWarningMsgsWhenBindingToggleIsOff(unitCode: string) {
        const summaryMessage = await this.page.waitForSelector('div.summary-message:has-text("Offer summary contains 12 validation warnings")');
        await summaryMessage.click();
        const expectedMessages = [
            "Cleaning Charges Text is not valid",
            "Expiry Date is required Required for Approval",
            "Rent Commencement Date is required Required for Approval",
            `Area (sqm) of ${unitCode} is required Required for Approval`,
            `Base Rent (psqm) of ${unitCode} is required Required for Approval`,
            `Premises Type of ${unitCode} is required Required for Approval`,
            "Tenant ABN is required",
            "Tenant Notice Period Months is required",
            "Term Commencing Text is not valid",
            "Term Months is required",
            "Term Year is required Required for Approval",
            "Trust is required"
        ];
        const validationWarnings = await this.page.$$('li.indent');
        for (const warning of validationWarnings) {
            const textContent = (await warning.innerText()).trim().toLowerCase();
            expect(textContent).not.toBeNull();
            expect(expectedMessages.map(msg => msg.toLowerCase())).toContain(textContent);
        }
    }

    public async getLandloradText(): Promise<string> {
        const landlordContent = await this.landloardGenerateTextBox.textContent();
        return landlordContent ?? '';
    }

}
