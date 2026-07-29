
const AuthAPI = require('../api/clients/AuthAPI');
const SessionManager = require('../api/session/SessionManager');
const loginPayload = require('../api/payloads/loginPayload');
const config = require('../config/config');

class ApiLoginWorkflow {

    constructor(request, page) {
        this.request = request;
        this.page = page;
        this.authAPI = new AuthAPI(request);
    }

    async login() {

        await this.authAPI.login(loginPayload.validUser);

        await this.page.addInitScript((token) => {
            window.localStorage.setItem("token", token);
        }, SessionManager.getToken());

        await this.page.goto(config.baseURL);
    }
}
module.exports = ApiLoginWorkflow;