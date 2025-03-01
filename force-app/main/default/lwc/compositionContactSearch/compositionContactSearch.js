import { LightningElement } from '@lwc/engine-dom';
import findContacts from '@salesforce/apex/ContactController.findContacts';

/** The delay used when debouncing event handlers before invoking Apex. */
const DELAY = 350;

export default class CompositionContactSearch extends LightningElement {
    contacts;
    error;

    handleKeyChange(event) {
        // Debouncing this method: Do not actually invoke the Apex call as long as this function is
        // being called within a delay of DELAY. This is to avoid a very large number of Apex method calls.
        window.clearTimeout(this.delayTimeout);
        const searchKey = event.target.value;
        // eslint-disable-next-line @@lwc/engine-dom/@lwc/engine-dom/no-async-operation
        this.delayTimeout = setTimeout(async () => {
            try {
                this.contacts = await findContacts({ searchKey });
                this.error = undefined;
            } catch (error) {
                this.error = error;
                this.contacts = undefined;
            }
        }, DELAY);
    }
}
