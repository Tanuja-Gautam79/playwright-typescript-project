import { test } from '@playwright/test';
import FormInputHelper from "../../../src/helpers/form-input-helper";
import DealIndexPageTest from "../../../src/pages/deals/deal-index-page-test";
import HomePageTest from "../../../src/pages/home/home-page-test";
import DealNewPanelTest from "../../../src/pages/deals/deal-new-panel-test";
import OfferNewPanelTest from "../../../src/pages/offer/offer-new-panel-test";
import OfferSummaryOiTest from "../../../src/pages/offer/offer-templates/offer-summary-oi-page-test";
import dealData from "../../../test-data/deal-creation-data-internal-user.json";

const { baseUrl } = process.env;

test.describe('Create O&I Offer test cases', async () => {

    let formInputHelper, offerSummaryOiTest, dealIndexPageTest, lmsHomePageTest, dealNewPanelTest, offerNewPanelTest;

    test.beforeEach(async ({ page }) => {
        if (!baseUrl) {
            throw new Error('Environment variables are not properly set.');
        }
        await page.goto(baseUrl);
        formInputHelper = new FormInputHelper(page);
        offerSummaryOiTest = new OfferSummaryOiTest(page);
        lmsHomePageTest = new HomePageTest(page);
        dealIndexPageTest = new DealIndexPageTest(page);
        dealNewPanelTest = new DealNewPanelTest(page);
        offerNewPanelTest = new OfferNewPanelTest(page);

    });

    test('CreateO&IOffer01 - Creates an O&I offer as an internal user', {
        tag: '@InternalUser',
    }, async ({ page }) => {
        await lmsHomePageTest.dealsLink.click();
        await dealIndexPageTest.newDealBtn.click();
        await dealNewPanelTest.linkToExistingProspect(dealData[1].TenantName);
        await dealNewPanelTest.enterNewDealInputData(dealData[1]);
        await dealNewPanelTest.setDealAdminAndCreateDeal(dealData[1]);
        await offerNewPanelTest.createOffer(offerNewPanelTest.templateOIRadio);
        await offerSummaryOiTest.bindingOfferToggle.click();
        await offerSummaryOiTest.verifyTenantType();
        await offerSummaryOiTest.selectTenantABN();
        await offerSummaryOiTest.enterTrust("test");
        await offerSummaryOiTest.enterAreaAndSelectTypeDropdown(0,offerSummaryOiTest.item2PremisesTypeDropdownOpt1);
        await offerSummaryOiTest.enterTermYearAndMonth('2','4');
        await offerSummaryOiTest.expiryDateBtn.click();
        await offerSummaryOiTest.enterBaseRentAndRentCommencementDate(1);
        await offerSummaryOiTest.enterNoticePeriod('3');
        await offerSummaryOiTest.selectLeasinDepositOption();
        await formInputHelper.selectCheckbox(" Dispute Resolution ");
        await formInputHelper.selectCheckbox(" Binding Offer ");
        await offerSummaryOiTest.clickGenerateTextButton();
        await formInputHelper.assertWarningMessageVisibility();
    });

});