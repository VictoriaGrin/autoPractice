const { BasePage } = require("./basePage");
exports.RegistrationPage = class RegistrationPage extends BasePage {

    constructor(page) {
        super(page, '/sign-up');
        this.FullName = page.locator("[ placeholder='Fullname']");
        this.newEmail = page.locator("[placeholder='Emailaddress']");
        this.password = page.locator("[type='password']");
        this.registerButton = page.getByRole('button');
    }

    async SignUpPage(userFullName, usernewEmail, userPassword) {
        await this.FullName.type(userFullName);
        await this.newEmail.type(usernewEmail);
        await this.password.type(userPassword);
        await this.registerButton.click();

    }
}