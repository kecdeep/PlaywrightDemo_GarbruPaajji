const BaseAPI = require('./BaseAPI');
const Endpoints = require('../../constants/EndPoints');
const SessionManager = require('../session/SessionManager');
class AuthAPI extends BaseAPI {

    constructor(request) {
        super(request);
    }

    async login(credentials) {
        const result = await this.post(
            Endpoints.LOGIN,
            credentials
        );

        SessionManager.setToken(result.body.token);
        SessionManager.setUserId(result.body.userId);
        return result;
    }
}

module.exports = AuthAPI;