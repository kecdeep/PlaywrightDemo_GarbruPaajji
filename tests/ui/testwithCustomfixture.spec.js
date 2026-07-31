const { test, expect } = require('../../src/fixtures/base.fixture');
const users = require('../../src/data/user');

test('Login', async ({ pageManager }) => {


    /** @type {import('../../src/manager/PageManager')} */
    const pm = pageManager;

    const loginPage = pm.getLoginPage();

    await loginPage.navigate();
    await loginPage.login(users.admin);

    const homepage = pm.getHomePage();
    await expect(homepage.verifyHomePage());
});