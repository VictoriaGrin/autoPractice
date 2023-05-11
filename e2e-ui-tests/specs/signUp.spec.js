const { test, expect, request } = require('@playwright/test');
const { SingUpPage } = require('../pages/signUpPage');
const config = require("../../playwright.config");
const { users } = require('../../test-data/users');
const { userData } = require('../../test-data/data');

const user = users[config.default.use.env].user;

let singUpPage;
const env = config.default.use.env;

test.describe('SingUp tests', () => {

    test.beforeEach(async ({ page }) => {
        singUpPage = new SingUpPage(page);
        await singUpPage.open();

    });

    test.only('Registration with valid data', async ({ page }) => {
        await singUpPage.registration('qwertyy','qwer@hfghg.com','test_123');
        await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/sign-in');
    });
})