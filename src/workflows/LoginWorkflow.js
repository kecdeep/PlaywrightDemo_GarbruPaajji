const PageManager = require('../manager/PageManager');
const config = require('../config/config');
class LoginWorkflow {

    /**
     * @param {PageManager} pageManager
     */
    constructor(pageManager) {

        this.loginPage = pageManager.getLoginPage();
        this.homePage = pageManager.getHomePage();
        this.cartPage = pageManager.getProductPage();
    }
    async loginAs(user) {
        console.log(user);

        await this.loginPage.navigate(config.baseURL);
        await this.loginPage.login(user);
        await this.homePage.verifyHomePage();
    }
}
module.exports = LoginWorkflow;