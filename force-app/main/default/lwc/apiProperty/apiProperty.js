import { LightningElement } from '@lwc/engine-dom';

export default class ApiProperty extends LightningElement {
    percentage = 50;

    handlePercentageChange(event) {
        this.percentage = event.target.value;
    }
}
