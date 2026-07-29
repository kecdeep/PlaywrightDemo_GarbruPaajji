const AuthAPI = require("../../src/api/clients/AuthAPI")
const loginPayload = require('../../src/api/payloads/loginPayload');
const { test, expect } = require('@playwright/test');

test('login api', async ({ request }) => {
    const authAPI = new AuthAPI(request);
    const result = await authAPI.login(loginPayload.validUser)
    console.log(result.body);
    expect(result.response.status()).toBe(200);
    expect(result.body.token).toBeTruthy();
    expect(result.body.token).toBeTruthy();
    expect(result.body.userId).toBeTruthy();
})