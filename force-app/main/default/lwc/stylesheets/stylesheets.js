import { LightningElement } from '@lwc/engine-dom';
import textStyles from './text-styles.css';

export default class Stylesheets extends LightningElement {
    static stylesheets = [textStyles];
}
