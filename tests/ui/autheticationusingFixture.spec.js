const { test, expect } = require('../../src/fixtures/auth.fixture');
const users = require('../../src/data/user');

test('place order ', async ({ authenticatedPage }) => {

    const pm = authenticatedPage;
    const productPage = pm.getProductPage();
    console.log(productPage);
});