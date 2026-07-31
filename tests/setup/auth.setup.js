const { test } = require('@playwright/test');
const PageManager = require('../../src/manager/PageManager');
const users = require('../../src/data/user')


test('Authenticate and save storage state', async ({ page }) => {


    //steps 1- create pagemanager


    const pm = new PageManager(page);
    const loginPage = pm.getLoginPage();
    await loginPage.navigate();
    await loginPage.login(users.admin);

    const homePage = pm.getHomePage();
    await homePage.verifyHomePage();
    await page.context().storageState({
        path: 'playwright/.auth/user.json'

    });
})

