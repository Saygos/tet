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
 
    get myButton3 () {
        return $('#checkout');
    }
    get myButton4 () {
        return $('#shopping_cart_container');
    }
    get myButton5 () {
        return $('#first-name');
    }
    get myButton6 () {
        return $('#last-name');
    }
    get myButton7 () {
        return $('#postal-code');
    }
    get myButton8 () {
        return $('#continue');
    }
    get myButton9 () {
        return $('.error-message-container.error');
    }
    get itemBike () {
        return $('#item_0_title_link');
    }get itemNameInCart () {
        return $('#item_0_title_link');
    }


    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
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
