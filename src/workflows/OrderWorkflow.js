const PageManager = require('../pages/PageManager');
const config = require('../config/config');
class OrderWorkflow {

    /**  @param {PageManager} pageManager ;*/

    constructor(pageManager) {
        this.loginPage = pageManager.getLoginPage();
        this.homePage = pageManager.getHomePage();
        this.cartPage = pageManager.getProductPage();
    }
    async placeOrder(user) {
        //  await this.loginPage.navigate(config.baseURL);
        //  await this.loginPage.login(user);
        await this.homePage.verifyHomePage();
        await this.homePage.addToCart();
        await this.homePage.navigateToCartPage();
        await this.cartPage.navigateToCheckOutPage();
    }
}

module.exports = OrderWorkflow;