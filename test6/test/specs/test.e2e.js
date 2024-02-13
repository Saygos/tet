import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import TakeName from '../pageobjects/TakeName.js';

//Test Case ID 6
//Test Case Title Sorting

describe(' ID 6 Sorting ', () => {
    it('login', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await browser.pause(2000)
    });
    
    it('lo to hi', async () => {
        await LoginPage.productSortContainerOptions[2].click()
        await browser.pause(1000);
        const productNames = await TakeName.getProductNames()
        const sortedProductNames = [...productNames].sort((a, b) => a.price - b.price)
        await  expect(productNames).toEqual(sortedProductNames)
    });
       
    it('hi to lo', async () => {
        await LoginPage.productSortContainerOptions[3].click()
        await browser.pause(1000);
        const productNames = await TakeName.getProductNames()
        const sortedProductNames = [...productNames].sort((a, b) => b.price - a.price)
        await expect(productNames).toEqual(sortedProductNames)
    });

    it('a to z', async () => {
        await LoginPage.productSortContainerOptions[0].click()
        await browser.pause(1000)
        const productNames = await TakeName.getProductNames()
        const sortedProductNames = [...productNames].sort()
        await expect(productNames).toEqual(sortedProductNames)
    });

    it('z to a', async () => {
        await LoginPage.productSortContainerOptions[1].click()
        await browser.pause(1000)
        const productNames = await TakeName.getProductNames()
        const sortedProductNames = [...productNames].sort((a, b) => b.localeCompare(a))
        await expect(productNames).toEqual(sortedProductNames)
    });



});

    








