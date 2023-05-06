const { BasePage } = require("./basePage");
exports.LoginPage = class LoginPage extends BasePage {

    constructor(page) {
        super(page, '/sign-in');
        this.email = page.locator("[placeholder='Login']");
        this.password = page.locator("[type='password']");
        this.loginButton = page.getByRole('button');
        this.signup = page.locator("[href='/sign-up']");
 

    }

    async login(userEmail, userPassword) {
        await this.email.type(userEmail);
        await this.password.type(userPassword);
        await this.loginButton.click();
    }

    async OpenSignUpPage() {
        await this.signup.click();
    } 


}