import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button'); 
    }
    get myButton1 () {
        return $('#add-to-cart-sauce-labs-bike-light'); 
    }
    get myButton2 () {
        return $('#shopping_cart_container'); 
    }
    get myButton3 () {
        return $('#checkout'); 
    }
    get myButton4 () {
        return $('#finish'); 
    }
    get myButton5 () {
        return $('#back-to-products'); 
    }
    get myButton5 () {
        return $('#back-to-products'); 
    }
    get flashAlert1 () {
        return $('.shopping_cart_badge'); 
    }
    get flashAlert2 () {
        return $('.btn.btn_secondary.btn_small.btn_inventory'); 
    }
    get itemBike () {
        return $('#item_0_title_link');
    }get itemNameInCart () {
        return $('#item_0_title_link');
    }
    get flashAlert3 () {
        return $('.checkout_info_wrapper'); 
    }
    get flashAlert4 () {
        return $('#first-name'); 
    }
    get flashAlert5 () {
        return $('#last-name'); 
    }
    get flashAlert6 () {
        return $('#postal-code'); 
    }
    get ItemStep3 () {
        return $('.cart_list'); 
    }
    get Price1 () {
        return $('.inventory_item_price'); 
    }
    get Price2 () {
        return $('.inventory_item_price'); 
    }
    get ItemCheck () {
        return $('#item_0_title_link'); 
    }
    get flashAlert7 () {
        return $('#checkout_complete_container'); 
    }
    get flashAlert8 () {
        return $$('.inventory_item'); 
    }
    get flashAlert9 () {
        return $('shopping_cart_badge'); 
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await browser.pause(1000)
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}




export default new LoginPage();  

