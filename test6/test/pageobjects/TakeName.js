import { $, $$ } from '@wdio/globals';
import Page from './page.js';

class TakeName extends Page {
    // ...other selectors and methods...

    /**
     * Get an array of product names from the page.
     * @returns {Promise<string[]>} An array of product names.
     */
    async getProductNames() {
        const productElements = await $$('.inventory_item');
        const productNames = [];

        for (const element of productElements) {
            const productName = await element.getText();
            productNames.push(productName);
        }

        return productNames;
    }

   
}

export default new TakeName();


