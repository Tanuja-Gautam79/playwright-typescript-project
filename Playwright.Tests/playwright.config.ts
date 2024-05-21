import { defineConfig, devices } from '@playwright/test';
/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testDir: './regression-tests',
    workers: 1,
    timeout: 60 * 1000 * 5,

    reporter: [
        ["html", { outputFile: "./reports/htmlReport.html", open: "never" }]],
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {

        testIdAttribute: 'id',
        headless: false,
        launchOptions: {
            args: ['--auth-server-allowlist="_"'],

        },
        screenshot: "on",
        video: "on",
        trace: 'on',

    },

    /* Configure projects for major browsers */
    projects: [
        // Setup project
        // { name: 'setup', testMatch: /.*\.setup\.ts/, testDir: './setup' },
        {
            name: "chrome",

            use: {
                ...devices["Desktop Chrome"],
                storageState: 'playwright/.auth/user.json'
            }
            // dependencies: ['setup'],
        }
    ],
});
