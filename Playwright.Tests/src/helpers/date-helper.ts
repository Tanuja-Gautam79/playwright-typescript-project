import { Page } from "@playwright/test";

export default class DateHelper {

    constructor(public page: Page) { }

    public async assertDateFormat(locator: string) {
        const inputElements = await this.page.$$(locator);
        const dateFormatRegex = /^(0[1-9]|[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012]|[1-9])\/\d{4}$/;
        for (const inputElement of inputElements) {
            const inputValue = await inputElement.inputValue();
            console.log(inputValue);
            if (inputValue.trim() !== '' && !dateFormatRegex.test(inputValue)) {
                throw new Error(`Input value "${inputValue}" is not in date format DD/MM/YYYY`);
            }
        }
    }
}