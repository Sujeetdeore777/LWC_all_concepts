import { LightningElement } from '@lwc/engine-dom';
import { NavigationMixin } from 'lightning/navigation';

export default class NavToListView extends NavigationMixin(LightningElement) {
    navigateToList() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            }
        });
    }
}
