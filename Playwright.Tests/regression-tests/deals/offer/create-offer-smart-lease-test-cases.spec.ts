import { test } from '@playwright/test';
import FormInputHelper from "../../../src/helpers/form-input-helper";
import DealIndexPageTest from "../../../src/pages/deals/deal-index-page-test";
import HomePageTest from "../../../src/pages/home/home-page-test";
import DealNewPanelTest from "../../../src/pages/deals/deal-new-panel-test";
import OfferNewPanelTest from "../../../src/pages/offer/offer-new-panel-test";
import OfferSummarySmartLeaseTest from "../../../src/pages/offer/offer-templates/offer-summary-smart-lease-page-test";
import dealData from "../../../test-data/deal-creation-data-internal-user.json";
import NavigationHelper from '../../../src/helpers/navigation-helper';

const { baseUrl } = process.env;

test.describe('Create O&I Offer test cases', async () => {

    let formInputHelper, navigationHelper, offerSummarySmartLeaseTest, dealIndexPageTest, lmsHomePageTest, dealNewPanelTest, offerNewPanelTest;

    test.beforeEach(async ({ page }) => {
        if (!baseUrl) {
            throw new Error('Environment variables are not properly set.');
        }
        await page.goto(baseUrl);
        formInputHelper = new FormInputHelper(page);
        navigationHelper = new NavigationHelper(page);
        offerSummarySmartLeaseTest = new OfferSummarySmartLeaseTest(page);
        lmsHomePageTest = new HomePageTest(page);
        dealIndexPageTest = new DealIndexPageTest(page);
        dealNewPanelTest = new DealNewPanelTest(page);
        offerNewPanelTest = new OfferNewPanelTest(page);

    });

    test('CreateSmartLeaseOffer01 - Creates a smart lease offer as an internal user', {
        tag: '@InternalUser',
    }, async ({ page }) => {
        await lmsHomePageTest.dealsLink.click();
        await dealIndexPageTest.newDealBtn.click();
        await dealNewPanelTest.linkToExistingProspect(dealData[0].TenantName);
        await dealNewPanelTest.enterNewDealInputData(dealData[0]);
        await dealNewPanelTest.setDealAdminAndCreateDeal(dealData[0]);
        await offerNewPanelTest.createOffer(offerNewPanelTest.templateSmartLeaseRadio);
        await offerSummarySmartLeaseTest.selectTenantABN();
        await offerSummarySmartLeaseTest.selectPremisesTypeDropdown(offerSummarySmartLeaseTest.premisesTypeDropdownOpt1);
        await offerSummarySmartLeaseTest.enterTerm('2','4');
        await offerSummarySmartLeaseTest.enterGrossBaseRentAndSelectRentPayble('1');
        await offerSummarySmartLeaseTest.existingFitoutRadioBtn.click();
        await offerSummarySmartLeaseTest.securityAmountInput.fill('0');
        await offerSummarySmartLeaseTest.bankGuaranteeRadioBtn.click();
        await offerSummarySmartLeaseTest.amenityFeeIcon.click();
        await offerSummarySmartLeaseTest.movingOutSelect.click();
        await offerSummarySmartLeaseTest.movingOutSelectOpt1.click();
        await offerSummarySmartLeaseTest.earlyAccessNoRadioBtn.click();
        await offerSummarySmartLeaseTest.redevelopmentNoRadioBtn.click();
        await offerSummarySmartLeaseTest.tenantSigningOptionsRadioBtn1.click();
        await offerSummarySmartLeaseTest.addTenantContact('bina shrshr',' Tenant Signing Contact ');
        await offerSummarySmartLeaseTest.generateAllText();
        await formInputHelper.assertWarningMessageVisibility();

    });

});