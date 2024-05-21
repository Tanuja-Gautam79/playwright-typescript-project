import { Locator, expect } from '@playwright/test';
import { Page } from "@playwright/test";

const { testDataFile } = process.env;

export default class FormInputHelper {
    constructor(public page: Page) { }

    public async selectCheckbox(labelText: string) {
        const checkbox = await this.page.$(`//div[contains(@class, 'custom-checkbox-label') and text()='${labelText}']`);
        if (checkbox) {
            await checkbox.click();
        } else {
            console.error(`Checkbox with text '${labelText}' not found.`);
        }
    }

    public async assertEnteredValue(areaInput: Locator, expectedValue: string) {
        await areaInput.clear();
        await areaInput.type(expectedValue);
        const enteredValue = await areaInput.inputValue();
        expect(enteredValue).toBe(expectedValue);
    }

    public async assertAlphaNumericValueIsNotEntered(areaInput: Locator, expectedValue: string) {
        await areaInput.clear();
        await areaInput.type(expectedValue);
        const enteredValue = await areaInput.inputValue();
        expect(enteredValue).toBe('');
    }

    public async assertDropdownOptions(locator: Locator, expectedValues) {
        await locator.click();

        for (const [index, expectedValue] of expectedValues.entries()) {
            await expect(this.page.locator('//span[@class="mat-option-text"]').nth(index)).toContainText(expectedValue);
        }
    }

    public async assertFreeTextFields(objLocator: Locator) {
        const isEnabled = await objLocator.isEnabled();
        const hasTextType = await objLocator.getAttribute('type') === 'text';
        const isAutocompleteOff = await objLocator.getAttribute('autocomplete') === 'off';
        const isFreeTextField = isEnabled && hasTextType && isAutocompleteOff;
        expect(isFreeTextField).toBeTruthy();
    }

    public async assertFreeTextBodyParagraph(objLocator: Locator) {          // await this.tenantNoticeDetailsEditBtn.click();
        const isContentEditable = await objLocator.getAttribute('contenteditable');
        const isFreeTextField = isContentEditable === 'true';
        expect(isFreeTextField).toBeTruthy();
    }

    public async assertTooltipText(objLocator: Locator, invalidValue: string, tooltipText: string) {
        await objLocator.click();
        await objLocator.fill(invalidValue);
        await objLocator.press('Enter');
        await expect(this.page.locator('mat-form-field').filter({ hasText: tooltipText + '⚠️' }).locator('i')).toBeVisible();
        await this.page.hover('mat-form-field i');
        await this.page.waitForSelector('.mat-tooltip');
        const actualTooltipText = await this.page.textContent('.mat-tooltip');
        expect(actualTooltipText).toEqual(tooltipText + ' is not valid');
    }

    public async assertWarningMessageVisibility() {
        const warningMessageBoxes = await this.page.$$('.message-box.warning');
        let isDisplayed = false;
        for (const warningMessageBox of warningMessageBoxes) {
            const isVisible = await warningMessageBox.isVisible();
            if (isVisible) {
                console.log('Warning message is displayed.');
                isDisplayed = true;
                break;
            }
        }
        if (!isDisplayed) {
            console.error('Warning message is not displayed.');
            isDisplayed = false;
        }
        expect(isDisplayed).toBe(false);
    }

    public formatDate(dateString) {
        const [day, month, year] = dateString.split('/');
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return `${day} ${months[parseInt(month, 10) - 1]} ${year}`;
    }

    public async assertTooltip(element: Locator, expectedRegexPattern: string) {
        await element.hover();
        await this.page.waitForSelector('.mat-tooltip');
        let actualTooltipText = await this.page.textContent('.mat-tooltip');
        expect(actualTooltipText).toMatch(expectedRegexPattern);
    }

    public async inputNewValue(element: Locator, value: string) {
        await element.press('Control+A');
        await element.press('Backspace');
        await element.fill(value);
    }

    public async clearInputValue(element: Locator) {
        await element.press('Control+A');
        await element.press('Backspace');
    }
}