import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

//Test Case ID 7
//Test Case Title Footer Links

describe(' Case ID 7 Footer Links ', () => {
    it('Login ', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await browser.pause(1000)
    });

     it('Facebook company is opened on the new tab', async () => {
        await LoginPage.myButton1.click({ button: 'left' })        
        await browser.pause(2000)
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await  expect(browser).toHaveUrlContaining(LoginPage.facebook)
        await browser.switchToWindow(handles[0])      
        await browser.pause(1000)
    });

 it('Twitter company is opened on the new tab', async () => {
        await LoginPage.myButton2.click({ button: 'left' }) 
        const handles = await browser.getWindowHandles()
        await browser.pause(2000)
        await browser.switchToWindow(handles[2])
        await  expect(browser).toHaveUrlContaining(LoginPage.twitter)
        await browser.switchToWindow(handles[0])
        await browser.pause(1000)
    });

 it('Linkedin company is opened on the new tab', async () => {
        await LoginPage.myButton3.click({ button: 'left' })    
        await browser.pause(2000)
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[3])
        await  expect(browser).toHaveUrlContaining(LoginPage.linkedin)     
        await browser.pause(1000)
    });


    
})