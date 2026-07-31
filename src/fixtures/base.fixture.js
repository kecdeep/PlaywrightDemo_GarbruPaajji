const { test: base, expect } = require('@playwright/test');
const PageManager = require('../manager/PageManager');

const test = base.test.extend({

    pageManager: async ({ page }, use) => {
        const pageManager = new PageManager(page);
        await use(pageManager)
    }
});

module.exports = {
    test,
    expect: base.expect
};