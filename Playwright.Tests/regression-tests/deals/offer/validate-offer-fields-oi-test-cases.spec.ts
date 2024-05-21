import { test, expect } from '@playwright/test';
import FormInputHelper from "../../../src/helpers/form-input-helper";
import NavigationHelper from '../../../src/helpers/navigation-helper';
import DateHelper from "../../../src/helpers/date-helper";
import DealIndexPageTest from "../../../src/pages/deals/deal-index-page-test";
import HomePageTest from "../../../src/pages/home/home-page-test";
import CreateOfferPanelTest from "../../../src/pages/offer/offer-new-panel-test";
import OfferSummaryOiTest from "../../../src/pages/offer/offer-templates/offer-summary-oi-page-test";
import DealViewPageTest from "../../../src/pages/deals/deal-view-page-test";
import DealOffersPageTest from "../../../src/pages/deals/deal-offers-page-test";
import DealNewPanelTest from "../../../src/pages/deals/deal-new-panel-test";
import dealData from "../../../test-data/deal-creation-data-internal-user.json";
import newDealData from "../../../test-data/deal-test-data.json";
import OfferNewPanelTest from "../../../src/pages/offer/offer-new-panel-test";
import ReadTestData from '../../../src/utils/read-test-data';
import PropertyIndexPageTest from '../../../src/pages/properties/property-index-page-test';
import PropertyViewPageTest from '../../../src/pages/properties/property-view-page-test';
import PropertyLegalPageTest from '../../../src/pages/properties/property-legal-page-test';

const { baseUrl, testDataFile } = process.env;

test.describe('Validate Offer field test cases', async () => {

    let formInputHelper, navigationHelper, dateHelper, offerSummaryOiTest, dealIndexPageTest, lmsHomePageTest, createOfferPanelTest, dealViewPageTest, dealOffersPageTest, dealNewPanelTest, offerNewPanelTest, readTestData, testData, propertyIndexPageTest, propertyViewPageTest, propertyLegalPageTest, landlordActualValue, noticeDetailsActualValue, landlordExpectedText, userInfo, userEmail, noticeDetailsExpectedValue, premisesExpectedValue, premisesActualValue, trustActualValue, trustExpectedValue;

    test.beforeEach(async ({ page }) => {
        if (!baseUrl) {
            throw new Error('Environment variables are not properly set.');
        }
        await page.goto(baseUrl);
        formInputHelper = new FormInputHelper(page);
        navigationHelper = new NavigationHelper(page);
        offerSummaryOiTest = new OfferSummaryOiTest(page);
        lmsHomePageTest = new HomePageTest(page);
        dealIndexPageTest = new DealIndexPageTest(page);
        createOfferPanelTest = new CreateOfferPanelTest(page);
        dateHelper = new DateHelper(page);
        dealViewPageTest = new DealViewPageTest(page);
        dealOffersPageTest = new DealOffersPageTest(page);
        dealNewPanelTest = new DealNewPanelTest(page);
        offerNewPanelTest = new OfferNewPanelTest(page);
        readTestData = new ReadTestData();
        testData = await readTestData.readJsonFile(testDataFile);
        propertyIndexPageTest = new PropertyIndexPageTest(page);
        propertyViewPageTest = new PropertyViewPageTest(page);
        propertyLegalPageTest = new PropertyLegalPageTest(page);
    });

    test('ValidateOfferFields01 - Verify Tenant ABN error message on an offer form', {
        tag: '@InternalUser',
    }, async ({ page }) => {
        await navigationHelper.navigateToDealPage();
        await navigationHelper.navigateToSelectedDealOffersPage();
        await formInputHelper.inputNewValue(offerSummaryOiTest.tenantAbnInput, '123456');
        await offerSummaryOiTest.tenantAbnInput.press('Enter');
        await formInputHelper.assertTooltip(await offerSummaryOiTest.tenantAbnWarningIcon, 'Tenant ABN is not valid');
        await formInputHelper.inputNewValue(offerSummaryOiTest.tenantAbnInput, '58725115040');
        await offerSummaryOiTest.tenantAbnInput.press('Enter');
        await expect(page.locator('mat-form-field').filter({ hasText: 'Tenant ABN⚠️' }).locator('i')).toBeHidden();

    });

    test('ValidateOfferFields02 - Verify default selected fields on offer form', {
        tag: '@InternalUser',
    }, async ({ page }) => {

        await lmsHomePageTest.dealsLink.click();
        await dealIndexPageTest.newDealBtn.click();
        await dealNewPanelTest.linkToExistingProspect(dealData[1].TenantName);
        await dealNewPanelTest.enterNewDealInputData(dealData[1]);
        await dealNewPanelTest.setDealAdminAndCreateDeal(dealData[1]);
        await offerNewPanelTest.createOffer(offerNewPanelTest.templateOIRadio);
        await offerSummaryOiTest.assertDefaultSelectedFields();
    });

    test('ValidateOfferFields03 - Verify mandatory fields when Binding Offer toggle is enabled', {
        tag: '@InternalUser',
    }, async ({ page }) => {

        await lmsHomePageTest.dealsLink.click();
        await dealIndexPageTest.newDealBtn.click();
        await dealNewPanelTest.unlinkFromExistingProspect(dealData[1].TenantName, dealData[1].RepCompany, dealData[1].Rep)
        await dealNewPanelTest.enterNewDealInputData(dealData[1]);
        await dealNewPanelTest.setDealAdminAndCreateDeal(dealData[1]);
        await offerNewPanelTest.createOffer(offerNewPanelTest.templateOIRadio);
        await offerSummaryOiTest.bindingOfferToggle.click();
        await offerSummaryOiTest.assertWarningMsgsWhenBindingToggleIsOn(`${testData.unitCode}`);
    });

    test('ValidateOfferFields04 - Verify mandatory fields when Binding Offer toggle is disabled', {
        tag: '@InternalUser',
    }, async ({ page }) => {

        await lmsHomePageTest.dealsLink.click();
        await dealIndexPageTest.newDealBtn.click();
        await dealNewPanelTest.linkToExistingProspect(dealData[1].TenantName);
        await dealNewPanelTest.enterNewDealInputData(dealData[1]);
        await dealNewPanelTest.setDealAdminAndCreateDeal(dealData[1]);
        await offerNewPanelTest.createOffer(offerNewPanelTest.templateOIRadio);
        await offerSummaryOiTest.bindingOfferToggle.click();
        await offerSummaryOiTest.bindingOfferToggle.click();
        await offerSummaryOiTest.assertWarningMsgsWhenBindingToggleIsOff(`${testData.unitCode}`);
    });

    test('ValidateOfferFields05 - Verify displayed offer mode details when PM contact details radio button is set as No', {
        tag: '@InternalUser',
    }, async ({ page }) => {
        await lmsHomePageTest.propertiesLink.click();
        await propertyIndexPageTest.searchByPropertyName(testDataFile);
        await propertyViewPageTest.legalLink.click();
        landlordActualValue = await propertyLegalPageTest.landlord.innerText();
        noticeDetailsActualValue = await propertyLegalPageTest.noticeDetails.innerText();
        await navigationHelper.navigateToDealPage();
        await navigationHelper.navigateToSelectedDealOffersPage();
        landlordExpectedText = await offerSummaryOiTest.getLandloradText();
        expect(landlordActualValue).toEqual(landlordExpectedText);
        noticeDetailsExpectedValue = await offerSummaryOiTest.noticeDetailsParagraph.innerText();
        expect(noticeDetailsActualValue).toEqual(noticeDetailsExpectedValue);
        premisesExpectedValue = await offerSummaryOiTest.premisesInput.inputValue();
        premisesActualValue = await propertyIndexPageTest.getPropertyName(testDataFile);
        expect(premisesActualValue).toEqual(premisesExpectedValue);
    });

    test('ValidateOfferFields06 - Verify displayed offer mode details when PM contact details radio button is set as Yes', {
        tag: '@InternalUser',
    }, async ({ page }) => {
        await lmsHomePageTest.propertiesLink.click();
        await propertyIndexPageTest.searchByPropertyName(testDataFile);
        await propertyViewPageTest.legalLink.click();
        landlordActualValue = await propertyLegalPageTest.landlord.innerText();
        noticeDetailsActualValue = await propertyLegalPageTest.noticeDetails.innerText();
        await navigationHelper.navigateToDealPage();
        await navigationHelper.navigateToSelectedDealOffersPage();
        await offerSummaryOiTest.propertyMgrContactDetailYesRadioBtn.click();
        await offerSummaryOiTest.landlordGenerateTextBtn.click();
        landlordExpectedText = await offerSummaryOiTest.getLandloradText();
        expect(landlordExpectedText).toContain(landlordActualValue);
        expect(landlordExpectedText).toContain(`Address: ${noticeDetailsActualValue}`);
        userInfo = await lmsHomePageTest.getUserInfo();
        expect(landlordExpectedText).toContain('Contact: ');
        userEmail = await lmsHomePageTest.getUserSubtitle();
        expect(landlordExpectedText).toContain('Email: ');

    });

    test('ValidateOfferFields07 - Verify free text fields when Head landlord button is set as yes', {
        tag: '@InternalUser',
    }, async ({ page }) => {
        await navigationHelper.navigateToDealPage();
        await navigationHelper.navigateToSelectedDealOffersPage();
        await offerSummaryOiTest.headLandlordYesRadioBtn.click();
        await formInputHelper.assertFreeTextFields(offerSummaryOiTest.headLandlordAbnInput);
        await formInputHelper.assertFreeTextFields(offerSummaryOiTest.landlordNoticeAttentionInput);
        await formInputHelper.assertFreeTextFields(offerSummaryOiTest.landlordHeadLeaseInput);
        await formInputHelper.assertFreeTextFields(offerSummaryOiTest.tenantAbnInput);
        await formInputHelper.assertFreeTextFields(offerSummaryOiTest.tenantInput);
        await formInputHelper.assertFreeTextFields(offerSummaryOiTest.tenantCompanySecretaryInput);
        await offerSummaryOiTest.tenantNoticeDetailsEditBtn.click();
        await formInputHelper.assertFreeTextBodyParagraph(offerSummaryOiTest.editRichText);

    });

    test('ValidateOfferFields08 - Verify Head Landlord ABN field accepts only numeric values', {
        tag: '@InternalUser',
    }, async ({ page }) => {
        await navigationHelper.navigateToDealPage();
        await navigationHelper.navigateToSelectedDealOffersPage();
        await offerSummaryOiTest.headLandlordYesRadioBtn.click();
        await formInputHelper.assertTooltipText(offerSummaryOiTest.headLandlordAbnInput, 'abcfdrt', 'Head Landlord ABN');

    });

    test('ValidateOfferFields09 - Verify Default Value and Field Type of Trust Field in Offer Form (Item 1)', {
        tag: '@InternalUser',
    }, async ({ page }) => {
        await navigationHelper.navigateToDealPage();
        await navigationHelper.navigateToSelectedDealOffersPage();
        await formInputHelper.assertFreeTextFields(offerSummaryOiTest.item1TrustInput);
        trustExpectedValue = await offerSummaryOiTest.item1TrustInput.inputValue();
        await lmsHomePageTest.propertiesLink.click();
        await propertyIndexPageTest.searchByPropertyName(testDataFile);
        await propertyViewPageTest.legalLink.click();
        trustActualValue = await propertyLegalPageTest.trust.innerText();
        expect(trustActualValue).toEqual(trustExpectedValue);

    });

    test('ValidateOfferFields10 - Verify premises and area blurb fields generated text on an offer O&I form', {
        tag: '@InternalUser',
    }, async ({ page }) => {

        await navigationHelper.navigateToDealPage();
        await navigationHelper.navigateToSelectedDealOffersPage();
        let premisesInputText = await offerSummaryOiTest.item2PremisesInput.inputValue();
        let premisesBlurbFieldGeneratedText = await offerSummaryOiTest.item2PremisesGenerateTextBox.innerText();
        expect(premisesBlurbFieldGeneratedText.trim()).toBe(premisesInputText.trim());
        await offerSummaryOiTest.item2PremisesTypeDropdown.click();
        await offerSummaryOiTest.item2PremisesTypeDropdownOpt1.click();
        await offerSummaryOiTest.areaGenerateTextBtn.click();
        let areaValue = await offerSummaryOiTest.item2PremisesAreaInput.inputValue();
        let areaValueFormattedText = parseFloat(areaValue).toFixed(2);
        let typeValue = await offerSummaryOiTest.item2PremisesTypeDropdown.textContent();
        let areaBlurbFieldGeneratedText = await offerSummaryOiTest.item2AreaGenerateTextBox.innerText();
        expect(areaBlurbFieldGeneratedText.trim()).toBe(`${premisesInputText}, ${typeValue} Area, ${areaValueFormattedText} sqm`);
    });

    test('ValidateOfferFields11 - Verify term commencing blurb field generated text on an offer O&I form', {
        tag: '@InternalUser',
    }, async ({ page }) => {
        await navigationHelper.navigateToDealPage();
        await navigationHelper.navigateToSelectedDealOffersPage();
        await offerSummaryOiTest.enterTermYearAndMonth('2', '4');
        await formInputHelper.inputNewValue(offerSummaryOiTest.item3LeaseCommencementDateInput, '12/12/2024');
        let termYear = await offerSummaryOiTest.item3TermYearInput.inputValue();
        let termMonths = await offerSummaryOiTest.item3TermMonthsInput.inputValue();
        let leaseCommencementDate = await offerSummaryOiTest.item3LeaseCommencementDateInput.inputValue();
        let formattedLeaseCommencementDate = formInputHelper.formatDate(leaseCommencementDate);
        await offerSummaryOiTest.termCommencingGenerateTextBtn.click();
        let termCommencingBlurbFieldGeneratedText = await offerSummaryOiTest.item3LeaseCommencingGenerateTextBox.innerText();
        expect(termCommencingBlurbFieldGeneratedText.trim()).toBe(`${termYear} year(s), ${termMonths} month(s), commencing ${formattedLeaseCommencementDate}`);
    });

    test('ValidateOfferFields12 - Verify term commencing blurb field generated text with respect to expiryDate selection on an offer O&I form', {
        tag: '@InternalUser',
    }, async ({ page }) => {
        await navigationHelper.navigateToDealPage();
        await navigationHelper.navigateToSelectedDealOffersPage();
        await formInputHelper.inputNewValue(offerSummaryOiTest.item3LeaseCommencementDateInput, '31/12/2024');
        await formInputHelper.inputNewValue(offerSummaryOiTest.item4ExpiryDateInput, '12/12/2027');
        let leaseCommencementDate = await offerSummaryOiTest.item3LeaseCommencementDateInput.inputValue();
        let formattedLeaseCommencementDate = formInputHelper.formatDate(leaseCommencementDate);
        await offerSummaryOiTest.termCommencingGenerateTextBtn.click();
        let termCommencingBlurbFieldGeneratedText = await offerSummaryOiTest.item3LeaseCommencingGenerateTextBox.innerText();
        expect(termCommencingBlurbFieldGeneratedText.trim()).toBe(`2 year(s), 11 month(s), 13 day(s), commencing ${formattedLeaseCommencementDate}`);
    });

    test('ValidateOfferFields13 - Verify item 5 rent and parking blurb fields generated text on an offer O&I form', {
        tag: '@InternalUser',
    }, async ({ page }) => {
        await navigationHelper.navigateToDealPage();
        await navigationHelper.navigateToSelectedDealOffersPage();
        await formInputHelper.inputNewValue(offerSummaryOiTest.item5BaseRentInput, '2');
        await formInputHelper.inputNewValue(offerSummaryOiTest.item5RentPremisesAreaInput, '390');
        await offerSummaryOiTest.saveBtn.click();
        await offerSummaryOiTest.rentGenerateTextBtn.click();
        let rentBlurbFieldgeneratedText = await offerSummaryOiTest.item5RentGenerateTextBox.innerText();
        let premisesCellValue = await offerSummaryOiTest.item5PremisesCell.innerText();
        let areaInput = await offerSummaryOiTest.item5RentPremisesAreaInput.inputValue();
        let areaInputFormatted = parseFloat(areaInput).toFixed(2);
        let baseRentInput = await offerSummaryOiTest.item5BaseRentInput.inputValue();
        let baseRentFormatted = parseFloat(baseRentInput).toFixed(2);
        let baseRentPAInput = await offerSummaryOiTest.item5BaseRentPaInput.inputValue();
        let baseRentPAFormatted = parseFloat(baseRentPAInput).toFixed(2);
        expect(rentBlurbFieldgeneratedText.trim()).toBe(`${premisesCellValue}, $${baseRentFormatted} per sqm, per annum ($${baseRentPAFormatted}) plus GST based on an area of ${areaInputFormatted} sqm`);
        await offerSummaryOiTest.item3LeaseCommencementDateInput.type('31/12/2024');
        await offerSummaryOiTest.calculateRentCommencementDateBtn.click();
        let rentCommencementDate = await offerSummaryOiTest.item5RentCommencementDateInput.inputValue();
        let rentCommencementDateFormatted = formInputHelper.formatDate(rentCommencementDate);
        await offerSummaryOiTest.parkingGenerateTextBtn.click();
        let parkingBlurbFieldgeneratedText = await offerSummaryOiTest.item5ParkingGenerateTextBox.innerText();
        expect(parkingBlurbFieldgeneratedText.trim()).toContain(rentCommencementDateFormatted);

    });

    test('ValidateOfferFields14 - Verify item 10 cleaning charges blurb field generated text on an offer O&I form', {
        tag: '@InternalUser',
    }, async ({ page }) => {
        await navigationHelper.navigateToDealPage();
        await navigationHelper.navigateToSelectedDealOffersPage();
        await formInputHelper.inputNewValue(offerSummaryOiTest.item10PremisesCleaningChargesInput, '1000');
        await offerSummaryOiTest.calculatePremisesCleaningChargesPaBtn.click();
        await formInputHelper.inputNewValue(offerSummaryOiTest.item10BuildingCleaningChargesInput, '1000');
        await offerSummaryOiTest.calculateBuildingCleaningChargesPaBtn.click();
        await offerSummaryOiTest.cleaningChargesGenerateTextBtn.click();
        let cleaningChargesBlurbFieldGeneratedText = await offerSummaryOiTest.item10CleaningChargesGenerateTextBox.innerText();
        let premisesCleaningCharges = await offerSummaryOiTest.item10PremisesCleaningChargesInput.inputValue();
        let premisesCleaningChargesPa = await offerSummaryOiTest.item10PremisesCleaningChargesPaInput.inputValue();
        let buildingCleaningCharges = await offerSummaryOiTest.item10BuildingCleaningChargesInput.inputValue();
        let buildingCleaningChargesPa = await offerSummaryOiTest.item10BuildingCleaningChargesPaInput.inputValue();
        let expectedText = `Premises Cleaning Charge\n$${premisesCleaningChargesPa}.00 per annum (plus GST) being $${premisesCleaningCharges}.00 per square metre per annum (plus GST).\n\nBuilding Cleaning Charge\n$${buildingCleaningChargesPa}.00 per annum (plus GST) being $${buildingCleaningCharges}.00 per square metre per annum (plus GST).`;
        expect(cleaningChargesBlurbFieldGeneratedText.trim()).toEqual(expectedText.trim());

    });

    test('ValidateOfferFields15 - Verify item 20 make good blurb field generated text on an offer O&I form', {
        tag: '@InternalUser',
    }, async ({ page }) => {

        await navigationHelper.navigateToDealPage();
        await navigationHelper.navigateToSelectedDealOffersPage();
        await offerSummaryOiTest.item20NoticePeriodInput.type('5');
        let noticePeriod = await offerSummaryOiTest.item20NoticePeriodInput.inputValue();
        const dropdownOptions = [
            { text: 'Opt1', expectedTexts: ["At the end of the Lease, unless otherwise requested by the Landlord, the Tenant must, at its cost make good the Premises to the standard provided in the Landlord's standard lease, with a minimum requirement to:", "remove the Tenant's property and fitout from the Premises and Building;", "reinstate any structural changes or penetrations made to the Premises and/or Building;", "reinstate the Premises and any parts of the Building altered by the Tenant, to base building open plan configuration, including all building services (including but not limited to air conditioning, fire, electrical and security services) and repair of the ceiling grid, tiles and removal of floor coverings (and any associated adhesive or substrate); and", "repaint the Premises and make good any damage caused to the Premises and Building by the Tenant resulting from the installation or removal of fixtures, fittings or furniture upon vacating the Premises.", "The Lease will include a right for the Landlord to elect to have the Tenant provide a make good payment in lieu of the Tenant carrying out its make good obligations set out above.", `The Landlord may give the Tenant notice no later than ${noticePeriod} months prior to the Expiry Date if it wishes to exercise this right. The amount of the make good payment will be the average of three reasonable quotes (one obtained by the Tenant and two by the Landlord, from suitably qualified contractors) to carry out the make good obligations under the Lease. The parties may agree between themselves whether the Tenant vacates 3 months early to allow the Landlord to carry out the make good or pay an additional 3 months' rent and remain in occupation of the Premises until the Expiry Date. The Tenant must leave the Premises in a clean and tidy condition.`] },
            { text: 'Opt2', expectedTexts: ["At the end of the Lease, the Tenant must, at its cost:", "return both the office and warehouse to an open plan base building layout with services to match, regardless of whether there was existing fitout in the Premises at lease commencement; ", "reinstate any structural changes made to the Premises;", "remove the Tenant's property and fitout from the Premises and make good any damage caused by such removal;", " paint all painted surfaces; and ", " replace any damaged carpet tiles as determined by the Landlord (acting reasonably).", " The Lease will include a right for the Landlord to elect to have the Tenant provide a make good payment in lieu of the Tenant carrying out its make good obligations set out above.", ` The Landlord may give the Tenant notice, no later than ${noticePeriod} months prior to the Expiry Date if it wishes to exercise this right. The amount of the make good payment will be the average of three (3) reasonable quotes (one obtained by the Tenant and two by the Landlord, from suitably qualified contractors) to carry out the make good obligations under the Lease. The parties may agree between themselves whether the Tenant vacates 3 months early and continue to pay Rent to the Landlord until the Expiry Date to allow the Landlord to carry out the make good or pay an additional 3 months' rent and remain in occupation of the Premises until the Expiry Date. The Tenant must leave the Premises in a clean and tidy condition.`] },
            { text: 'Opt3', expectedTexts: ["At the end of the Lease, the Tenant must, at its cost:", "hand back the Premises in the same condition and configuration as set out in the Tenancy Condition Report and associated plans of the Premises, subject to fair wear and tear; ", " reinstate any changes made to the fitout and any services or structural changes made to the Premises; ", " remove the Tenant's property and leave the Premises in a clean and tidy condition free of any rubbish and personal belongings.", " The Lease will include a right for the Landlord to elect to have the Tenant provide a make good payment in lieu of the Tenant carrying out its make good obligations set out above.", ` The Landlord may give the Tenant notice no later than ${noticePeriod} months prior to the Expiry Date if it wishes to exercise this right. The amount of the make good payment will be the average of three (3) reasonable quotes (one obtained by the Tenant and two by the Landlord, from suitably qualified contractors) to carry out the make good obligations under the Lease. The parties may agree between themselves whether the Tenant vacates 3 months early to allow the Landlord to carry out the make good or pay an additional 3 months' rent and remain in occupation of the Premises until the Expiry Date. The Tenant must leave the Premises in a clean and tidy condition.`] },
            { text: 'Opt4', expectedTexts: ["The Tenant must not remove any furniture or fittings that were provided by the Landlord in the Premises at the Commencing date, unless otherwise agreed by the Landlord.", " The Lease will include a right for the Landlord to elect to have the Tenant provide a make good payment in lieu of the Tenant carrying out its make good obligations.", ` The Landlord may give the Tenant notice no later than ${noticePeriod} months prior to the Expiry Date if it wishes to exercise this right. The amount of the make good payment will be the average of three (3) reasonable quotes agreed by the parties (one obtained by the Tenant and two by the Landlord, from suitably qualified contractors) to carry out the make good obligations under the Lease. The parties may agree between themselves whether the Tenant vacates 3 months early to allow the Landlord to carry out the make good or pay an additional 3 months' rent and remain in occupation of the Premises until the Expiry Date. The Tenant must leave the Premises in a clean and tidy condition.`] },
            { text: 'Opt5', expectedTexts: ["While the Tenant is T.E.S.T., the Landlord will waive the Tenants obligation to make good. The Tenant must, on or before the Expiry Date, remove personal property, rectify any damage caused by the removal, and leave the Premises in a clean and tidy condition."] },
            { text: 'Opt6', expectedTexts: ["While the Tenant is T.E.S.T., if the Tenant exercises its option for a further term under the Lease, and is not in breach of the Lease at the end of the option term, the Landlord will waive the Tenant's obligation to Make Good at the end of the option term. The Tenant must, on or before the Expiry Date of the option term, remove personal property, rectify any damage caused by the removal and leave the Premises in a clean and tidy condition."] },
            { text: 'Opt7', expectedTexts: [`While the Tenant is T.E.S.T., the Landlord will accept an amount of $20.00 (indexed annually by CPI) in lieu of the Tenant carrying out its make good obligations under the Lease, provided the Tenant has not been in breach of its obligations under the Lease and has remained in occupation of the Premises for the entire Term. The Tenant and Landlord will agree whether the Tenant vacates 3 months early to allow time for the make good to be carried out or pay an additional 3 months' rent and remain in occupation of the Premises until the Expiry Date.`] },
            { text: 'Opt8', expectedTexts: ["By the earlier of the Expiry Date and the date on which this Lease is terminated the Tenant must vacate the Premises and pay an amount of $23.00 per sqm (plus GST) as the redecoration fee. Unless otherwise agreed between the parties, the Tenant must reinstate any changes the Tenant makes to the fitout, any services or structural changes so that the Premises is in the same condition and configuration as documented in the Tenancy Condition Report and associated floorplans. The Tenant must also remove the Tenant's property (and make good any damage caused by that removal) and leave the Premises in a clean and tidy condition free of any rubbish and personal belongings."] },

        ];
        for (const option of dropdownOptions) {
            await offerSummaryOiTest.item20MakeGoodClauseDropDown.click();
            await offerSummaryOiTest[`item20MakeGoodClauseDropDown${option.text}`].click();
            if (option.text === 'Opt7') {
                await offerSummaryOiTest.item20MakeGoodAmtInput.type('20');
            }
            if (option.text === 'Opt8') {
                await offerSummaryOiTest.item20RedecorationFeeInput.type('23');
            }
            await offerSummaryOiTest.makeGoodGenerateTextBtn.click();
            let generatedText = await offerSummaryOiTest.item20MakeGoodGenerateTextBox.innerText();
            for (const expectedText of option.expectedTexts) {
                expect(generatedText.trim()).toContain(expectedText.trim());
            }
        }
    });

    test('ValidateOfferFields16 - Verify error messages for item 2 area and type mandatory fields on an offer O&I form', {
        tag: '@InternalUser',
    }, async ({ page }) => {
        await lmsHomePageTest.dealsLink.click();
        await dealIndexPageTest.newDealBtn.click();
        await dealNewPanelTest.linkToExistingProspect(newDealData.TenantName);
        await dealNewPanelTest.enterNewDealInputData(newDealData);
        await dealNewPanelTest.setDealAdminAndCreateDeal(newDealData);
        await offerNewPanelTest.createOffer(offerNewPanelTest.templateOIRadio);
        await formInputHelper.clearInputValue(offerSummaryOiTest.item2PremisesAreaInput);
        await offerSummaryOiTest.saveBtn.click();
        await formInputHelper.assertTooltip(offerSummaryOiTest.item2PremisesAreaWarningIcon, /^Area \(sqm\) of .+ is required$/);
        await offerSummaryOiTest.item2PremisesAreaInput.type('490');
        await offerSummaryOiTest.saveBtn.click();
        await formInputHelper.assertTooltip(offerSummaryOiTest.item2PremisesAreaWarningIcon, /^Area \(sqm\) of [A-Z0-9-]+ - Unit area cannot be changed by more than \d+(\.\d+)?% from \d+(\.\d+)? sqm$/);
        await formInputHelper.assertTooltip(offerSummaryOiTest.item2PremisesTypeWarningIcon, /^Premises Type of .+ is required$/);

    });

    test('ValidateOfferFields17 - Verify error messages for item 3 term year, term months and lease commencement date mandatory fields on an offer O&I form', {
        tag: '@InternalUser',
    }, async ({ page }) => {
        await navigationHelper.navigateToDealPage();
        await navigationHelper.navigateToSelectedDealOffersPage();
        await formInputHelper.clearInputValue(offerSummaryOiTest.item3TermYearInput);
        await offerSummaryOiTest.saveBtn.click();
        await formInputHelper.assertTooltip(offerSummaryOiTest.item3TermYearWarningIcon, 'Term Year is required');
        await formInputHelper.clearInputValue(offerSummaryOiTest.item3TermMonthsInput);
        await offerSummaryOiTest.saveBtn.click();
        await formInputHelper.assertTooltip(offerSummaryOiTest.item3TermMonthsWarningIcon, 'Term Months is required');
        await formInputHelper.inputNewValue(offerSummaryOiTest.item3LeaseCommencementDateInput, '41/12/2024');
        await formInputHelper.assertTooltip(offerSummaryOiTest.item3LeaseCommencementDateWarningIcon, 'Invalid date');

    });

    test('ValidateOfferFields18 - Verify error messages for item 4 expiry date mandatory field on an offer O&I form', {
        tag: '@InternalUser',
    }, async ({ page }) => {

        await navigationHelper.navigateToDealPage();
        await navigationHelper.navigateToSelectedDealOffersPage();
        await formInputHelper.clearInputValue(offerSummaryOiTest.item4ExpiryDateInput);
        await offerSummaryOiTest.saveBtn.click();
        await formInputHelper.assertTooltip(offerSummaryOiTest.item4ExpiryDateWarninIcon, 'Expiry Date is required');

    });

    test('ValidateOfferFields19 - Verify error messages for item 5 area, base rent and rent commencement date mandatory fields on an offer O&I form', {
        tag: '@InternalUser',
    }, async ({ page }) => {

        await navigationHelper.navigateToDealPage();
        await navigationHelper.navigateToSelectedDealOffersPage();
        await formInputHelper.clearInputValue(offerSummaryOiTest.item5RentPremisesAreaInput);
        await offerSummaryOiTest.saveBtn.click();
        await formInputHelper.assertTooltip(offerSummaryOiTest.item5RentPremisesAreaWarningIcon, /^Area \(sqm\) of .+ is required$/);
        await offerSummaryOiTest.item5RentPremisesAreaInput.type('490');
        await offerSummaryOiTest.saveBtn.click();
        await formInputHelper.assertTooltip(offerSummaryOiTest.item5RentPremisesAreaWarningIcon, /^Area \(sqm\) of [A-Z0-9-]+ - Unit area cannot be changed by more than \d+(\.\d+)?% from \d+(\.\d+)? sqm$/);
        await formInputHelper.clearInputValue(offerSummaryOiTest.item5BaseRentInput);
        await offerSummaryOiTest.saveBtn.click();
        await formInputHelper.assertTooltip(offerSummaryOiTest.item5RentPremisesBaseRentWarningIcon, /^Base Rent \(psqm\) of .+ is required$/);
        await formInputHelper.clearInputValue(offerSummaryOiTest.item5RentCommencementDateInput);
        await offerSummaryOiTest.saveBtn.click();
        await formInputHelper.assertTooltip(offerSummaryOiTest.item5RentCommencementDateWarninIcon, 'Rent Commencement Date is required');
        await offerSummaryOiTest.item5RentCommencementDateInput.type('12/12/2023');
        await offerSummaryOiTest.saveBtn.click();
        await formInputHelper.assertTooltip(offerSummaryOiTest.item5RentCommencementDateWarninIcon, 'Lease commencement date has changed');
    });

    test('ValidateOfferFields20 - Verify error messages for item 20 notice period mandatory field on an offer O&I form', {
        tag: '@InternalUser',
    }, async ({ page }) => {

        await navigationHelper.navigateToDealPage();
        await navigationHelper.navigateToSelectedDealOffersPage();
        await offerSummaryOiTest.item20NoticePeriodInput.press('Control+A');
        await offerSummaryOiTest.item20NoticePeriodInput.press('Backspace');
        await offerSummaryOiTest.saveBtn.click();
        await formInputHelper.assertTooltip(offerSummaryOiTest.item20NoticePeriodWarningIcon, 'Tenant Notice Period Months is required');

    });

    test('ValidateOfferFields21 - Verify date format in an offer O&I form', {
        tag: '@InternalUser',
    }, async ({ page }) => {

        await navigationHelper.navigateToDealPage();
        await navigationHelper.navigateToSelectedDealOffersPage();
        await dateHelper.assertDateFormat('input.mat-datepicker-input');

    });

    test('ValidateOfferFields22 - Verify item2 premises area input accepts only numeric values', {
        tag: '@InternalUser',
    }, async ({ page }) => {

        await navigationHelper.navigateToDealPage();
        await navigationHelper.navigateToSelectedDealOffersPage();
        await formInputHelper.assertEnteredValue(offerSummaryOiTest.item2PremisesAreaInput, '1234');
        await formInputHelper.assertAlphaNumericValueIsNotEntered(offerSummaryOiTest.item2PremisesAreaInput, 'abcd');

    });

    test('ValidateOfferFields23 - Verify item2 premises type drop down values', {
        tag: '@InternalUser',
    }, async ({ page }) => {

        await navigationHelper.navigateToDealPage();
        await navigationHelper.navigateToSelectedDealOffersPage();
        await formInputHelper.assertDropdownOptions(offerSummaryOiTest.item2PremisesTypeDropdown,
            ['Surveyed', 'Estimated']
        );
    });

    test('ValidateOfferFields24 - Verify calculated fields expiry date and rent commencement date', {
        tag: '@InternalUser',
    }, async ({ page }) => {

        await navigationHelper.navigateToDealPage();
        await navigationHelper.navigateToSelectedDealOffersPage();
        await formInputHelper.inputNewValue(offerSummaryOiTest.item3TermYearInput, '2');
        await formInputHelper.inputNewValue(offerSummaryOiTest.item3TermMonthsInput, '2');
        await formInputHelper.inputNewValue(offerSummaryOiTest.item3LeaseCommencementDateInput, '12/12/2024');
        await offerSummaryOiTest.saveBtn.click();
        await offerSummaryOiTest.expiryDateBtn.click();
        let expiryDate = await offerSummaryOiTest.item4ExpiryDateInput.inputValue();
        expect(expiryDate).toEqual('11/2/2027');
        await offerSummaryOiTest.calculateRentCommencementDateBtn.click();
        let rentCommencementDate = await offerSummaryOiTest.item5RentCommencementDateInput.inputValue();
        expect(rentCommencementDate).toEqual('12/12/2024');
    });

    test('ValidateOfferFields25 - Edit premises blurb field and verify updated text', {
        tag: '@InternalUser',
    }, async ({ page }) => {

        await navigationHelper.navigateToDealPage();
        await navigationHelper.navigateToSelectedDealOffersPage();
        await offerSummaryOiTest.item2PremisesEditBtn.click();
        await offerSummaryOiTest.editRichText.type('test');
        await offerSummaryOiTest.leasedPremisesApplyBtn.click();
        let premisesBlurbText = await offerSummaryOiTest.item2PremisesGenerateTextBox.innerText();
        expect(premisesBlurbText).toContain('test');
    });
});