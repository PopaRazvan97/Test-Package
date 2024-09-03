import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class UtilityToast extends LightningElement {
    showToast() {
        const event = new ShowToastEvent({
            title: 'message',
            message: 'This is a message.',
            variant: 'message',
            mode: 'dismissable'
        });
        this.dispatchEvent(event);
    }
}
