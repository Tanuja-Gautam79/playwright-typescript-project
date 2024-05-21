import { test as setup, expect, devices, chromium } from '@playwright/test';

const { baseUrl, internalUser, internalUserPassword, externalUser, externalUserPassword, adminUser, adminUserPassword } = process.env;

setup(`authenticate LMS application for internal user `, async ({ page }) => {
    if (!baseUrl) {
        throw new Error('Environment variables are not properly set.');
    }
    await page.context().clearCookies();

    try {
        await page.goto(baseUrl);
        await page.getByPlaceholder('Email, phone, or Skype').click();
        await page.getByPlaceholder('Email, phone, or Skype').fill(internalUser);
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill(internalUserPassword);
        await page.getByRole('button', { name: 'Sign in' }).click();
        await page.getByRole('link', { name: 'I can\'t use my Microsoft' }).click();
        await page.getByRole('button', { name: 'Text +XX XXXXXXX76‎' }).click();
        await page.getByRole('button', { name: 'Verify' }).click();
        await page.getByLabel('Don\'t show this again').check();
        await page.getByRole('button', { name: 'Yes' }).click();
        await page.context().storageState({ path: 'playwright/.auth/user.json' });
    } catch (error) {
        console.error('Error occurred during authentication:', error);
        throw error;
    }
});

setup(`authenticate LMS application for external user `, async ({ page }) => {
    if (!baseUrl) {
        throw new Error('Environment variables are not properly set.');
    }
    await page.context().clearCookies();

    try {
        await page.goto(baseUrl);
        await page.getByPlaceholder('Email, phone, or Skype').click();
        await page.getByPlaceholder('Email, phone, or Skype').fill(externalUser);
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill(externalUserPassword);
        await page.getByRole('button', { name: 'Sign in' }).click();
        await page.getByRole('link', { name: 'I can\'t use my Microsoft' }).click();
        await page.getByRole('button', { name: 'Text +XX XXXXXXX76‎' }).click();
        await page.getByRole('button', { name: 'Verify' }).click();
        await page.getByLabel('Don\'t show this again').check();
        await page.getByRole('button', { name: 'Yes' }).click();
        await page.context().storageState({ path: 'playwright/.auth/user1.json' });
    } catch (error) {
        console.error('Error occurred during authentication:', error);
        throw error;
    }
});

setup(`authenticate LMS application for admin user `, async ({ page }) => {
    if (!baseUrl) {
        throw new Error('Environment variables are not properly set.');
    }
    await page.context().clearCookies();

    try {
        await page.goto(baseUrl);
        await page.getByPlaceholder('Email, phone, or Skype').click();
        await page.getByPlaceholder('Email, phone, or Skype').fill(adminUser);
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill(adminUserPassword);
        await page.getByRole('button', { name: 'Sign in' }).click();
        await page.getByRole('button', { name: 'Yes' }).click();
        await page.context().storageState({ path: 'playwright/.auth/user2.json' });
    } catch (error) {
        console.error('Error occurred during authentication:', error);
        throw error;
    }
});
