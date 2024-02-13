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
        return $('[class=social_facebook]'); 
    }
    get myButton2 () {
        return $('[class=social_twitter]'); 
    }
    get myButton3 () {
        return $('[class=social_linkedin]'); 
    }
    get linkedin () {
        return ('https://www.linkedin.com/company/sauce-labs/'); 
    }
    get twitter () {
        return ('https://twitter.com/saucelabs'); 
    }
    get facebook () {
        return ('https://www.facebook.com/saucelabs'); 
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
