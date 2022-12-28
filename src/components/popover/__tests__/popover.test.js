import puppeteer from "puppeteer";

describe('Page start', () => {
    let browser;
    let page;

    beforeEach(async () => {
        browser = await puppeteer.launch({
            handless: false,
            slowMo: 100,
            devtools: true
        });
        page = await browser.newPage()
    });

    test('popover test', async () => {
        await page.goto('http://localhost:8080');
        await page.waitForSelector('.btn_danger');
        await page.click('.btn_danger');
        await page.waitForSelector('.popover');
        await page.click('.btn_danger');
        await page.$('.popover') === null;
    });

    afterAll(async () => {
        await browser.close();
    })
});

