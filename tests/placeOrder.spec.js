const { test, expect } = require('@playwright/test');
const users = require('../src/data/user');
const PageManager = require('../src/pages/PageManager');
const OrderWorkflow = require('../src/workflows/OrderWorkflow');

test('place order test', async ({ page }) => {
    const pageManager = new PageManager(page);
    const orderWorkflow = new OrderWorkflow(pageManager);

    await orderWorkflow.placeOrder(users.admin);
})

