import { LightningElement } from 'lwc';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
export default class Client extends NavigationMixin(LightningElement) 
{
    clientId;
    redirect = true;

    handleSuccess(event)
    {
        event.prevetDefault();
        this.clientid = event.detail.id;

        const evt = new ShowToastEvent({
            title:'Success',
            message:'Client Created Successfully',
            variant:'success'
        });
        this.dispatchEvent(evt);

        if(this.redirect == true)
            {
                this[NavigationMixin.Navigate]({
                    type:'standard__recordpage',
                    attribute: {
                        recordId: this.clientId,
                        objectApiName: 'Client__c',
                        actionName: 'view'
                    }
                });
            }
    }
    handleBack()
    {
        let cmpDef = {
           componentDef: "c:displayMultipleFields"
        };

        let encodeDef = btoa(JSON.stringify(cmpDef));
        this[NavigationMixin.Navigate]({
            type: "standard__WebPage",
            attribute: {
                url: "/one/one.app#" + encodeDef
            }
        });
    }
}