import { Locator, Page, expect } from "@playwright/test";

export default class DealCommentsPageTest {

    readonly commentsTextArea: Locator;
    readonly addCommentIcon: Locator;
    readonly divElementsLocator: string;

    constructor(public page: Page) {

        this.commentsTextArea = this.page.frameLocator('iframe[id="deal-comments-comment-box_ifr"]').getByTestId('tinymce');
        this.addCommentIcon = this.page.getByTestId('deal-comments-save-button');
        this.divElementsLocator = '//h4[text()=" Test PropertyMgr2 "]//following::p[1]';

    }

    public async addCommentsText(test: string) {
        if (this.commentsTextArea) {
            await this.commentsTextArea.click();
            await this.commentsTextArea.fill(test);
            await this.addCommentIcon.click();
        } else {
            console.error("Comments textarea not found.");
        }
    }

    public async verifyCommentIsAdded(expectedText: string) {
        const divElements = await this.page.$$(this.divElementsLocator);
        let textContentFound = false;
        for (const divElement of divElements) {
            const textContent = await divElement.textContent();
            if (textContent === expectedText) {
                textContentFound = true;
                break;
            }
        }
        expect(textContentFound).toBe(true);
    }
}