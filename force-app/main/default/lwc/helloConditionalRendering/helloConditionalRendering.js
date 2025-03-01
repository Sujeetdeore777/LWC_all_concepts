import { LightningElement } from '@lwc/engine-dom';

export default class HelloConditionalRendering extends LightningElement {
    areDetailsVisible = false;

    handleChange(event) {
        this.areDetailsVisible = event.target.checked;
    }
}
