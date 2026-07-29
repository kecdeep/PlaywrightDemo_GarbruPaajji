class SessionManager {

    static token = null;
    static userId = null;

    static setToken(token) {
        this.token = token;
    }

    static getToken() {
        return this.token;
    }

    static setUserId(userId) {
        this.userId = userId;
    }

    static getUserId() {
        return this.userId;
    }
}

module.exports = SessionManager;