const { test, expect } = require('@playwright/test');
const AuthAPI = require('../../src/api/clients/AuthAPI');
const SessionManager = require('../../src/api/session/SessionManager');
const loginPayload = require('../../src/api/payloads/loginPayload');
const config = require('../../src/config/config');
const ApiLoginWorkflow = require('../../src/workflows/ApiLoginWorkflow');

test('Login via API and validate UI', async ({ request, page }) => {



    const apiLoginWorkflow = new ApiLoginWorkflow(request, page);

    await apiLoginWorkflow.login();
    // Validation
    await expect(page.locator("button[routerlink='/dashboard/myorders']")).toBeVisible();
});