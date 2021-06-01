const puppeteer = require("puppeteer");
const { ensureDir } = require("fs-extra");
const { getFormattedDate } = require("./utils");

const users = require("../data/users.json");

const INSTAGRAM_URL = "https://www.instagram.com";
const DAILY_FOLDER_NAME = getFormattedDate(new Date());

const selectors = {
    username: 'input[name="username"]',
    password: 'input[name="password"]',
    loginSubmitBtn: "button[type='submit']",
    searchInput: "nav input",
    userAvatar: '[data-testid="user-avatar"]'
};

const loginCredentials = {
    username: "username",
    password: "password",
};

const DEBUG = false;

const closeCookiesDialog = async (page) => {
    console.log("Skipping cookies dialog...");
    await page.$("[role=dialog]");
    const buttons = await page.$$("button");
    
    await buttons[0].click();
    await page.waitForTimeout(2000);
}

(async () => {
    const browser = await puppeteer.launch({ headless: !DEBUG, args: ['--start-maximized'] });
    const page = await browser.newPage();

    if (!DEBUG) {
        // Running in headless mode fails to load Instagram (https://github.com/puppeteer/puppeteer/issues/6318)
        // Sets user agent
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36');
    }

    await page.setViewport({ width: 1366, height: 768 });
    await page.goto(INSTAGRAM_URL);

    await closeCookiesDialog(page);

    // Enter username
    await page.waitForSelector(selectors.username);

    console.log("Typing username...");
    const username = await page.$(selectors.username);
    await username.focus();
    await username.type(loginCredentials.username);

    // Enter password
    console.log("Typing password...");
    const password = await page.$(selectors.password);
    await password.focus();
    await password.type(loginCredentials.password);

    // Click submit button
    console.log("Submit login...");
    await page.waitForSelector(selectors.loginSubmitBtn);
    await page.click(selectors.loginSubmitBtn);

    await page.waitForSelector(selectors.searchInput);

    await ensureDir(DAILY_FOLDER_NAME);

    for (let j = 0; j < users.length; j++) {
        const accountName = users[j].name;
        const userDir = `${DAILY_FOLDER_NAME}/${accountName}`;
        await ensureDir(userDir);

        console.log(`Fetching user stories for: ${accountName} ...`);

        const newPage = await browser.newPage();

        newPage.on("response", async (response) => {
            if (response.url().match("/feed/reels_media/") && response.request().method() === "GET" && response.status() === 200) {
                const storiesData = await response.json();
                const userStoriesItems = storiesData["reels_media"][0].items;

                for (let i = 0; i < userStoriesItems.length; i++) {
                    const element = userStoriesItems[i];
                    const imgItems = element["image_versions2"].candidates;

                    await newPage.goto(imgItems[0].url); // Open first candidate image url
                    await newPage.screenshot({
                        path: `${userDir}/story${i}.png`,
                        omitBackground: true,
                    });
                }

                newPage.close();
            }
        });

        await newPage.goto(`${INSTAGRAM_URL}/${accountName}/`, {
            waitUntil: "networkidle0",
        });

        await newPage.waitForSelector(selectors.userAvatar);
        const user = await newPage.$(selectors.userAvatar);

        await user.click();
    }

    await browser.close();

})();
