const { test: base, expect } = require('./base.fixture');
const users = require('../data/user');
const test = base.extend({


    authenticatedPage: async ({ pageManager }, use) => {
        //login stesp
        /** @type {import('../manager/PageManager')} */
        const pm = pageManager;
        const loginPage = pm.getLoginPage();
        await loginPage.navigate();
        await loginPage.login(users.admin);

        const homePage = pm.getHomePage();
        await homePage.verifyHomePage();








        await use(pageManager);
    }
});

module.exports = {
    test,
    expect
};