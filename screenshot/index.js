const puppeteer = require("puppeteer");
const pp = require("puppeteer/package.json");

module.exports = async function (context, req) {
    const url = req.query.url || "https://google.com/";
    const browser = await puppeteer.launch();
	const pversion = pp.version;
	const version = await browser.version();
    const page = await browser.newPage();
    await page.goto(url);
    const screenshotBuffer = await page.screenshot({ fullPage: true });
    await browser.close();

    context.res = {
        body: screenshotBuffer,
        headers: {
            "content-type": "image/png",
			"chrome-version": version,
			"puppeteer-version": pversion
        }
    };
};