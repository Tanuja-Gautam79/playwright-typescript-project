import { test, expect } from '@playwright/test';
import DealIndexPageTest from "../../../src/pages/deals/deal-index-page-test";
import HomePageTest from "../../../src/pages/home/home-page-test";
import DealViewPageTest from "../../../src/pages/deals/deal-view-page-test";
import DealOffersPageTest from "../../../src/pages/deals/deal-offers-page-test";
import DocVerification from '../../../src/utils/doc-verification';
import * as fs from 'fs';

const { baseUrl, testDataFile } = process.env;

test.describe('Validate Offer doc test cases', async () => {

    let dealIndexPageTest, lmsHomePageTest, dealViewPageTest, dealOffersPageTest, docVerification;

    test.beforeEach(async ({ page }) => {
        if (!baseUrl) {
            throw new Error('Environment variables are not properly set.');
        }
        await page.goto(baseUrl);
        lmsHomePageTest = new HomePageTest(page);
        dealIndexPageTest = new DealIndexPageTest(page);
        dealOffersPageTest = new DealOffersPageTest(page);
        dealViewPageTest = new DealViewPageTest(page);
        docVerification = new DocVerification();

    });

    test('OfferDocGen01 - Generate & download offer document and validate as an internal user', {
        tag: '@InternalUser',
    }, async ({ page }) => {

        await lmsHomePageTest.dealsLink.click();

        if (!testDataFile) {
            console.error('Test data file is not provided. Skipping the test case.');
            return;
        }
        await expect(page.getByText('Deal List')).toBeVisible();
        await dealIndexPageTest.selectDealFromTable(testDataFile);
        await dealViewPageTest.offersLink.click();
        await dealOffersPageTest.generateDocumentBtn.click();
        const downloadPromise = page.waitForEvent('download');
        await page.getByRole('button', { name: 'Generate', exact: true }).click();
        const download = await downloadPromise;
        const downloadFileNameWithPath = 'download/' + download.suggestedFilename();
        console.log(`downloadFileNameWithPath: ${downloadFileNameWithPath}`);
        await download.saveAs(downloadFileNameWithPath);
        const fileSize = fs.statSync(downloadFileNameWithPath).size;
        expect(fileSize).toBeGreaterThan(0);
        expect(download.suggestedFilename()).toContain('.docx');
        const docVerification = new DocVerification();
        const isContentPresent = await docVerification.assertContentInWordDocument(downloadFileNameWithPath, 'Landlord');
        expect(isContentPresent).toBeTruthy();
    });

});