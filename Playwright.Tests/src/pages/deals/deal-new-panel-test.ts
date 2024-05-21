import { Locator, Page, expect } from "@playwright/test";
import { DealData } from "../../interfaces/deal-data";

export default class DealNewPanelTest {
    readonly tenantName: Locator;
    readonly tenantLookupResults: Locator;
    readonly firstTenantLookupOption: Locator;
    readonly unlinkFromProspectToggle: Locator;
    readonly unlinkFromProspectToggleInput: Locator;
    readonly repCompanyInput: Locator;
    readonly repInput: Locator;
    readonly dealType: Locator;
    readonly dealTypeExternallyManaged: Locator;
    readonly leaseTypeNewDeal: Locator;
    readonly leaseTypeDevelopment: Locator;
    readonly expectedTerm: Locator;
    readonly expectedStartDate: Locator;
    readonly nextArrowIcon: Locator;
    readonly propertyControl: Locator;
    readonly unit: Locator;
    readonly nextArrowUnitPanel: Locator;
    readonly tenantSourceSelect: Locator;
    readonly tenantIntroducedBy: Locator;
    readonly dexusTenantNoRadioBtn: Locator;
    readonly tenantIndustry: Locator;
    readonly tenantSubIndustry: Locator;
    readonly nextArrowTenantPanel: Locator;
    readonly dealOwnerInput: Locator;
    readonly dealAdministratorInput: Locator;
    readonly groupWithAccessRadio: Locator;
    readonly nextArrowAccessPanel: Locator;
    readonly createDealBtn: Locator;
    readonly officeSizeMin: Locator;
    readonly officeSizeMax: Locator;
    readonly retailSizeMin: Locator;
    readonly retailSizeMax: Locator;
    readonly warehouseSizeMin: Locator;
    readonly warehouseSizeMax: Locator;
    readonly healthcareSizeMin: Locator;
    readonly healthcareSizeMax: Locator;
    readonly storageSizeMin: Locator;
    readonly storageSizeMax: Locator;
    readonly landSizeMin: Locator;
    readonly landSizeMax: Locator;
    readonly existingAddressNoRadioBtn: Locator;
    readonly tenantReferralName: Locator;
    readonly tenantContactDetails: Locator;
    readonly publishedDate: Locator;
    readonly closingDate: Locator;

    constructor(public page: Page) {
        this.tenantName = this.page.getByTestId('tenantLookupBox');
        this.tenantLookupResults = this.page.locator('.lookup-results');
        this.firstTenantLookupOption = this.tenantLookupResults.locator('.lookup-option').first();
        this.unlinkFromProspectToggle = this.page.locator('.mat-slide-toggle-bar');
        this.unlinkFromProspectToggleInput = this.page.locator('//div[contains(text(),"Linked to prospect")]//following::input[1]');
        this.repCompanyInput = this.page.getByLabel('Rep Company');
        this.repInput = this.page.getByLabel('Rep *');
        this.dealType = this.page.locator('.mat-radio-outer-circle');
        this.expectedTerm = this.page.getByLabel('Expected Term');
        this.expectedStartDate = this.page.getByLabel('Expected Start *');
        this.nextArrowIcon = this.page.getByLabel('1Details').getByRole('button').nth(3);
        this.propertyControl = this.page.locator('input[formcontrolname="PropertyControl"]');
        this.unit = this.page.locator('.ag-selection-checkbox').first();
        this.nextArrowUnitPanel = this.page.locator('//button[@class="mat-focus-indicator mat-icon-button mat-button-base mat-primary"]');
        this.tenantSourceSelect = this.page.locator('div').filter({ hasText: /^Tenant Source \*$/ }).nth(3);
        this.tenantIntroducedBy = this.page.locator('div').filter({ hasText: /^Introduced by \*$/ }).nth(3);
        this.tenantIndustry = this.page.locator('div').filter({ hasText: /^Industry \*$/ }).nth(2);
        this.dexusTenantNoRadioBtn = this.page.locator('//mat-label[text()="Dexus Tenant "]//following::mat-radio-button[2]');
        this.tenantSubIndustry = this.page.locator('div').filter({ hasText: /^Sub Industry \*$/ }).nth(3);
        this.nextArrowTenantPanel = this.page.getByLabel('3Tenant').getByRole('button');
        this.dealOwnerInput = this.page.locator('//label[text()=" Deal Owner * "]//following::input[1]');
        this.dealAdministratorInput = this.page.locator('//label[text()=" Deal Administrator "]//following::input[1]');
        this.groupWithAccessRadio = this.page.getByLabel('4Access').getByText('Dexus + Agents');
        this.nextArrowAccessPanel = this.page.locator("//input[@value='Dexus + Agents']//following::button[@class='mat-focus-indicator mat-stepper-next mat-icon-button mat-button-base mat-primary']");
        this.createDealBtn = this.page.getByRole('button', { name: 'Create Deal' });
        this.officeSizeMin = this.page.locator('td.mat-cell app-inline-editable-input[fieldname="OfficeSizeMin"][fieldtype="number"]');
        this.officeSizeMax = this.page.locator('td.mat-cell app-inline-editable-input[fieldname="OfficeSizeMax"][fieldtype="number"]');
        this.retailSizeMin = this.page.locator('td.mat-cell app-inline-editable-input[fieldname="RetailSizeMin"][fieldtype="number"]');
        this.retailSizeMax = this.page.locator('td.mat-cell app-inline-editable-input[fieldname="RetailSizeMax"][fieldtype="number"]');
        this.warehouseSizeMin = this.page.locator('td.mat-cell app-inline-editable-input[fieldname="WarehouseSizeMin"][fieldtype="number"]');
        this.warehouseSizeMax = this.page.locator('td.mat-cell app-inline-editable-input[fieldname="WarehouseSizeMax"][fieldtype="number"]');
        this.healthcareSizeMin = this.page.locator('td.mat-cell app-inline-editable-input[fieldname="HealthcareSizeMin"][fieldtype="number"]');
        this.healthcareSizeMax = this.page.locator('td.mat-cell app-inline-editable-input[fieldname="HealthcareSizeMax"][fieldtype="number"]');
        this.storageSizeMin = this.page.locator('td.mat-cell app-inline-editable-input[fieldname="StorageSizeMin"][fieldtype="number"]');
        this.storageSizeMax = this.page.locator('td.mat-cell app-inline-editable-input[fieldname="StorageSizeMax"][fieldtype="number"]');
        this.landSizeMin = this.page.locator('td.mat-cell app-inline-editable-input[fieldname="LandSizeMin"][fieldtype="number"]');
        this.landSizeMax = this.page.locator('td.mat-cell app-inline-editable-input[fieldname="LandSizeMax"][fieldtype="number"]');
        this.existingAddressNoRadioBtn = this.page.locator('//mat-label[text()="Prospect existing address available? *"]//following::span[text()=" No "]');
        this.tenantReferralName = this.page.getByRole('textbox', { name: 'Tenant' });
        this.tenantContactDetails = this.page.getByLabel('Contact Details *');
        this.publishedDate = this.page.getByLabel('Published Date *');
        this.closingDate = this.page.getByLabel('Closing Date *');
    }

    public async enterNewDealInputData(data: DealData) {

        await this.page.locator(`//input[@value="${data.DealType}"]//parent::span`).click();
        await this.page.locator(`//input[@value="${data.LeaseType}"]//parent::span`).click();
        await expect(this.page.getByText('Lease Type *')).toBeVisible();

        const linkUnlinkToProspectToggleisChecked = await this.unlinkFromProspectToggleInput.isChecked();
        if (linkUnlinkToProspectToggleisChecked) {
            await this.expectedTerm.click();
            await this.expectedTerm.fill(data.ExpectedTerm);
            await this.expectedStartDate.click();
            await this.expectedStartDate.fill(data.ExpectedStart);
            await this.enterAreaRequirement(this.officeSizeMin, this.officeSizeMax, data.AreaReqMinValue, data.AreaReqMaxValue);
            await this.enterAreaRequirement(this.retailSizeMin, this.retailSizeMax, data.AreaReqMinValue, data.AreaReqMaxValue);
            await this.enterAreaRequirement(this.warehouseSizeMin, this.warehouseSizeMax, data.AreaReqMinValue, data.AreaReqMaxValue);
            await this.enterAreaRequirement(this.healthcareSizeMin, this.healthcareSizeMax, data.AreaReqMinValue, data.AreaReqMaxValue);
            await this.enterAreaRequirement(this.storageSizeMin, this.storageSizeMax, data.AreaReqMinValue, data.AreaReqMaxValue);
            await this.enterAreaRequirement(this.landSizeMin, this.landSizeMax, data.AreaReqMinValue, data.AreaReqMaxValue);
        }
        await this.page.locator('.button-row').first().click();
        await this.nextArrowIcon.click();
        await this.propertyControl.click();
        await this.propertyControl.fill(data.Property);
        await this.page.click(`mat-option.mat-option.mat-focus-indicator:has-text("${data.Property}")`);
        await this.unit.click();
        await this.nextArrowUnitPanel.click();
        if (linkUnlinkToProspectToggleisChecked) {
            await this.tenantSourceSelect.click();
            await this.page.getByText(data.TenantSource).click();
            if (data.TenantSource == 'Referral')
                await this.enterDataForTenantSourceReferral(data.TenantReferralName, data.TenantContactDetails);
            else if (data.TenantSource == 'Brief')
                await this.enterDataForTenantSourceBrief(data.PublishedDate, data.ClosingDate);
        }
        await this.tenantIntroducedBy.click();
        await this.page.getByText(data.IntroducedBy).click();
        await this.dexusTenantNoRadioBtn.click();
        if (linkUnlinkToProspectToggleisChecked) {
            await this.tenantIndustry.click();
            await this.page.getByText(data.Industry).click();
            await this.page.getByLabel(data.Industry).getByText(data.Industry).click();
            await this.page.getByRole('option', { name: data.Industry }).locator('span').click();
            await this.tenantSubIndustry.click();
            await this.page.getByText(data.SubIndustry, { exact: true }).click();
            await this.existingAddressNoRadioBtn.click();
            
        }
        if (linkUnlinkToProspectToggleisChecked && data.TenantSource == 'Brief')
            await this.nextArrowTenantPanel.nth(3).click();
        else
        await this.nextArrowTenantPanel.nth(1).click();
    }

    public async verifyDealIsCreated() {
        await expect(this.page.locator('app-deal-progress-box')).toContainText('Add an Inspection');
        await expect(this.page.locator('app-deal-progress-box')).toContainText('New Deal Created');
    }

    public async setDealOwner(data: DealData) {
        await this.dealOwnerInput.click();
        await this.dealOwnerInput.press('Backspace', { delay: 100 });
        await this.dealOwnerInput.fill(data.DealAdministrator);
        const element = await this.page.waitForSelector(`//span[contains(text(), "${data.DealAdministrator}")]`);
        await element.click();

    }

    public async setDealAdminAndCreateDeal(data: DealData) {
        await this.dealAdministratorInput.click();
        await this.dealAdministratorInput.press('Backspace', { delay: 100 });
        await this.dealAdministratorInput.fill(data.DealAdministrator);
        const element = await this.page.waitForSelector(`//span[contains(text(), "${data.DealAdministrator}")]`);
        await element.click();
        await this.groupWithAccessRadio.click();
        await this.nextArrowAccessPanel.click();
        await this.createDealBtn.click();
    }

    public async enterAreaRequirement(minElement: Locator, maxElement: Locator, minValue: string, maxValue: string) {
        await minElement.click();
        await minElement.type(minValue);
        await this.page.keyboard.press('Enter');
        await maxElement.click(); // Click again to focus on the next input
        await maxElement.type(maxValue);
        await this.page.keyboard.press('Enter');
    }

    public async enterDataForTenantSourceReferral(tenantReferralName: string, tenantContactDetails: string) {
        await this.tenantReferralName.click();
        await this.tenantReferralName.fill(tenantReferralName);
        await this.tenantContactDetails.click();
        await this.tenantContactDetails.fill(tenantContactDetails);
    }

    public async enterDataForTenantSourceBrief(publishedDate: string, closingDate: string) {
        await this.publishedDate.click();
        await this.publishedDate.fill(publishedDate);
        await this.closingDate.click();
        await this.closingDate.fill(closingDate);

    }

    public async linkToExistingProspect(tenant: string) {
        await this.tenantName.click();
        await this.tenantName.fill(tenant);
        await this.firstTenantLookupOption.click();
    }

    public async unlinkFromExistingProspect(tenant: string, repCompany: string, rep: string) {
        await this.tenantName.click();
        await this.tenantName.fill(tenant);
        await this.firstTenantLookupOption.click();
        await this.unlinkFromProspectToggle.click();
        await this.repCompanyInput.click();
        await this.page.getByText(repCompany).click();
        await this.repInput.click();
        await this.page.getByText(rep).click();
    }

}