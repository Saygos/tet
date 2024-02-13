import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

//Test Case ID 4
//Test Case Title Logout

describe(' ID4 Logout ', () => {
    it('login   ', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await browser.pause(2000) 
    });

    it('Menu are expanded 4 items are displayed ', async () => { 
        await LoginPage.myButton1.click({ button: 'left' }) 
        await browser.pause(2000)
        await expect(LoginPage.flashAlert1).toBeDisplayed()
        await expect(LoginPage.flashAlert2).toBeDisplayed()
        await expect(LoginPage.flashAlert2).toHaveText('All Items') 
        await expect(LoginPage.flashAlert3).toBeDisplayed()
        await expect(LoginPage.flashAlert3).toHaveText('About') 
        await expect(LoginPage.flashAlert4).toBeDisplayed()
        await expect(LoginPage.flashAlert4).toHaveText('Logout') 
        await expect(LoginPage.flashAlert5).toBeDisplayed()
        await expect(LoginPage.flashAlert5).toHaveText('Reset App State')  
    });

    it('"Username" and "Password" are empty', async () => {
        await LoginPage.myButton2.click({ button: 'left' }) 
        await browser.pause(2000)
        await expect(browser).toHaveUrlContaining('saucedemo')
        await expect(LoginPage.inputUsername).toHaveValue('')
        await expect(LoginPage.inputPassword).toHaveValue('')
    });



})