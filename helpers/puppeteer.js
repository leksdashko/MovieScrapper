import puppeteer from 'puppeteer';

export const LAUNCH_PUPPETEER_OPTS = {
    args: [

    ]
};

export const PAGE_PUPPETEER_OPTS = {

};

export async function getPageContent(url){
    try {
        const browser = await puppeteer.launch(LAUNCH_PUPPETEER_OPTS);
        const page = await browser.newPage();
        await page.goto(url, PAGE_PUPPETEER_OPTS);
        const content = await page.content();
        browser.close();

        return content;
    } catch (err) {
        throw err
    }
}