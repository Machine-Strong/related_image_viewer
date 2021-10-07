import { LightningElement, wire } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import GUID_GENERATED_CHANNEL from '@salesforce/messageChannel/MS_RIV__GUID_Generated__c';

export default class TestApp extends LightningElement {
@wire(MessageContext)
messageContext;

subscription = null;

connectedCallback(){
    this.subscribeToMessageChannel();
}

subscribeToMessageChannel(){
    this.subscription = subscribe(
        this.messageContext,
        GUID_GENERATED_CHANNEL,
        (message) => this.handleMessage(message)
    );
}

handleMessage(message){
    let guid = message.guid;
    // YOUR AWESOME LOGIC HERE
}
