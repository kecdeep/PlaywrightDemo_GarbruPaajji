const BasePage = require('./BasePage');
const { test, expect } = require('@playwright/test')
class HomePage extends BasePage {


    /**
* @param {import('@playwright/test').Page} page
*/
    constructor(page) {
        super(page);
        this.homeLink = this.page.locator('//label[@routerlink="/dashboard"]');
        this.movetoCart = this.page.locator('//div[@class="card-body"]/h5[.="ZARA COAT 3"]/following-sibling::button[2]');
        this.navigateCartPage = this.page.locator('//button[@routerlink="/dashboard/cart"]');
    }


    async verifyHomePage() {
        await expect(this.homeLink).toBeVisible();
    }

    async addToCart() {

        await this.click(this.movetoCart);

    }

    async navigateToCartPage() {
        await this.click(this.navigateCartPage);

    }
}
module.exports = HomePage;