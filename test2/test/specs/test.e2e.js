import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

//Test Case ID 2
//Test Case Title Login with invalid password

describe(' ID2 Login with invalid password ', () => {
    it(' Data is entered  ', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', '123456789')
        await expect(LoginPage.inputUsername).toHaveValue('standard_user')
        await expect(LoginPage.inputPassword).toHaveValue('123456789')
        await browser.pause(3000)
    });

    it(' "X" icons are displayed +have redline', async () => {
        await expect(LoginPage.flashAlert1).toBeDisplayed()  
        const usernameBorderColor = await LoginPage.flashAlert3.getCSSProperty('color')
        await  expect(usernameBorderColor.parsed.hex).toEqual('#e2231a')
    });
    
    it(' Epic sadface' , async () => {
        await expect(LoginPage.flashAlert2).toBeDisplayed()
        await expect(LoginPage.flashAlert2).toHaveText('Epic sadface: Username and password do not match any user in this service')  
    });
   


});