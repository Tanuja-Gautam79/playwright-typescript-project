import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import dealInternalUserData from "../../test-data/deal-creation-data-internal-user.json";
import dealExternalUserData from "../../test-data/deal-creation-data-external-user.json"
import DealIndexPageTest from "../../src/pages/deals/deal-index-page-test";
import HomePageTest from "../../src/pages/home/home-page-test";
import DealNewPanelTest from "../../src/pages/deals/deal-new-panel-test";

const { baseUrl, testDataFile } = process.env;

test.describe('Create Deal Test Cases', async () => {

    let dealIndexPageTest, lmsHomePageTest, dealNewPanelTest;

    test.beforeEach(async ({ page }) => {
        if (!baseUrl || !testDataFile) {
            throw new Error('Environment variables are not properly set.');
        }
        lmsHomePageTest = new HomePageTest(page);
        dealIndexPageTest = new DealIndexPageTest(page);
        dealNewPanelTest = new DealNewPanelTest(page);
    });

    for (let i = 0; i < dealInternalUserData.length; i++) {
        const data = dealInternalUserData[i];
        test(`CreateDeal01 - As an internal user, create a new Deal ${i + 1} and link it with new prospect with Tenant Source as ${data.TenantSource}`, {
            tag: '@InternalUser',
        }, async ({ page }) => {
            await page.goto(baseUrl);
            await lmsHomePageTest.dealsLink.click();
            await dealIndexPageTest.newDealBtn.click();
            await dealNewPanelTest.unlinkFromExistingProspect(data.TenantName, data.RepCompany, data.Rep)
            await dealNewPanelTest.enterNewDealInputData(data);
            await dealNewPanelTest.setDealAdminAndCreateDeal(data);
            await dealNewPanelTest.verifyDealIsCreated();
        });
    }

    for (let i = 0; i < dealInternalUserData.length; i++) {
        const data = dealInternalUserData[i];
        test(`CreateDeal02 - As an internal user, create a new Deal ${i + 1} and link it with existing prospect with Tenant Source as ${data.TenantSource}`, {
            tag: '@InternalUser',
        }, async ({ page }) => {
            await page.goto(baseUrl);
            await lmsHomePageTest.dealsLink.click();
            await dealIndexPageTest.newDealBtn.click();
            await dealNewPanelTest.linkToExistingProspect(data.TenantName);
            await dealNewPanelTest.enterNewDealInputData(data);
            await dealNewPanelTest.setDealAdminAndCreateDeal(data);
            await dealNewPanelTest.verifyDealIsCreated();
        });
    }

    for (let i = 0; i < dealExternalUserData.length; i++) {
        const data = dealExternalUserData[i];
        if (data.Description.includes("link it with an existing prospect")) {
            test(`CreateDeal03 - As an external user, create  a new  Deal ${i + 1} and link it with existing prospect with Tenant Source as ${data.TenantSource}`, {
                tag: '@ExternalUser',
            }, async ({ page }) => {
                await page.context().clearCookies();
                const { cookies } = JSON.parse(fs.readFileSync('playwright/.auth/user1.json', 'utf8'));
                await page.context().addCookies(cookies);
                await page.goto(baseUrl);
                await lmsHomePageTest.dealsLink.click();
                await dealIndexPageTest.newDealBtn.click();
                await dealNewPanelTest.linkToExistingProspect(data.TenantName);
                await dealNewPanelTest.enterNewDealInputData(data);
                await expect(dealNewPanelTest.dealOwnerInput).toBeVisible();
                await dealNewPanelTest.dealOwnerInput.click();
                await dealNewPanelTest.dealOwnerInput.fill('Test Hop');
                await dealNewPanelTest.dealOwnerInput.press('Enter');
                await expect(page.locator('#mat-chip-list-2').getByText('No values selected')).toBeVisible();
                await dealNewPanelTest.setDealOwner(data);
                await dealNewPanelTest.setDealAdminAndCreateDeal(data);
                await dealNewPanelTest.verifyDealIsCreated();
            });
        }
        else if (data.Description.includes("link it with a new prospect")) {
            test(`CreateDeal04 - As an external user, create  a new  Deal and link it with new prospect with Tenant Source as ${data.TenantSource}`, {
                tag: '@ExternalUser',
            }, async ({ page }) => {
                await page.context().clearCookies();
                const { cookies } = JSON.parse(fs.readFileSync('playwright/.auth/user1.json', 'utf8'));
                await page.context().addCookies(cookies);
                await page.goto(baseUrl);
                await lmsHomePageTest.dealsLink.click();
                await dealIndexPageTest.newDealBtn.click();
                await dealNewPanelTest.unlinkFromExistingProspect(data.TenantName, data.RepCompany, data.Rep);
                await dealNewPanelTest.enterNewDealInputData(data);
                await expect(dealNewPanelTest.dealOwnerInput).toBeVisible();
                await dealNewPanelTest.dealOwnerInput.click();
                await dealNewPanelTest.dealOwnerInput.fill('Test Hop');
                await dealNewPanelTest.dealOwnerInput.press('Enter');
                await expect(page.locator('#mat-chip-list-2').getByText('No values selected')).toBeVisible();
                await dealNewPanelTest.setDealOwner(data);
                await dealNewPanelTest.setDealAdminAndCreateDeal(data);
                await dealNewPanelTest.verifyDealIsCreated();
            });
        }
    }

});
