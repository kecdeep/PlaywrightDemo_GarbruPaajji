const { test } = require('@playwright/test');

test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
        await testInfo.attach('Screenshot', {
            path: await page.screenshot(),
            contentType: 'image/png'
        });
    }
});