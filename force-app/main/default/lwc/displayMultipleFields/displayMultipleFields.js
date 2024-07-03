import { LightningElement, track } from 'lwc';
import getConsultantDetails from '@salesforce/apex/TestWrapperClass.getConsultantDetails';
import getPastInformationDetails from '@salesforce/apex/TestWrapperClass.getPastInformationDetails';
import getClientDetails from '@salesforce/apex/TestWrapperClass.getClientDetails';
import getProjectDetails from '@salesforce/apex/TestWrapperClass.getProjectDetails';
import getTrainingDetails from '@salesforce/apex/TestWrapperClass.getTrainingDetails';

import { NavigationMixin } from 'lightning/navigation';
export default class DisplayMultipleFields extends NavigationMixin(LightningElement) {

    @track showConsultants = false;
    @track consultant = [];

    @track showPastInfo = false;
    @track pastInfo = [];

    @track showProjects = false;
    @track project = [];

    @track showClients  = false;
    @track client = [];

    @track showTraining = false;
    @track training = [];

    navigateToConsultant(event)
    {
        let cmpDef = {
            componentDef : "c:consultantComponent"
        };
        let encodeDef = btoa(JSON.stringify(cmpDef));
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
                url : "/one/one.app#" + encodeDef
            }
        });
    }

    navigateToConsultantData()
    {
        getConsultantDetails()
        .then(result=>{
            this.consultant = result;
            this.showConsultants = true;
        })
        .catch(error=>{
            console.error(error);
        })
    }

    hideConData()
    {
        console.log('closing Button');
        this.showConsultants = false;
    }


    navigateToProject(event)
    {
        let cmpDef = {
            componentDef : "c:project"
        };
        let encodeDef = btoa(JSON.stringify(cmpDef));
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
                url : "/one/one.app#" + encodeDef
            }
        });
    }

    navigateToProjectData()
    {
        getProjectDetails()
        .then(result=>{
            this.project = result;
            this.showProjects = true;
        })
        .catch(error=>{
            console.error(error);
        })
    }

    hideProjectData()
    {
        console.log('closing Button');
        this.showProjects = false;
    }


    navigateToClient(event)
    {
        let cmpDef = {
            componentDef : "c:client"
        };
        let encodeDef = btoa(JSON.stringify(cmpDef));
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
                url : "/one/one.app#" + encodeDef
            }
        });
    }

    navigateToClientData()
    {
        getClientDetails()
        .then(result=>{
            this.client = result;
            this.showClients = true;
        })
        .catch(error=>{
            console.error(error);
        })
    }

    hideClientData()
    {
        console.log('closing Button');
        this.showClients = false;
    }


    navigateToTraining(event)
    {
        let cmpDef = {
            componentDef : "c:training"
        };
        let encodeDef = btoa(JSON.stringify(cmpDef));
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
                url : "/one/one.app#" + encodeDef
            }
        });
    }

    navigateToTrainingData()
    {
        getTrainingDetails()
        .then(result=>{
            this.training = result;
            this.showTraining = true;
        })
        .catch(error=>{
            console.error(error);
        })
    }

    hideTrainingData()
    {
        console.log('closing Button');
        this.showTraining = false;
    }


    navigateToPastInfo(event)
    {
        let cmpDef = {
            componentDef : "c:pastInformationComponent"
        };
        let encodeDef = btoa(JSON.stringify(cmpDef));
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
                url : "/one/one.app#" + encodeDef
            }
        });
    }

    navigateToPastInfoData()
    {
        getPastInformationDetails()
        .then(result=>{
            this.pastInfo = result;
            this.showPastInfo = true;
        })
        .catch(error=>{
            console.error(error);
        })
    }

    hideTrainingData()
    {
        console.log('closing Button');
        this.showTraining = false;
    }
}