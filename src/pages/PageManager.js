const LoginPage = require('./LoginPage');
const HomePage = require('./HomePage');
const ProductPage = require('./ProductPage');

class PageManager {
    constructor(page) {
        this.page = page;
    }

    getLoginPage() {
        if (!this.loginPage) {
            this.loginPage = new LoginPage(this.page);
        }
        return this.loginPage;
    }

    getHomePage() {
        if (!this.homePage) {
            this.homePage = new HomePage(this.page);
        }
        return this.homePage;
    }

    getProductPage() {
        if (!this.productPage) {
            this.productPage = new ProductPage(this.page);
        }
        return this.productPage;
    }
}

module.exports = PageManager;

//"This is Lazy Initialization combined with a Singleton-like implementation inside a PageManager. The getter method also acts as a simple
// Factory Method because it controls the creation and retrieval of page objects.


/*Test
   │
   ▼
PageManager
   │
   ▼
getLoginPage()
   │
   ├── Exists?
   │
   ├── Yes ─────────► Return Existing Object
   │
   └── No
        │
        ▼
Create LoginPage
        │
        ▼
Store Object
        │
        ▼
Return Object
*/

//"I use a PageManager to centralize page object creation. The page objects are lazily initialized, meaning they're created only when first requested. Each page is cached, so subsequent requests return the same instance for the lifetime of that PageManager.
// This reduces unnecessary object creation and keeps object management centralized."