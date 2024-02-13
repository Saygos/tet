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

    it('Buy', async () => {
        await LoginPage.myButton1.click({ button: 'left' }) 
        await browser.pause(2000)
        await LoginPage.itemBike.getText();  
    });
    
    it('Cart page is displayed, product are the same', async () => {
        await LoginPage.myButton4.click({ button: 'left' }) 
        await expect(browser).toHaveUrlContaining('cart')
        await LoginPage.itemNameInCart.getText()
        await expect(LoginPage.itemNameInCartText).toEqual(LoginPage.itemBikeText)
        await browser.pause(2000)
    });
    it('Checkout Error', async () => {
        await LoginPage.myButton3.click({ button: 'left' })
        await browser.pause(1000)
        await expect(LoginPage.myButton5).toHaveValue('')
        await expect(LoginPage.myButton6).toHaveValue('')
        await expect(LoginPage.myButton7).toHaveValue('')
        await LoginPage.myButton8.click({ button: 'left' }) 
        await browser.pause(1000)
        await expect(LoginPage.myButton9).toBeExisting();		 
        await expect(LoginPage.myButton9).toBeDisplayed() 
        await expect(LoginPage.myButton9).toHaveTextContaining('Error: First Name is required')  
        await browser.pause(1000)
    });

    it('Invalid First Name Error', async () => {
        await browser.pause(1000)
        await expect(LoginPage.myButton5).toHaveValue('')
        await LoginPage.myButton8.click({ button: 'left' }) 
        await browser.pause(1000)
        await expect(LoginPage.myButton9).toBeExisting();		 
        await expect(LoginPage.myButton9).toBeDisplayed() 
        await expect(LoginPage.myButton9).toHaveTextContaining('Error: First Name is required')  
        await browser.pause(1000)
    });

    it('Invalid Last Name Error', async () => {
        await browser.pause(1000)
        await LoginPage.myButton5.setValue('Leon')
        await expect(LoginPage.myButton5).toHaveValue('Leon') 
        await expect(LoginPage.myButton6).toHaveValue('')
        await expect(LoginPage.myButton7).toHaveValue('')
        await LoginPage.myButton8.click({ button: 'left' }) 
        await browser.pause(1000)
        await expect(LoginPage.myButton9).toBeExisting();		 
        await expect(LoginPage.myButton9).toBeDisplayed() 
        await expect(LoginPage.myButton9).toHaveTextContaining('Error: Last Name is required')  
        await browser.pause(1000)
    });

    it('Invalid Postal Code Error', async () => {
        await browser.pause(1000)
        await LoginPage.myButton5.setValue('Leon')
        await expect(LoginPage.myButton5).toHaveValue('Leon')
        await LoginPage.myButton6.setValue('Kennedy')
        await expect(LoginPage.myButton6).toHaveValue('Kennedy')
        await expect(LoginPage.myButton7).toHaveValue('')
        await LoginPage.myButton8.click({ button: 'left' }) 
        await browser.pause(1000)
        await expect(LoginPage.myButton9).toBeExisting()		 
        await expect(LoginPage.myButton9).toBeDisplayed() 
        await expect(LoginPage.myButton9).toHaveTextContaining('Error: Postal Code is required')  
        await browser.pause(1000)
    });

});