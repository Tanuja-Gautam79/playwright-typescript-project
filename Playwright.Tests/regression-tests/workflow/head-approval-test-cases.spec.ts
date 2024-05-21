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
import DealHeadsPageTest from "../../src/pages/deals/deal-heads-page-test";
import OfferOiApprovalPageTest from "../../src/pages/workflow/offer-oi-approval-page-test";
import HeadOiApprovalPageTest from "../../src/pages/workflow/heads-oi-approval-page-test";
import DealLeasingFeePage from "../../src/pages/deals/deal-leasing-fee-page-test";
import WorkflowHelper from "../../src/helpers/workflow-helper";
import DealSummaryPageTest from "../../src/pages/deals/deal-summary-page-test";

const { baseUrl } = process.env;

test.describe('Approve O&I head workflow test cases', async () => {

    let formInputHelper, offerSummaryOiTest, dealViewPageTest, dealIndexPageTest, lmsHomePageTest, dealNewPanelTest, offerNewPanelTest, dealOffersPageTest, dealHeadsPageTest, offerOiApprovalPageTest, headOiApprovalPageTest, dealLeasingFeePage, workflowHelper, dealSummaryPageTest;

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
        headOiApprovalPageTest = new HeadOiApprovalPageTest(page);
        dealHeadsPageTest = new DealHeadsPageTest(page);
        dealLeasingFeePage = new DealLeasingFeePage(page);
        workflowHelper = new WorkflowHelper(page);
        dealSummaryPageTest = new DealSummaryPageTest(page);
    });

    test.only('HeadApproval01 - Approve an O&I head workflow', {
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
        await dealViewPageTest.headsLink.click();
        await dealHeadsPageTest.headsSetupBtn.click();
        await headOiApprovalPageTest.headsSetupOutBudgetRadioBtn.click();
        await headOiApprovalPageTest.workflowNextStepBtn.click();
        await headOiApprovalPageTest.actionsNextStepBtn.click();
        await headOiApprovalPageTest.startWorkflowBtn.click();
        await headOiApprovalPageTest.actionCompleteBtn.click();
        await headOiApprovalPageTest.confirmActionCompleteBtn.click();
        await headOiApprovalPageTest.signedDateInput.type('20/05/2024');
        const fileLocation = 'upload/Test.docx';
        await headOiApprovalPageTest.fileInput.setInputFiles([fileLocation]);
        await headOiApprovalPageTest.actionInputFieldsSaveBtn.click();
        await headOiApprovalPageTest.actionOnBehalfBtn.click();
        await headOiApprovalPageTest.actionCompleteBtn.click();
        await headOiApprovalPageTest.confirmActionCompleteBtn.click();
        await headOiApprovalPageTest.reviewHeadMetricsTask.click();
        await headOiApprovalPageTest.approveBtn.click();
        await headOiApprovalPageTest.confirmationApproveBtn.click();
        await dealViewPageTest.leasingFeesLink.click();
        await dealLeasingFeePage.calculateFeesBtn.click();
        await workflowHelper.calculateLeasingFee();
        await dealViewPageTest.summaryLink.click();
        await dealSummaryPageTest.addcontactBtn.click();
        await workflowHelper.addContact();
        await dealViewPageTest.headsLink.click();
        await headOiApprovalPageTest.actionProceedBtn.click();
        await headOiApprovalPageTest.confirmActionCompleteBtn.click();
        await headOiApprovalPageTest.customerSurveyStep.click();
        await headOiApprovalPageTest.contactRecipientsSigningOpt.click();
        await headOiApprovalPageTest.contactRecipientsMoveInOpt.click();
        await headOiApprovalPageTest.approveBtn.click();
        await headOiApprovalPageTest.confirmActionCompleteBtn.click();
    });

});