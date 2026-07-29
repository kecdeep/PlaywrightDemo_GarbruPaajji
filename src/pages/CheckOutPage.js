const BasePage = require('./BasePage');
const { test, expect } = require('@playwright/test')

class CheckOutPage extends BasePage {
    constructor(page) {
        super(page);
        this.page.locator()
    }
}