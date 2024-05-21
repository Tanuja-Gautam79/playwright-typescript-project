import * as mammoth from 'mammoth';
import { readFileSync } from 'fs';

export default class DocVerification {

    public async extractTextFromWordDocument(filePath: string): Promise<string> {
        const result = await mammoth.extractRawText({ path: filePath });
        return result.value;
    }

    public async extractHtmlFromWordDocument(filePath: string): Promise<string> {
        const result = await mammoth.convertToHtml({ path: filePath });
        return result.value;
    }

    public async assertContentInWordDocument(filePath: string, expectedContent: string): Promise<boolean> {
        const extractedText = await this.extractTextFromWordDocument(filePath);
        console.log("extractedtext==>" + extractedText);
        const extractedTextLower = extractedText.toLowerCase();
        const expectedContentLower = expectedContent.toLowerCase();
        return extractedTextLower.includes(expectedContentLower);
    }

    public async verifyDateFormat(filePath: string, dateFormatRegex: RegExp): Promise<boolean> {
        const extractedText = await this.extractTextFromWordDocument(filePath);
        const matches = extractedText.match(dateFormatRegex);
        if (matches) {
            for (const match of matches) {
                if (!dateFormatRegex.test(match)) {

                    return false;
                }
            }
            return true;
        } else {

            return false;
        }
    }

    public async verifyDocumentContent(filePath: string, expectedContent: string): Promise<boolean> {
        const extractedHtml = await this.extractHtmlFromWordDocument(filePath);
        const extractedLower = extractedHtml.toLowerCase();
        const expectedLower = expectedContent.toLowerCase();
        return extractedLower.includes(expectedLower);
    }

    public syncReadFile(filename: string) {
        const result = readFileSync((filename), 'utf-8');
        return result;
    }

    public verifyExpectedText(filePath: string, expectedText: string): boolean {
        const extractedText = this.syncReadFile(filePath);
        return extractedText.includes(expectedText);
    }
}
export { DocVerification };