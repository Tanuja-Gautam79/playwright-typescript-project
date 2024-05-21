import { Locator, Page } from "@playwright/test";

export default class HeadsOiApprovalPageTest {

    readonly headsSetupOutBudgetRadioBtn: Locator;
    readonly headsSetupInBudgetRadioBtn: Locator;
    readonly workflowNextStepBtn: Locator;
    readonly actionsNextStepBtn: Locator;
    readonly startWorkflowBtn: Locator;
    readonly fileInput: Locator;
    readonly actionOnBehalfBtn: Locator;
    readonly actionCompleteBtn: Locator;
    readonly confirmActionCompleteBtn: Locator;
    readonly cancelActionCompleteBtn: Locator;
    readonly signedDateInput: Locator;
    readonly actionInputFieldsSaveBtn: Locator;
    readonly reviewHeadMetricsTask: Locator;
    readonly approveBtn: Locator;
    readonly rejectBtn: Locator;
    readonly confirmationApproveBtn: Locator;
    readonly actionProceedBtn: Locator;
    readonly customerSurveyStep: Locator;
    readonly contactRecipientsSigningOpt: Locator;
    readonly contactRecipientsMoveInOpt: Locator;
    readonly workflowTab: Locator;
    readonly workflowStatus: Locator;

    constructor(public page: Page) {

        this.headsSetupOutBudgetRadioBtn = this.page.getByTestId('offer-summary-heads-setup-out-budget-option');
        this.headsSetupInBudgetRadioBtn = this.page.getByTestId('offer-summary-heads-setup-in-budget-option');
        this.workflowNextStepBtn = this.page.getByTestId('workflow-next-step-button');
        this.actionsNextStepBtn = this.page.getByTestId('actions-next-step-button');
        this.startWorkflowBtn = this.page.getByTestId('summary-start-workflow-button');
        this.fileInput = this.page.locator('input[type="file"]');
        this.actionOnBehalfBtn = this.page.getByTestId('action-on-behalf-button');
        this.actionCompleteBtn = this.page.getByTestId('action-complete-button');
        this.confirmActionCompleteBtn = this.page.getByTestId('confirmation-primary-action-button');
        this.cancelActionCompleteBtn = this.page.getByTestId('confirmation-secondary-action-button');
        this.signedDateInput = this.page.getByTestId('action-HeadsSignedDate-date-input');
        this.actionInputFieldsSaveBtn = this.page.getByTestId('action-input-fields-save-button');
        this.reviewHeadMetricsTask = this.page.getByTestId('heads-review-metrics-step-title');
        this.approveBtn = this.page.getByTestId('action-approval-approve-button');
        this.rejectBtn = this.page.getByTestId('action-approval-reject-button');
        this.confirmationApproveBtn = this.page.getByTestId('confirmation-primary-action-button');
        this.actionProceedBtn = this.page.getByTestId('action-proceed-button');
        this.customerSurveyStep = this.page.getByTestId('customer-survey-confirmation-step-title');
        this.contactRecipientsSigningOpt = this.page.getByTestId('action-ContactRecipientsSigning-option1');
        this.contactRecipientsMoveInOpt = this.page.getByTestId('action-ContactRecipientsMoveIn-option1');
        this.workflowTab = this.page.getByTestId('workflow1-tab');
        this.workflowStatus = this.page.locator('//span[text()=" Complete "]');

    }

}