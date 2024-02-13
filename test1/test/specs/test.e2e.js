import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';

// Test Case ID 1
// Test Case Title: Valid Login

describe('Valid Login', () => {
    it('Data is entered', async () => {
        await LoginPage.open(); 
        await LoginPage.inputUsername.setValue('standard_user')
        await expect(LoginPage.inputUsername).toHaveValue('standard_user')
        await LoginPage.inputPassword.setValue('secret_sauce')
        await expect(LoginPage.inputPassword).toHaveValue('secret_sauce')
        await LoginPage.login('standard_user', 'secret_sauce')
        await browser.pause(2000)
    });

    it('User on inventory page', async () => {
        await  expect(browser).toHaveUrlContaining('inventory')
     });

    it('Products and cart visible', async () => {
        await expect(LoginPage.flashAlert).toBeDisplayed()
        await expect(LoginPage.flashAlert2).toBeDisplayed()
    });



});