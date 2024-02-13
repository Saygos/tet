import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

//Test Case ID 3
//Test Case Title Login with invalid login

describe(' ID 3 Login with invalid login ', () => {
    it('Data is entered ', async () => {
        await LoginPage.open()
        await LoginPage.login('random_user_logo', 'secret_sauce')
        await expect(LoginPage.inputUsername).toHaveValue('random_user_logo')
        await expect(LoginPage.inputPassword).toHaveValue('secret_sauce')
        await browser.pause(3000)
    });

    it('"X" icons are displayed +have redline', async () => {
        await expect(LoginPage.flashAlert1).toBeDisplayed()  
        const usernameBorderColor = await LoginPage.flashAlert3.getCSSProperty('color')
        await  expect(usernameBorderColor.parsed.hex).toEqual('#e2231a')
    });
    
    it('Epic sadface' , async () => {
        await expect(LoginPage.flashAlert2).toBeDisplayed()
        await expect(LoginPage.flashAlert2).toHaveText('Epic sadface: Username and password do not match any user in this service')  
    });

});