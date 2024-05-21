import { Page } from "@playwright/test";
import LeasingFeeAllocationPage from "../pages/leasing-fee/leasing-fee-allocation-panel-test";
import ManageAgenciesRepPage from "../pages/leasing-fee/manage-agencies-rep-panel-test"
import AddContactPanelTest  from "../pages/contacts/add-contact-panel-test";

export default class WorkflowHelper {

    constructor(public page: Page) { }

    public async calculateLeasingFee() {
        const leasingFeeAllocationPage = new LeasingFeeAllocationPage(this.page);
        const manageAgenciesRepPage = new ManageAgenciesRepPage(this.page);
        await leasingFeeAllocationPage.updateAgenciesAndRepBtn.click();
        await manageAgenciesRepPage.appointedAgenciesAddRowBtn.click();
        await manageAgenciesRepPage.agencyDropDown1.click();
        await manageAgenciesRepPage.agencyDropDownOpt1.click();
        await manageAgenciesRepPage.agentDropDown1.click();
        await manageAgenciesRepPage.agentDropDown1Opt1.click();
        await manageAgenciesRepPage.sectorDropDown1.click();
        await manageAgenciesRepPage.sectorDropDown1Opt1.click();
        await manageAgenciesRepPage.appointedAgenciesAddRowBtn.click();
        await manageAgenciesRepPage.agencyDropDown2.click();
        await manageAgenciesRepPage.agencyDropDownOpt2.click();
        await manageAgenciesRepPage.agencyType2DropDown.click();
        await manageAgenciesRepPage.agencyType2DropDownOpt1.click();
        await manageAgenciesRepPage.agentDropDown2.click();
        await manageAgenciesRepPage.agentDropDown2Opt1.click();
        await manageAgenciesRepPage.updateBtn.click();
        await leasingFeeAllocationPage.scenario2RadioBtn.click();
        await leasingFeeAllocationPage.applyBtn.click();
    }

    public async addContact() {
        const addContactPanelTest = new AddContactPanelTest(this.page);
        await addContactPanelTest.contactInput.type('test');
        await addContactPanelTest.contactOption1.click();
        await addContactPanelTest.contactTypeOpt3.click();
        await addContactPanelTest.contactTypeOpt6.click();
        await addContactPanelTest.contactTypeOpt7.click();
        await addContactPanelTest.contactTypeOpt8.click();
        await addContactPanelTest.appFormAddContactBtn.click();

    }
}