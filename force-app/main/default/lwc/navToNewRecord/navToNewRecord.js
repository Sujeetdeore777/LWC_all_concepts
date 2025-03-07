import { LightningElement } from '@lwc/engine-dom';
import { NavigationMixin } from 'lightning/navigation';

export default class NavToNewRecord extends NavigationMixin(LightningElement) {
    navigateToNewContact() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }
        });
    }
}
