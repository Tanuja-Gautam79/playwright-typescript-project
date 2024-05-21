import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import FormInputHelper from "../../src/helpers/form-input-helper";
import DealIndexPageTest from "../../src/pages/deals/deal-index-page-test";
import DealViewPageTest from "../../src/pages/deals/deal-view-page-test";
import HomePageTest from "../../src/pages/home/home-page-test";
import DealNewPanelTest from "../../src/pages/deals/deal-new-panel-test";
import OfferNewPanelTest from "../../src/pages/offer/offer-new-panel-test";
import OfferSummaryOiTest from "../../src/pages/offer/offer-templates/offer-summary-oi-page-test";
import newDealData from "../../test-data/deal-test-data.json";
import DealOffersPageTest from "../../src/pages/deals/deal-offers-page-test";
import OfferOiApprovalPageTest from "../../src/pages/workflow/offer-oi-approval-page-test";

const { baseUrl } = process.env;

test.describe('Approve O&I Offer workflow test cases', async () => {

    let formInputHelper, offerSummaryOiTest, dealViewPageTest, dealIndexPageTest, lmsHomePageTest, dealNewPanelTest, offerNewPanelTest, dealOffersPageTest, offerOiApprovalPageTest;

    test.beforeEach(async ({ page }) => {
        if (!baseUrl) {
            throw new Error('Environment variables are not properly set.');
        }
        await page.context().clearCookies();
        const { cookies } = JSON.parse(fs.readFileSync('playwright/.auth/user2.json', 'utf8'));
        await page.context().addCookies(cookies);
        await page.goto(baseUrl);
        formInputHelper = new FormInputHelper(page);
        offerSummaryOiTest = new OfferSummaryOiTest(page);
        lmsHomePageTest = new HomePageTest(page);
        dealIndexPageTest = new DealIndexPageTest(page);
        dealNewPanelTest = new DealNewPanelTest(page);
        offerNewPanelTest = new OfferNewPanelTest(page);
        dealViewPageTest = new DealViewPageTest(page);
        dealOffersPageTest = new DealOffersPageTest(page);
        offerOiApprovalPageTest = new OfferOiApprovalPageTest(page);
    });

    test('OfferApproval01 - Approve an O&I offer workflow', {
        tag: '@InternalUser',
    }, async ({ page }) => {
        await lmsHomePageTest.dealsLink.click();
        await dealIndexPageTest.newDealBtn.click();
        await dealNewPanelTest.linkToExistingProspect(newDealData.TenantName);
        await dealNewPanelTest.enterNewDealInputData(newDealData);
        await dealNewPanelTest.setDealAdminAndCreateDeal(newDealData);
        await offerNewPanelTest.createOffer(offerNewPanelTest.templateOIRadio);
        await offerSummaryOiTest.bindingOfferToggle.click();
        await offerSummaryOiTest.verifyTenantType();
        await offerSummaryOiTest.selectTenantABN();
        await offerSummaryOiTest.enterTrust("test");
        await offerSummaryOiTest.enterAreaAndSelectTypeDropdown('397.4', offerSummaryOiTest.item2PremisesTypeDropdownOpt1);
        await offerSummaryOiTest.enterTermYearAndMonth('2', '4');
        await offerSummaryOiTest.expiryDateBtn.click();
        await offerSummaryOiTest.enterBaseRentAndRentCommencementDate(1);
        await offerSummaryOiTest.enterNoticePeriod('3');
        await offerSummaryOiTest.selectLeasinDepositOption();
        await formInputHelper.selectCheckbox(" Dispute Resolution ");
        await formInputHelper.selectCheckbox(" Binding Offer ");
        await offerSummaryOiTest.clickGenerateTextButton();
        await formInputHelper.assertWarningMessageVisibility();
        await dealViewPageTest.offersLink.click();
        await dealOffersPageTest.offerApprovalBtn.click();
        await offerOiApprovalPageTest.offerWorkflowApprovalTestOption.click();
        await offerOiApprovalPageTest.offerWorkflowNextStepBtn.click();
        await offerOiApprovalPageTest.actionsNextStepBtn.click();
        await offerOiApprovalPageTest.startWorkflowBtn.click();
        await offerOiApprovalPageTest.approveBtn.click();
        await offerOiApprovalPageTest.confirmationApproveBtn.click();
        await offerOiApprovalPageTest.offerApprovalPortfolioHead.click();
        await offerOiApprovalPageTest.approveBtn.click();
        await offerOiApprovalPageTest.confirmationApproveBtn.click();
        let offerWorkflowStatus = await offerOiApprovalPageTest.workflowStatus.innerText();
        expect(offerWorkflowStatus.trim()).toBe('COMPLETE');
    });

});