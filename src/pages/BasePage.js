// @ts-check

class BasePage {
    /**
  * @param {import('@playwright/test').Page} page
  */
    constructor(page) {
        this.page = page;
    }
    /**
         * @param {string} url
         */
    async navigate(url) {
        console.log("Navigating to:", url);

        await this.page.goto(url);
    }
    /**
       * @param {import('@playwright/test').Locator} locator
       */
    async click(locator) {
        await locator.waitFor({ state: 'visible' });
        await locator.scrollIntoViewIfNeeded();

        await locator.click();


    }
    /**
         * @param {import('@playwright/test').Locator} locator
         * @param {string} value
         */
    async enterText(locator, value) {
        await locator.waitFor({ state: 'visible' });
        await locator.fill(value);
    }
    /**
        * @param {import('@playwright/test').Locator} locator
        */
    async getText(locator) {
        return await locator.textContent()
    }

    async waitForLoad() {
        await this.page.waitForLoadState('networkidle');
    }
}
module.exports = BasePage;