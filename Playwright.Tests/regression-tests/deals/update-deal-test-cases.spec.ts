import { test } from '@playwright/test';
import DealViewPageTest from "../../src/pages/deals/deal-view-page-test";
import DealIndexPageTest from "../../src/pages/deals/deal-index-page-test";
import HomePageTest from "../../src/pages/home/home-page-test";
import DealCommentsPageTest from "../../src/pages/deals/deal-comments-page-test"

const { baseUrl, testDataFile } = process.env;

test.describe('Update Deal Test Cases', async () => {

    let dealViewPageTest, dealIndexPageTest, lmsHomePageTest, dealCommentsPageTest;

    test.beforeEach(async ({ page }) => {
        if (!baseUrl || !testDataFile) {
            throw new Error('Environment variables are not properly set.');
        }
        await page.goto(baseUrl);
        lmsHomePageTest = new HomePageTest(page);
        dealIndexPageTest = new DealIndexPageTest(page);
        dealViewPageTest = new DealViewPageTest(page);
        dealCommentsPageTest = new DealCommentsPageTest(page);

    });

    test(`UpdateDeal01 - Add comment to selected deal`, {
        tag: '@InternalUser',
    }, async ({ page }) => {
        if (!testDataFile) {
            console.error('Test data file is not provided. Skipping the test case.');
            return;
        }
        await lmsHomePageTest.dealsLink.click();
        await dealIndexPageTest.selectDealFromTable(testDataFile);
        await dealViewPageTest.commentsLink.click();
        await dealCommentsPageTest.addCommentsText("test this method");
        await dealCommentsPageTest.verifyCommentIsAdded("test this method");
    });

});
