const { BasePage } = require("./basePage");
exports.SingUpPage = class SingUpPage extends BasePage {

    constructor(page) {
        super(page, '/sign-up');
        this.fullName = page.locator("[placeholder='Full name']");
        this.email = page.locator("[type='email']");
        this.password = page.locator("[type='password']");
        this.registerButton = page.getByRole('button');
    }

    async registration(fullName, userEmail, userPassword) {
        await this.fullName.fill(fullName);
        await this.email.type(userEmail);
        await this.password.type(userPassword);
        await this.registerButton.click();

    }

    async clickSingInLink() {
        await this.signUpLink.click();
    }
}