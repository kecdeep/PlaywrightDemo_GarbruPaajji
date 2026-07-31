
const BasePage = require('./BasePage');
const env = require('../config/config');

class LoginPage extends BasePage {

    /**
* @param {import('@playwright/test').Page} page
*/
    constructor(page) {
        super(page);

        this.txtEmail = page.locator('#userEmail');
        this.txtPassword = page.getByPlaceholder('enter your passsword');
        this.btnLogin = page.getByRole('button', { name: 'Login' });


    }
    /**
     * @param {{email:string,password:string}} user
     */
    async login(user) {
        await this.enterText(this.txtEmail, user.email);
        await this.enterText(this.txtPassword, user.password);
        await this.click(this.btnLogin);

    }

    async navigate() {
        await super.navigate(env.baseURL);
    }
}
module.exports = LoginPage;