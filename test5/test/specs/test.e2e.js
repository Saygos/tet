import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

//Test Case ID 5
//Test Case Title Saving the card after logout

describe(' ID 5 Saving the card after logout ', () => {
    it('login', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await browser.pause(2000)
    });

    it('Product is added to cart/number displayed', async () => {
        await LoginPage.myButton1.click({ button: 'left' }) 
        await browser.pause(2000)
        await expect(LoginPage.flashAlert8).toBeDisplayed()
        await expect(LoginPage.flashAlert8).toHaveText('1')
        await expect(LoginPage.flashAlert9).toBeDisplayed() 
        await LoginPage.itemBike.getText()  
    });

    it('Menu are expanded 4 items are displayed', async () => {
        await LoginPage.myButton2.click({ button: 'left' })
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

    it('Open loginpage "Username" and "Password" are empty', async () => {
        await LoginPage.myButton3.click({ button: 'left' }) 
        await browser.pause(1000)
        await expect(browser).toHaveUrlContaining('saucedemo')
        await expect(LoginPage.inputUsername).toHaveValue('')
        await expect(LoginPage.inputPassword).toHaveValue('')
        await LoginPage.login('standard_user', 'secret_sauce')
        await browser.pause(2000)
    });

    it('User on Inventory page/Products and cart are displayed', async () => {
        await expect(browser).toHaveUrlContaining('inventory')
        await expect(LoginPage.flashAlert6).toBeDisplayed()
        await expect(LoginPage.flashAlert7).toBeDisplayed()
    });

    it('Cart page is displayed, product are the same', async () => {
        await LoginPage.myButton4.click({ button: 'left' }) 
        await expect(browser).toHaveUrlContaining('cart')
        await LoginPage.itemNameInCart.getText()
        await expect(LoginPage.itemNameInCartText).toEqual(LoginPage.itemBikeText)
        await browser.pause(2000)
    });



});