import { expect } from '@playwright/test';
import { Page } from "@playwright/test";
import homePage from "../pages/home/home-page-test";
import DealIndexPage from "../pages/deals/deal-index-page-test";
import DealViewPage from "../pages/deals/deal-view-page-test";
import DealoffersPage from "../pages/deals/deal-offers-page-test";

const { testDataFile } = process.env;

export default class NavigationHelper {
    constructor(public page: Page) { }

    public async navigateToDealPage() {
        if (!testDataFile) {
            throw new Error('Environment variables are not properly set.');
        }
        const lmsHomePage = new homePage(this.page);
        await lmsHomePage.dealsLink.click();
        const dealIndexPage = new DealIndexPage(this.page);
        await dealIndexPage.selectDealFromTable(testDataFile);
    }

    public async navigateToSelectedDealOffersPage() {
        const dealViewPage = new DealViewPage(this.page);
        await dealViewPage.offersLink.click();
        const dealoffersPage = new DealoffersPage(this.page);
        await dealoffersPage.viewOfferBtn.click();
    }
}