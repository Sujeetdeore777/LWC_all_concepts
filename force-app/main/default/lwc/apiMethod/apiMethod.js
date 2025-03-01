import { LightningElement } from '@lwc/engine-dom';

export default class ApiMethod extends LightningElement {
    handleRefresh() {
        this.template.querySelector('c-clock').refresh();
    }
}
