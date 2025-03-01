import { LightningElement } from '@lwc/engine-dom';
import { NavigationMixin } from 'lightning/navigation';

export default class NavToChatterHome extends NavigationMixin(
    LightningElement
) {
    navigateToChatter() {
        // Use the built-in 'Navigate' method
        this[NavigationMixin.Navigate]({
            // Pass in pageReference
            type: 'standard__namedPage',
            attributes: {
                pageName: 'chatter'
            }
        });
    }
}
