import { LightningElement } from '@lwc/engine-dom';

export default class MiscDomQuery extends LightningElement {
    selection;

    handleCheckboxChange() {
        // Query the DOM
        const checked = Array.from(
            this.template.querySelectorAll('lightning-input')
        )
            // Filter to only checked items
            .filter((element) => element.checked)
            // Map to their labels
            .map((element) => element.label);
        this.selection = checked.join(', ');
    }
}
