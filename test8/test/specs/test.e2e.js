import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import MainPage from '../pageobjects/main.page.js'
//Test Case ID 8
//Test Case Title Valid Checkout 
describe(' Case ID 8 Test Case Title Valid Checkout ', () => {
    it('Login  ', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await browser.pause(1000)
    });

    it('Product is added to cart/number displayed  ', async () => {
        await LoginPage.myButton1.click({ button: 'left' }) 
        await browser.pause(1000)
        await expect(LoginPage.flashAlert1).toBeDisplayed()
        await expect(LoginPage.flashAlert1).toHaveText('1')
        await expect(LoginPage.flashAlert2).toBeDisplayed() 
        await LoginPage.itemBike.getText(); 
    
    });

    it('Cart page displayed/product are same', async () => {
        await LoginPage.myButton2.click({ button: 'left' }) 
        await  expect(browser).toHaveUrlContaining('cart')
        await LoginPage.itemNameInCart.getText()
        await LoginPage.Price1.getText()
        await expect(LoginPage.itemNameInCartText).toEqual(LoginPage.itemBikeText)
    });

    it('Checkout form are displayed ', async () => {
        await LoginPage.myButton3.click({ button: 'left' }) 
        await expect(LoginPage.flashAlert3).toBeDisplayed() 
        await expect(LoginPage.flashAlert4).toBeDisplayed() 
        await expect(LoginPage.flashAlert5).toBeDisplayed() 
        await expect(LoginPage.flashAlert6).toBeDisplayed() 
        await browser.pause(2000)
    });

    it('Data is entered', async () => {
        await MainPage.FirstName.setValue('Leon')
        await MainPage.LastName.setValue('Kennedy')
        await MainPage.ZipCode.setValue('10001')
        await expect(MainPage.FirstName).toHaveValue('Leon')
        await expect(MainPage.LastName).toHaveValue('Kennedy')
        await expect(MainPage.ZipCode).toHaveValue('10001')
        await MainPage.buy('Leon', 'Kennedy', '10001')
        await browser.pause(2000) 
    });

    it('Overview page displayed/Product same/price same  ', async () => {
        await browser.pause(2000)
        await expect(browser).toHaveUrlContaining('checkout-step-two')
        await LoginPage.Price2.getText()
        await LoginPage.ItemCheck.getText()
        await expect(LoginPage.Price1Text).toEqual(LoginPage.Price2Text)
        await expect(LoginPage.itemNameInCartText).toEqual(LoginPage.ItemCheckText)
        await LoginPage.myButton4.click({ button: 'left' }) 
    });

    it('User in Checkout Complete page/ message displate  ', async () => {
        await expect(browser).toHaveUrlContaining('checkout-complete')
        await expect(LoginPage.flashAlert7).toBeDisplayed()   
        await expect(LoginPage.flashAlert7).toHaveTextContaining('Thank you for your order!') 
        await browser.pause(1000)
        await LoginPage.myButton5.click({ button: 'left' }) 
        await browser.pause(2000)
    });

    it('User in inventory page/Products displayed/Cart empty', async () => {
        await expect(browser).toHaveUrlContaining('inventory')
        await expect(LoginPage.flashAlert8).toBeDisplayed()  
        await expect(LoginPage.flashAlert1).not.toBeDisplayed() 
        await browser.pause(2000)
    });



});