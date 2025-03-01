import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class ApexWireMethodToProperty extends LightningElement {
    @wire(getContactList) contacts;

    get hasContacts() {
        return this.contacts && Array.isArray(this.contacts.data) && this.contacts.data.length;
    }
}
