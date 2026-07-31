const { test, expect } = require('@playwright/test');
const AuthAPI = require('../../src/api/clients/AuthAPI');
const SessionManager = require('../../src/api/session/SessionManager');
const loginPayload = require('../../src/api/payloads/loginPayload');
const config = require('../../src/config/config');
const ApiLoginWorkflow = require('../../src/workflows/ApiLoginWorkflow');
const PageManager = require('../../src/manager/PageManager');
const OrderWorkflow = require('../../src/workflows/OrderWorkflow');
const users = require('../../src/data/user');

let apiLoginWorkflow;

test.beforeEach(async ({ request, page }) => {
    apiLoginWorkflow = new ApiLoginWorkflow(request, page);
    await apiLoginWorkflow.login();
});
test('Login via API and validate UI', async ({ request, page }) => {



    // Validation
    await expect(page.locator("button[routerlink='/dashboard/myorderss']")).toBeVisible();
});

test('place order test', async ({ page }) => {
    const pageManager = new PageManager(page);
    const orderWorkflow = new OrderWorkflow(pageManager);

    await orderWorkflow.placeOrder(users.admin);
})
