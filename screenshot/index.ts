import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import puppeteer from "puppeteer";

const httpTrigger: AzureFunction = async function(context: Context, req: HttpRequest): Promise<void> {
    const url = req.query.url || "https://google.com/";
    const browser = await puppeteer.launch();
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
        }
    };
}

export default httpTrigger;
