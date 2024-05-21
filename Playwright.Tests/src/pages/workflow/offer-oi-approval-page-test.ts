import { Locator, Page} from "@playwright/test";

export default class OfferOiApprovalPageTest {
    
    readonly offerWorkflowApprovalTestOption: Locator;
    readonly offerWorkflowApprovalInBudgetOption: Locator;
    readonly offerWorkflowOutOfBudgetOption: Locator;
    readonly offerWorkflowApprovalInBudgetTestOption: Locator;
    readonly offerWorkflowNextStepBtn: Locator;
    readonly actionsNextStepBtn: Locator;
    readonly startWorkflowBtn: Locator;
    readonly approveBtn: Locator;
    readonly confirmationApproveBtn: Locator;
    readonly offerApprovalPortfolioHead: Locator;
    readonly workflowTab: Locator;
    readonly workflowStatus: Locator;
    
    constructor(public page: Page) {

        this.offerWorkflowApprovalTestOption = this.page.getByTestId('offer-summary-test-option');
        this.offerWorkflowApprovalInBudgetOption = this.page.getByTestId('offer-summary-approval-in-budget-option');
        this.offerWorkflowOutOfBudgetOption = this.page.getByTestId('offer-summary-approval-out-budget-option');
        this.offerWorkflowApprovalInBudgetTestOption = this.page.getByTestId('offer-summary-approval-in-budget-test-option');
        this.offerWorkflowNextStepBtn = this.page.getByTestId('workflow-next-step-button');
        this.actionsNextStepBtn = this.page.getByTestId('actions-next-step-button');
        this.startWorkflowBtn = this.page.getByTestId('summary-start-workflow-button');
        this.approveBtn = this.page.getByTestId('action-approval-approve-button');
        this.confirmationApproveBtn = this.page.getByTestId('confirmation-primary-action-button');
        this. offerApprovalPortfolioHead = this.page.locator('//div[text()=" Offer Approval - Portfolio Head "]');
        this.workflowTab = this.page.getByTestId('workflow1-tab');
        this.workflowStatus = this.page.locator('//span[text()=" Complete "]');

    }

}