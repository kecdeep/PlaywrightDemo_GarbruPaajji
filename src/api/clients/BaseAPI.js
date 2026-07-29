const config = require('../../config/config')
const SessionManager = require('../session/SessionManager');
class BaseAPI {
    constructor(request) {
        this.request = request;
        this.baseURL = config.apiURL;
    }

    getHeaders(customHeaders = {}) {
        const headers = {
            ...customHeaders
        };
        const token = SessionManager.getToken();

        if (token) {
            headers.Authorization = `Bearer ${token}`
        }

        return headers;
    }

    async post(endpoint, payload, headers = {}) {

        const response = await this.request.post(`${this.baseURL}${endpoint}`,
            {
                data: payload,
                headers: this.getHeaders(headers)
            }
        );

        return {
            response,
            body: await response.json()
        };
    }

    async get(endpoint, headers = {}) {
        const response = await this.request.get(`${this.baseURL}${endpoint}`, {
            headers: this.getHeaders(headers)
        });

        return {
            response,
            body: await response.json()
        };
    }
}
module.exports = BaseAPI;