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
        return $('#react-burger-menu-btn');
    }

    get myButton2 () {
        return $('#logout_sidebar_link');
    }
    get flashAlert1 () {
        return $('.bm-menu');
    }
    get flashAlert2 () {
        return $('#inventory_sidebar_link');
    }
    get flashAlert3 () {
        return $('#about_sidebar_link');
    }
    get flashAlert4 () {
        return $('#logout_sidebar_link');
    }
    get flashAlert5 () {
        return $('#reset_sidebar_link');
    }
    
        /**
         * define selectors using getter methods
         */
        
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
