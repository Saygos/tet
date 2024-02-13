import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

//Test Case ID 9
//Test Case Title Checkout without products

describe(' Test Case ID 9,Test Case Title Checkout without products  ', 
() => {
    it('Login', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await browser.pause(2000)
    });

    it('Cart shop displayed/cart is empty', async () => {
        await LoginPage.myButton1.click({ button: 'left' }) 
        await browser.pause(2000)
        await expect(browser).toHaveUrlContaining('cart')
        await expect(LoginPage.cartItemElement).not.toHaveElementClass(LoginPage.empty)
    });

    it('User located cart/Page have Cart error massage', async () => {
        await LoginPage.myButton2.click({ button: 'left' }) 
        await browser.pause(1000)
        await expect(LoginPage.flashAlert1).toBeExisting()
        await expect(LoginPage.flashAlert1).toBeDisplayed()
        await expect(LoginPage.flashAlert1).toHaveText('Cart is empty')  
        await expect(browser).toHaveUrlContaining('cart')  
        await browser.pause(2000)
     });

    

});