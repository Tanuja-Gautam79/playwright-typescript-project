import * as fs from 'fs';

export default class ReadTestData {
    public readJsonFile(testDataFilePath: string): Promise<any> {
        return new Promise((resolve, reject) => {
            fs.readFile(testDataFilePath, 'utf8', (err, data) => {
                if (err) {
                    console.error('Error reading test data file:', err);
                    reject(err);
                    return;
                }
                const testData = JSON.parse(data);
                resolve(testData);
            });
        });
    }
}