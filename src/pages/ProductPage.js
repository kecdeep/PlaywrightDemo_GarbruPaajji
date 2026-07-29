const BasePage = require('./BasePage');

class ProductPage extends BasePage {
    constructor(page) {
        super(page);
        this.btnCheckout = this.page.getByRole('button', { name: 'Checkout' });

    }

    async navigateToCheckOutPage() {
        await this.click(this.btnCheckout);
    }
}
module.exports = ProductPage;