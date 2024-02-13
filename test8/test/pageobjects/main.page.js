import { $ } from '@wdio/globals'
import Page from './page.js';

class MainPage  {
    get FirstName(){
        return $('#first-name');
    }
    get LastName(){
        return $('#last-name');
    }
    get ZipCode(){
        return $('#postal-code');
    }
    get Continue () {
        return $('#continue'); 
    }
    async buy (name, lastname, zipcode) {
        await this.FirstName.setValue(name);
        await this.LastName.setValue(lastname);
        await this.ZipCode.setValue(zipcode);
        await browser.pause(2000)
        await this.Continue.click();
    
    }}



export default new MainPage();  
