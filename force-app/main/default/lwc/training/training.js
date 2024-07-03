import { LightningElement } from 'lwc';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class Training extends NavigationMixin(LightningElement) {
    trainingId;
    redirect = true;

    handleSuccess(event)
    {
        event.prevetDefault();
        this.trainingId = event.detail.id;

        const evt = new ShowToastEvent({
            title:'Success',
            message:'Training Created Successfullt',
            variant:'success'
        });
        this.dispatchEvent(evt);

        if(redirect == true)
        {

            this[NavigationMixin.Navigate]({
                type:'standard__recordPage',
                attribute: {
                    recordId: this.trainingId,
                    objectApiName: 'Training__c',
                    actionName: 'view'
                }
            });
        }
    }

    handleBack()
    {
        let cmfDef ={
            componentDef: "c:defaultMultipleFields"
        };
        
        let encodeDef = btoa(JSON.stringify(cmfDef));
        this[NavigationMixin.Navigate]({
            type: "standard__WebPage",
            attribute: {
                url: "/one/one.app#" + encodeDef
            }
        });
    }
}