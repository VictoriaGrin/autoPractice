const { test, expect, request } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { users } = require('../../test-data/users');
const { userData } = require('../../test-data/data');
const config = require("../../playwright.config");

let singUpPage;
const env = config.default.use.env;

test.describe('SingUp tests', () => {

    test.beforeEach(async ({ page }) => {
        singUpPage = new singUpPage(page);
        await singUpPage.open();

    });

    test('Singup with valid data', async ({ page }) => {
        await SingUpPage.singup('userData');
        await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/sign-in');
    });
})