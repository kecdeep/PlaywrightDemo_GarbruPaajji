const { test } = require('@playwright/test');
const PageManager = require('../../src/manager/PageManager');


test.beforeEach(async ({ page }) => {
    await page.goto(process.env.BASEURL);
});

test('Place Order', async ({ page }) => {
    //  await page.goto(process.env.BASEURL);

    const pm = new PageManager(page);
    const hm = pm.getHomePage();
    await hm.verifyHomePage();
});

test('Place Order-2', async ({ page }) => {

    const pm = new PageManager(page);
    const hm = pm.getHomePage();
    await hm.verifyHomePage();
});