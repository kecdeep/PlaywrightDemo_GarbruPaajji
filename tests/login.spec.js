const { test, expect } = require('@playwright/test')
const PageManager = require('../src/pages/PageManager');
const LoginWorkflow = require('../src/workflows/LoginWorkflow');
const users = require('../src/data/user');

test('login test', async ({ page }) => {
    const pageManager = new PageManager(page);
    const loginWokrflow = new LoginWorkflow(pageManager);

    await loginWokrflow.loginAs(users.admin);
})